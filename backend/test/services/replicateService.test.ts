import ReplicateService from "../../src/services/replicateService.js";

describe("ReplicateService", () => {
  let replicateService: ReplicateService;

  beforeEach(() => {
    replicateService = new ReplicateService();
  });

  it("should initialize Replicate API", () => {
    expect(replicateService["replicate"]).toBeDefined();
  });

  it("should generate an image", async () => {
    const prompt = "Generate an image";
    const output = await replicateService.generateImage(prompt);
    expect(output).toHaveLength(1);
  });

  it("should generate a video", async () => {
    const prompt = "Generate a video";
    const output = await replicateService.generateVideo(prompt);
    expect(output).toHaveLength(1);
  });
});
