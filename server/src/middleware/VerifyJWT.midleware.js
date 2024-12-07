import jwt from "jsonwebtoken";
import { User } from "../model/User.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const verifyJWT = async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken;

    if (!token) {
      return res
        .status(401)
        .json(new ApiResponse(401, null, "Unauthorized Request."));
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      return res
        .status(401)
        .json(new ApiResponse(401, null, "Invalid Access Token"));
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in verifyJWT middleware:", error);

    return res
      .status(401)
      .json(
        new ApiResponse(401, null, error?.message || "Invalid access token")
      );
  }
};

export default verifyJWT;
