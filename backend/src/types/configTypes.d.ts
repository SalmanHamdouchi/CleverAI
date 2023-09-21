interface OpenaiConfig {
  apiKey: string | undefined;
  maxTokens: string | undefined;
}

interface ReplicateConfig {
  apiToken: string | undefined;
}

interface Config {
  openai: OpenaiConfig;
  replicate: ReplicateConfig;
  allowedOrigins: string[];
}

export default Config;
