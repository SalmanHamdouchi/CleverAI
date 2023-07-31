import OpenAIService from "../services/openai-service.js";

class TextController {
  async generateText(req, res) {
    try {
      const openaiService = new OpenAIService();

      const { prompt } = req.body;
      const generatedText = await openaiService.generateText(prompt);

      res.json({ generatedText });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default TextController;
