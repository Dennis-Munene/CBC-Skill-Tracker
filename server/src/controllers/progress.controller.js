import Submission from "../models/Submission.js";
import Competency from "../models/Competency.js";

export const getStudentProgress = async (req, res) => {
  try {
    const studentId = req.user._id;

    const submissions = await Submission.find({
      student: studentId,
      status: "Reviewed"
    }).populate("assessment.competency");

    const stats = {};

    submissions.forEach(sub => {
      if (!sub.assessment) return;

      const compId = sub.assessment.competency._id;
      const compTitle = sub.assessment.competency.title;

      if (!stats[compId]) {
        stats[compId] = { title: compTitle, total: 0, count: 0 };
      }

      stats[compId].total += sub.assessment.score;
      stats[compId].count += 1;
    });

    const progress = Object.values(stats).map(item => ({
      competency: item.title,
      averageScore: Math.round(item.total / item.count),
    }));

    res.json(progress);
  } catch (err) {
    res.status(500).json({ message: "Error calculating progress" });
  }
};
