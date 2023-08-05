import config from "../config.js";
import { Configuration, OpenAIApi } from "openai";

class OpenaiService {
  constructor() {
    const openAIConfiguration = new Configuration({
      apiKey: config.openai.apiKey,
    });
    this.openai = new OpenAIApi(openAIConfiguration);
  }

  async generateText(instruction, prompt) {
    let messages =
      instruction != null
        ? [
            { role: "system", content: instruction },
            { role: "user", content: prompt },
          ]
        : [{ role: "user", content: prompt }];
    try {
      const response = await this.openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages,
        max_tokens: 100,
      });
      return response.data.choices[0].message.content;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async generateImage(prompt) {
    console.log(prompt);
    try {
      const response = await this.openai.createImage({
        prompt,
        n: 1,
        size: "256x256",
      });
      return response.data.data[0].url;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default OpenaiService;
