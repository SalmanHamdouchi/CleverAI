import ReplicateService from "../services/replicate-service.js";
import OpenaiService from "../services/openai-service.js";

class ImageController {
  constructor() {
    this.replicateService = new ReplicateService();
    this.openaiService = new OpenaiService();
  }
  generateImage = async (req, res) => {
    try {
      const { prompt } = req.body;
      const generatedImage = await this.openaiService.generateImage(prompt);

      res.json({ generatedImage });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  generateImageReplicate = async (req, res) => {
    try {
      const { prompt } = req.body;
      const generatedImage = await this.replicateService.generateImage(prompt);

      res.json({ generatedImage });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}

export default ImageController;
