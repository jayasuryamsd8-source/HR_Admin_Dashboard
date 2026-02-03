import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // 1️⃣ Connect to MongoDB first
    await connectDB();
    console.log("✅ MongoDB connected successfully");

    // 2️⃣ Start server using Render-compatible PORT
    const server = app.listen(PORT, () => {
      console.log(`🚀 API running on port ${PORT}`);
      console.log(`📦 Environment: ${process.env.NODE_ENV || "development"}`);
    });

    // 3️⃣ Handle server errors safely
    server.on("error", (err) => {
      if (err && err.code === "EADDRINUSE") {
        console.error(`❌ Port ${PORT} is already in use.`);
        process.exit(1);
      }

      console.error("❌ Server error:", err);
      process.exit(1);
    });

  } catch (error) {
    console.error("❌ Failed to start server");
    console.error(error);
    process.exit(1);
  }
}

startServer();
