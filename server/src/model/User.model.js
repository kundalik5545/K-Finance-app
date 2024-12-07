import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      unique: true,
      lowecase: true,
      trim: true,
      index: true,
      required: [true, "UserName is required"],
    },
    firstName: {
      type: String,
      lowecase: true,
    },
    lastName: {
      type: String,
      lowecase: true,
    },
    email: {
      type: String,
      unique: true,
      lowecase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    phone: {
      type: String,
      unique: true,
      match: [/^\d{10}$/, "Please use a valid phone number"],
    },
    password: {
      type: String,
      reqired: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

//1. Hashing new password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//2. Checking hashed password
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//3.Generate accessToken
userSchema.methods.generateAccessToken = function () {
  try {
    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      }
    );
  } catch (error) {
    console.log("Error in generateAccesstoken:-", error);
  }
};

//4. Generate refreshToken
userSchema.methods.generateRefreshToken = function () {
  try {
    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
      }
    );
  } catch (error) {
    console.log("Error in refreshTokenerror:-", error);
  }
};

export const User = mongoose.model("User", userSchema);
