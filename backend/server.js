import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "node:path";
import connectDB from "./config/db.js";
// import { authRoutes } from "./routes/authRoutes";

const app = express();

// Middleware to handle CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
// app.use("/api/auth", authRoutes);

// Server upload folder
app.use(
  "/uploads",
  express.static(path.join(import.meta.dirname, "uploads"), {}),
);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
