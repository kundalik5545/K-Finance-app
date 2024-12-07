import { Router } from "express";
import { sessionVerify } from "../controller/Auth.controller.js";
import verifyJWT from "../middleware/VerifyJWT.midleware.js";

const router = Router();

router.route("/validate").post(verifyJWT, sessionVerify);

export default router;
