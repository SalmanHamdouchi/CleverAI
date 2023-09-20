import express, { Request, Response } from "express";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes.js";
import { corsOptions } from "./config.js";

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", apiRoutes);

app.use((err: Error, req: Request, res: Response) => {
  console.error(err);
  res.status(500).json({ error: err });
});

// Start the server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
