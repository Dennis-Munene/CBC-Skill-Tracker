import { useState, useEffect } from "react";
import submissionApi from "../../api/submissionApi";

export default function CompetencyGrader() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    const data = await submissionApi.getAll();
    setSubmissions(data);
  };

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold text-green-700">Grade Submissions</h1>

      {submissions.map((sub) => (
        <div
          key={sub._id}
          className="p-4 bg-gray-50 shadow rounded-lg border"
        >
          <h3 className="font-semibold">{sub.studentName}</h3>
          <p className="text-gray-600">{sub.taskTitle}</p>

          <a
            href={sub.fileUrl}
            target="_blank"
            className="text-blue-600 underline mt-2 block"
          >
            Download Submission
          </a>
        </div>
      ))}
    </div>
  );
}
