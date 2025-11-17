import express from "express";
import { protect } from "../middleware/auth.js";
import { allowRoles } from "../middleware/role.js";
import { getStudentProgress } from "../controllers/progress.controller.js";

const router = express.Router();

// Student dashboard
router.get(
  "/student",
  protect,
  allowRoles("Student"),
  getStudentProgress
);

export default router;
