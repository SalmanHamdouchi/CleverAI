import config from "../config.js";
import Replicate from "replicate";

class ReplicateService {
  constructor() {
    this.replicate = new Replicate({
      auth: config.replicate.apiToken,
    });
  }

  async generateImage(prompt) {
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
      console.log(error);
      return new Error(error.message) + " failed to generate image";
    }
  }

  async generateVideo(prompt) {
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
      console.log(error);
      return new Error(error.message) + " failed to generate video";
    }
  }
}

export default ReplicateService;
