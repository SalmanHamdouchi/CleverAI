import OpenaiService from "../services/openai-service.js";

class TextController {
  constructor() {
    this.openaiService = new OpenaiService();
  }
  generateText = async (req, res) => {
    try {
      const { prompt } = req.body;
      const generatedText = await this.openaiService.generateText(null, prompt);

      res.json({ generatedText });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}

export default TextController;
