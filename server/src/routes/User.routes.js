import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerNewUser,
} from "../controller/User.controller.js";

import verifyJWT from "../middleware/VerifyJWT.midleware.js";
const router = Router();

router.route("/register").post(registerNewUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);

export default router;
