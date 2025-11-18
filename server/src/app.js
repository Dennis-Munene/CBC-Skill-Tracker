import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import competencyRoutes from "./routes/competency.routes.js";
import taskRoutes from "./routes/task.routes.js";
import submissionRoutes from "./routes/submission.routes.js";
import progressRoutes from "./routes/progress.routes.js";

dotenv.config();
const app = express();

// CORS CONFIG ----------
app.use(
  cors({
    origin: "http://localhost:5173", // Vite default port
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

// Body parser
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/competencies", competencyRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/progress", progressRoutes);

app.get("/", (req, res) => {
  res.send("CBC Skill Tracker API is running...");
});

export default app;
