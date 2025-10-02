import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import contactRouter from "./src/routes/contact.js";

dotenv.config();

const app = express();

// CORS
const allowedOrigin = process.env.FRONTEND_URL || "*";
app.use(
  cors({
    origin: allowedOrigin === "*" ? true : [allowedOrigin],
    methods: ["GET", "POST", "DELETE"],
  })
);

// Middlewares
app.use(express.json());

// Routes
app.use("/api/contact", contactRouter);

// Health
app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

// Mongo Connection
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error("MONGODB_URI is not set. Add it to .env.");
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => {
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });


