import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const sessionVerify = asyncHandler(async (req, res, next) => {
  const user = req.user;

  return res.status(200).json(new ApiResponse(200, user, "Token revied!"));
});

export { sessionVerify };
