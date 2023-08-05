import OpenaiService from "../services/openai-service.js";

class CodeController {
  constructor() {
    this.openaiService = new OpenaiService();
  }
  generateCode = async (req, res) => {
    try {
      const { prompt, instruction } = req.body;
      const generatedText = await this.openaiService.generateText(
        instruction,
        prompt
      );

      res.json({ generatedText });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}

export default CodeController;
