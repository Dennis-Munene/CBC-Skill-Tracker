import mongoose from "mongoose";

const AssessmentSchema = new mongoose.Schema({
  competency: { type: mongoose.Schema.Types.ObjectId, ref: "Competency", required: true },
  score: { type: Number, min: 0, max: 100 },
  feedback: { type: String }
}, { _id: false });

const SubmissionSchema = new mongoose.Schema(
  {
    task: { type: mongoose.Schema.Types.ObjectId, ref: "Task", required: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    evidenceUrl: { type: String, required: true },
    assessment: AssessmentSchema,   // teacher grading
    status: {
      type: String,
      enum: ["Submitted", "Reviewed"],
      default: "Submitted",
    }
  },
  { timestamps: true }
);

export default mongoose.model("Submission", SubmissionSchema);
