import ReplicateService from "../services/replicateService.js";
import { Request, Response } from "express";

class VideoController {
  private replicateService: ReplicateService;

  constructor() {
    this.replicateService = new ReplicateService();
  }

  generateVideo = async (req: Request, res: Response) => {
    try {
      const { prompt } = req.body;
      const generatedVideo = await this.replicateService.generateVideo(prompt);

      res.json({ generatedVideo: generatedVideo });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  };
}

export default VideoController;
