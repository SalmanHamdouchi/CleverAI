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
          reject(new Error("BackendService: Failed to generate text.", error));
        });
    });
  };
}
