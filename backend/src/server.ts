import express from "express";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes.js";
import { corsOptions } from "./config.js";

const server = express();

server.use(express.json());
server.use(cors(corsOptions));
server.use("/api", apiRoutes);

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
