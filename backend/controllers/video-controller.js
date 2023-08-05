import ReplicateService from "../services/replicate-service.js";

class VideoController {
  constructor() {
    this.replicateService = new ReplicateService();
  }
  generateVideo = async (req, res) => {
    try {
      const { prompt } = req.body;
      const generatedVideo = await this.replicateService.generateVideo(prompt);

      res.json({ generatedVideo: generatedVideo });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}

export default VideoController;
