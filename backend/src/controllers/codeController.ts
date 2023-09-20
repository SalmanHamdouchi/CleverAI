import OpenaiService from "../services/openaiService.js";
import { Request, Response } from "express";

class CodeController {
  private openAiService: OpenaiService;
  constructor() {
    this.openAiService = new OpenaiService();
  }
  generateCode = async (req: Request, res: Response) => {
    try {
      const { instruction, prompt } = req.body;
      const generatedText = await this.openAiService.generateText(
        instruction,
        prompt
      );

      res.json({ generatedText });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  };
}

export default CodeController;
