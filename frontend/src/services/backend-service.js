import axios from "axios";

export default class BackendService {
  constructor() {
    this.BASE_URL = "http://localhost:5000/api";
  }

  generateText = (prompt) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${this.BASE_URL}/generate-text`, { prompt })
        .then((response) => {
          resolve(response.data.generatedText);
        })
        .catch((error) => {
          console.log(error);
          reject(new Error("BackendService: Failed to generate text.", error));
        });
    });
  };

  generateCode = (prompt) => {
    let instruction =
      "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanation";
    return new Promise((resolve, reject) => {
      axios
        .post(`${this.BASE_URL}/generate-code`, { prompt, instruction })
        .then((response) => {
          console.log(response.data.generatedText);
          resolve(response.data.generatedText);
        })
        .catch((error) => {
          console.log(error);

          reject(new Error("BackendService: Failed to generate code.", error));
        });
    });
  };

  generateImage = (prompt) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${this.BASE_URL}/generate-image-replicate`, { prompt })
        .then((response) => {
          console.log(response);
          resolve(response.data.generatedImage);
        })
        .catch((error) => {
          console.log(error);
          reject(new Error("BackendService: Failed to generate image.", error));
        });
    });
  };

  generateVideo = (prompt) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${this.BASE_URL}/generate-video`, { prompt })
        .then((response) => {
          console.log(response);
          resolve(response.data.generatedVideo);
        })
        .catch((error) => {
          console.log(error);
          reject(new Error("BackendService: Failed to generate video.", error));
        });
    });
  };
}
