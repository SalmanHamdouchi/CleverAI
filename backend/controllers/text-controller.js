import OpenAIService from "../services/openai-service.js";

class TextController {
  async generateText(req, res) {
    try {
      const openaiService = new OpenAIService();
      const { prompt } = req.body;
      const generatedText = await openaiService.generateText(prompt);
      res.json({ generatedText });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: `Failed to generate text: ${err}` });
    }
  }
}

export default TextController;
