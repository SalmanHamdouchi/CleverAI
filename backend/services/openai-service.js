import config from "../config.js";
import { Configuration, OpenAIApi } from "openai";

class OpenaiService {
  constructor() {
    const configuration = new Configuration({
      apiKey: config.openai.apiKey,
    });
    this.openai = new OpenAIApi(configuration);
  }

  async generateText(prompt) {
    try {
      const response = await this.openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 30,
      });
      const generatedText = response.data.choices[0].message.content;

      return generatedText;
    } catch (error) {
      console.error("Error generating text:", error);
      throw new Error("Failed to generate text. " + error);
    }
  }
}

export default OpenaiService;
