import ReplicateService from "../../src/services/replicateService.js";

describe("ReplicateService", () => {
  let replicateService: ReplicateService;

  beforeEach(() => {
    replicateService = new ReplicateService();
  });

  it.skip("should initialize Replicate API", () => {
    expect(replicateService["replicate"]).toBeDefined();
  });

  it.skip("should generate an image", async () => {
    const prompt = "Generate an image";
    const output = await replicateService.generateImage(prompt);
    expect(output).toHaveLength(1);
  });

  it.skip("should generate a video", async () => {
    const prompt = "Generate a video";
    const output = await replicateService.generateVideo(prompt);
    expect(output).toHaveLength(1);
  });
});
