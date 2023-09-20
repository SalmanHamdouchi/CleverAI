import ReplicateService from "../services/replicateService.js";
import { Request, Response } from "express";

class ImageController {
  private replicateService: ReplicateService;

  constructor() {
    this.replicateService = new ReplicateService();
  }

  generateImage = async (req: Request, res: Response) => {
    try {
      const { prompt } = req.body;
      const generatedImage = await this.replicateService.generateImage(prompt);

      res.json({ generatedImage });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  };
}

export default ImageController;
