import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import diagnoseRouter from "./routes/diagnose.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Curse Breaker Lite API is running!" });
});

app.use("/api/diagnose", diagnoseRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
