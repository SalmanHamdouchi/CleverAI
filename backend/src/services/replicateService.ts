import config from "../config.js";
import Replicate from "replicate";

class ReplicateService {
  private replicate!: Replicate;
  private apiKey: string | undefined;

  constructor() {
    this.apiKey = config.replicate.apiToken;
    this.initReplicateApi();
  }

  private initReplicateApi(): void {
    if (this.apiKey !== undefined) {
      this.replicate = new Replicate({
        auth: this.apiKey,
      });
    } else {
      throw new Error("Replicate API token is undefined");
    }
  }

  public async generateImage(prompt: string): Promise<string | object> {
    try {
      const output = await this.replicate.run(
        "stability-ai/sdxl:2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5dc3ed3c5b2",
        {
          input: {
            prompt: prompt,
          },
        }
      );
      return output;
    } catch (error) {
      if (error instanceof Error) return new Error(error.message);
      return String(error);
    }
  }

  async generateVideo(prompt: string): Promise<string | object> {
    try {
      const output = await this.replicate.run(
        "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
        {
          input: {
            prompt: prompt,
          },
        }
      );
      return output;
    } catch (error) {
      if (error instanceof Error) return new Error(error.message);
      return String(error);
    }
  }
}

export default ReplicateService;
