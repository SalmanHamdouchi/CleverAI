import express from "express";
import TextController from "../controllers/text-controller.js";
import CodeController from "../controllers/code-controller.js";
import ImageController from "../controllers/image-controller.js";

let textController = new TextController();
let codeController = new CodeController();
let imageController = new ImageController();

const router = express.Router();
router.post("/generate-text", textController.generateText);
router.post("/generate-code", codeController.generateCode);
router.post("/generate-image", imageController.generateImage);

export default router;
