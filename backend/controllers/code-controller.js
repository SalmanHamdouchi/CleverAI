import OpenAIService from "../services/openai-service.js";

class CodeController {
  async generateCode(req, res) {
    try {
      const openaiService = new OpenAIService();

      const { prompt, instruction } = req.body;
      const generatedText = await openaiService.generateText(
        instruction,
        prompt
      );

      res.json({ generatedText });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default CodeController;
