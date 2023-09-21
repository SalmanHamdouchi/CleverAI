import dotenv from "dotenv";
import Config from "./types/configTypes.js";
import { CorsOptions } from "cors";

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MAX_TOKENS = process.env.OPENAI_MAX_TOKENS;
const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;

const config: Config = {
  openai: {
    apiKey: OPENAI_API_KEY,
    maxTokens: OPENAI_MAX_TOKENS,
  },
  replicate: {
    apiToken: REPLICATE_API_TOKEN,
  },
  allowedOrigins: ["http://localhost:3000"],
};

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || config.allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },
};

export { corsOptions };
export default config;
