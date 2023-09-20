import OpenaiService from "../services/openaiService.js";
import { Request, Response } from "express";

class TextController {
  private openAiService: OpenaiService;

  constructor() {
    this.openAiService = new OpenaiService();
  }

  generateText = async (req: Request, res: Response) => {
    try {
      const { prompt } = req.body;
      const generatedText = await this.openAiService.generateText(null, prompt);

      res.json({ generatedText });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  };
}

export default TextController;
