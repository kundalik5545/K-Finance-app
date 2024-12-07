import { Router } from "express";
const router = Router();

import { getVideos, saveNewVideo } from "../controller/Knowledge.controller.js";

//Handling routes
router.route("/addknowledge").post(saveNewVideo);
router.route("/getknowledge").get(getVideos);

export default router;
