import express from "express";
import TextController from "../controllers/text-controller.js";

let textController = new TextController();
const router = express.Router();
router.post("/generate-text", textController.generateText);

export default router;
