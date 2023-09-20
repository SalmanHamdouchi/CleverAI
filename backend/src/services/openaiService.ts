import config from "../config.js";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

class OpenaiService {
  private openAiApi!: OpenAIApi;

  constructor() {
    this.initOpenApi();
  }

  initOpenApi = (): void => {
    const configuration = new Configuration({
      apiKey: config.openai.apiKey,
    });
    if (config.openai.apiKey !== undefined) {
      this.openAiApi = new OpenAIApi(configuration);
    } else {
      throw new Error("Replicate API token is undefined");
    }
  };

  async generateText(
    instruction: string | null,
    prompt: string
  ): Promise<string | Error> {
    let conversation: ChatCompletionRequestMessage[] =
      instruction != null
        ? [
            { role: "system", content: instruction },
            { role: "user", content: prompt },
          ]
        : [{ role: "user", content: prompt }];
    try {
      const response = await this.openAiApi.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: conversation,
        max_tokens: 200,
      });
      return response.data.choices[0].message?.content || "Undefined";
    } catch (error) {
      if (error instanceof Error) return new Error(error.message);
      return new Error("Failed to call OpenAI's API");
    }
  }
}

export default OpenaiService;
