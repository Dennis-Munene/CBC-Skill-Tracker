import express from "express";
import {
  createCompetency,
  getCompetencies,
  getCompetencyById,
  updateCompetency,
  deleteCompetency
} from "../controllers/competency.controller.js";

import { protect } from "../middleware/auth.js";
import { allowRoles } from "../middleware/role.js";

const router = express.Router();

// Teacher-only routes
router.post("/", protect, allowRoles("Teacher"), createCompetency);
router.put("/:id", protect, allowRoles("Teacher"), updateCompetency);
router.delete("/:id", protect, allowRoles("Teacher"), deleteCompetency);

// Anyone (Teacher/Student) can view
router.get("/", protect, getCompetencies);
router.get("/:id", protect, getCompetencyById);

export default router;
