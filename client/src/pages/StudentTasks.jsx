// client/src/pages/StudentTasks.jsx
import { useState, useEffect } from "react";
import { useProgress } from "../context/ProgressContext.jsx"; // <-- corrected import
import { useAuth } from "../context/AuthContext.jsx";

export default function StudentTasks() {
  const { user } = useAuth();
  const { progress, updateProgress } = useProgress();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example: fetch student's progress
    const fetchProgress = async () => {
      try {
        // Replace with real API call if needed
        const dummyData = [
          { task: "Task 1", completed: true },
          { task: "Task 2", completed: false },
        ];
        updateProgress(dummyData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [updateProgress]);

  if (loading) return <p className="text-center mt-10">Loading progress...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h1>
      <h2 className="text-xl font-semibold mb-2">Your Tasks</h2>
      <ul className="space-y-2">
        {progress.map((item, idx) => (
          <li
            key={idx}
            className={`p-3 rounded-md ${
              item.completed ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {item.task} - {item.completed ? "Completed" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}
