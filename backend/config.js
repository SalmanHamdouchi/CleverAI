import dotenv from "dotenv";
dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const config = {
  openai: {
    apiKey: OPENAI_API_KEY,
  },
};

export default config;
