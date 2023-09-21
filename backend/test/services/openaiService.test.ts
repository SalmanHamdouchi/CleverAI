import OpenaiService from "../../src/services/openaiService";

describe("OpenaiService", () => {
  let openaiService: OpenaiService;

  beforeEach(() => {
    openaiService = new OpenaiService();
  });

  it("should initialize OpenAiApi", () => {
    expect(openaiService["openAiApi"]).toBeDefined();
  });

  it("should generate text with instruction", async () => {
    const instruction = "You are a poem writer";
    const prompt = "Explain devops";
    const result = await openaiService.generateText(instruction, prompt);

    // Will explain devops in a poetic way
    expect(typeof result).toBe("string");
  });

  it("should generate text without instruction", async () => {
    const instruction = null;
    const prompt = "Explain devops";
    const result = await openaiService.generateText(instruction, prompt);

    // Will explain devops in a normal way
    expect(typeof result).toBe("string");
  });

  it("should handle empty prompt", async () => {
    const instruction = "You are a poem writer";
    const prompt = "";

    await expect(
      openaiService.generateText(instruction, prompt)
    ).rejects.toThrow("Prompt should not be empty");
  });
});
