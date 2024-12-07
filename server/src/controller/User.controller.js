import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../model/User.model.js";
import bcrypt from "bcryptjs"; // Add bcrypt for password hashing

const generateTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

const registerNewUser = asyncHandler(async (req, res) => {
  try {
    const { userName, password, firstName, lastName, email, phone } = req.body;

    // 1. Validate input fields
    if (!userName || !password || !firstName || !lastName || !email || !phone) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "All fields are required."));
    }

    // 2. Check if user exists
    const existingUser = await User.findOne({ userName }); // Fixed typo from finfOne to findOne
    if (existingUser) {
      return res
        .status(409)
        .json(
          new ApiResponse(409, null, "User already registered. Please log in.")
        );
    }

    // 3. Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create a new user
    const user = await User.create({
      userName,
      firstName,
      lastName,
      email,
      phone,
      password,
    });

    // 5. Fetch the created user (without sensitive information)
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      return res
        .status(500)
        .json(
          new ApiResponse(
            500,
            null,
            "Something went wrong while registering the user."
          )
        );
    }

    // 6. Return success response
    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          createdUser,
          "User created successfully! Please log in now."
        )
      );
  } catch (error) {
    console.log("Error while creating user", error);
    throw new ApiError("error");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;

  //1. Checking all fields are provoided
  if (!userName || !password) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required."));
  }

  // 2. Check if user exists
  const user = await User.findOne({ userName });
  if (userName) {
    if (!user) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "User not found. Please register!"));
    }
  }

  // 3. Validate password
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    return res
      .status(401)
      .json(new ApiResponse(401, null, "Invalid Password!"));
  }

  //4. If password is valid then generate tokens
  const { accessToken, refreshToken } = await generateTokens(user._id);

  //5. Check created user
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  //Options
  const options = {
    httpOnly: true,
    secure: false,
  };

  //6. Return access and refresh token to user
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
        },
        "User logged In Successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1, // this removes the field from document
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "Lax",
    path: "/",
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"));
});

//To generate refresh token
const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh token is expired or used");
    }

    const options = {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
    };

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefereshTokens(user._id);

    return res
      .status(200)
      .cookie("accessToken1", accessToken, options)
      .cookie("refreshToken1", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});

//TO change the password
const updatePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user?._id);
  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid old password");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});

export {
  registerNewUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  updatePassword,
};
