import express from "express";
import { protect, allowRoles } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

import {
  createSubmission,
  getSubmissionsByStudent,
  getSubmissionsByTask,
} from "../controllers/submission.controller.js";

const router = express.Router();

// Student uploads evidence
router.post("/:taskId", protect, upload.single("file"), createSubmission);

// Student views their submissions
router.get("/student/:studentId", protect, getSubmissionsByStudent);

// Teacher views all submissions for a task
router.get("/task/:taskId", protect, allowRoles("Teacher"), getSubmissionsByTask);

export default router;
