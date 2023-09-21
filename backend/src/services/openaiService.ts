import config from "../config.js";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

class OpenaiService {
  private openAiApi!: OpenAIApi;
  private modelVersion = "gpt-3.5-turbo";

  constructor() {
    this.initOpenApi();
  }

  private initOpenApi(): void {
    const configuration = new Configuration({
      apiKey: config.openai.apiKey,
    });

    if (config.openai.apiKey !== undefined) {
      this.openAiApi = new OpenAIApi(configuration);
    } else {
      throw new Error("Replicate API token is undefined");
    }
  }

  public async generateText(
    instruction: string | null,
    prompt: string
  ): Promise<string | Error | undefined> {
    if (!prompt) {
      throw new Error("Prompt should not be empty");
    }
    let conversation = this.generateConversation(instruction, prompt);

    try {
      const response = await this.openAiApi.createChatCompletion({
        model: this.modelVersion,
        messages: conversation,
        max_tokens: 5,
      });
      return response.data.choices[0].message?.content;
    } catch (error) {
      if (error instanceof Error) return new Error(error.message);
      return String(error);
    }
  }

  private generateConversation(instruction: string | null, prompt: string) {
    let conversation: ChatCompletionRequestMessage[];

    if (!instruction) {
      conversation = [{ role: "user", content: prompt }];
    } else {
      conversation = [
        { role: "system", content: instruction },
        { role: "user", content: prompt },
      ];
    }
    return conversation;
  }
}

export default OpenaiService;
