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
      return response.data.choices[0].message.content;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default OpenaiService;
