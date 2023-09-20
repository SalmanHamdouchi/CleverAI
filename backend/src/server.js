import express from "express";
import cors from "cors";
import apiRoutes from "./routes/api-routes.js";
import corseOptions from "./config.js";

const app = express();

app.use(express.json());
app.use(cors(corseOptions));
app.use("/api", apiRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err });
});

// Start the server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
