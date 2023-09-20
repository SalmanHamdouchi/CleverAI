import dotenv from "dotenv";
dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;

const config = {
  openai: {
    apiKey: OPENAI_API_KEY,
  },
  replicate: {
    apiToken: REPLICATE_API_TOKEN,
  },
  allowedOrigins: ["http://localhost:3000"],
};

const corsOptions = {
  origin: (origin, callback) => {
    // Check if the request origin is in the allowedOrigins array or if it is undefined (e.g., for non-browser requests)
    if (!origin || config.allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

export { corsOptions };
export default config;