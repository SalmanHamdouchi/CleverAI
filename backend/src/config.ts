import dotenv from "dotenv";
import Config from "./types/configTypes.js";
import { CorsOptions } from "cors";

dotenv.config();

const OPENAI_API_KEY: string | undefined = process.env.OPENAI_API_KEY;
const REPLICATE_API_TOKEN: string | undefined = process.env.REPLICATE_API_TOKEN;

const config: Config = {
  openai: {
    apiKey: OPENAI_API_KEY,
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
