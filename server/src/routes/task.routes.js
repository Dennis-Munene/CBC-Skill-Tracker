import express from "express";
import {
  createTask,
  getTasksByCompetency,
  updateTask,
  deleteTask
} from "../controllers/task.controller.js";

import { protect } from "../middleware/auth.js";
import { allowRoles } from "../middleware/role.js";

const router = express.Router();

// Teacher-only operations
router.post("/", protect, allowRoles("Teacher"), createTask);
router.put("/:id", protect, allowRoles("Teacher"), updateTask);
router.delete("/:id", protect, allowRoles("Teacher"), deleteTask);

// Anyone can view tasks belonging to a competency
router.get("/competency/:competencyId", protect, getTasksByCompetency);

export default router;
