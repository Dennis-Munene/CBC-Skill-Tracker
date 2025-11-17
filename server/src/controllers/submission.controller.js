import Submission from "../models/Submission.js";
import Task from "../models/Task.js";
import cloudinary from "../config/cloudinary.js";

/**
 * Create a new submission (student uploads evidence)
 */
export const createSubmission = async (req, res) => {
  try {
    const { taskId } = req.params;

    const task = await Task.findById(taskId);
    if (!task) return res.status(404).json({ message: "Task not found" });

    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    // Upload file buffer to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "cbc_skill_tracker" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(req.file.buffer);
    });

    const submission = await Submission.create({
      student: req.user._id,
      task: taskId,
      fileUrl: uploadResult.secure_url,
      originalName: req.file.originalname,
      competencyScores: {},
      feedback: "",
    });

    res.status(201).json({ message: "Submission uploaded successfully", submission });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Get all submissions by a student
 */
export const getSubmissionsByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;

    const submissions = await Submission.find({ student: studentId })
      .populate("task")
      .sort({ createdAt: -1 });

    res.json(submissions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Get all submissions for a task (teacher)
 */
export const getSubmissionsByTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    const submissions = await Submission.find({ task: taskId })
      .populate("student")
      .sort({ createdAt: -1 });

    res.json(submissions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
