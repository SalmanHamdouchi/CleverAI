import OpenAIService from "../services/openai-service.js";

class ImageController {
  async generateImage(req, res) {
    try {
      const openaiService = new OpenAIService();
      const { prompt } = req.body;
      const generatedImage = await openaiService.generateImage(prompt);

      res.json({ generatedImage });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default ImageController;
