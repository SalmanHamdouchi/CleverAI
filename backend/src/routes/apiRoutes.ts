import express from "express";
import TextController from "../controllers/textController.js";
import CodeController from "../controllers/codeController.js";
import ImageController from "../controllers/imageController.js";
import VideoController from "../controllers/videoController.js";

let textController = new TextController();
let codeController = new CodeController();
let imageController = new ImageController();
let videoController = new VideoController();

const router = express.Router();
router.post("/generate-text", textController.generateText);
router.post("/generate-code", codeController.generateCode);
router.post("/generate-image", imageController.generateImage);
router.post("/generate-video", videoController.generateVideo);

export default router;
