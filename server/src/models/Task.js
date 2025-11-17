import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    competency: { type: mongoose.Schema.Types.ObjectId, ref: "Competency", required: true },
    title: { type: String, required: true },
    description: { type: String },
    level: {
      type: String,
      enum: ["Basic", "Proficient", "Advanced"],
      default: "Basic",
      required: true
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
