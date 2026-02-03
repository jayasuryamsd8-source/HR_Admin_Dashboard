import express from "express";
import cors from "cors";
import candidateRoutes from "./routes/candidateRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/candidates", candidateRoutes);

// Health check (optional but useful)
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

export default app;
