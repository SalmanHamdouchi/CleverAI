import express from "express";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes.js";
import { PORT } from "./config.js";

const server = express();

server.use(express.json());
server.use(cors());
server.use("/api", apiRoutes);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
