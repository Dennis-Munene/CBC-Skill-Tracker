// client/src/pages/TeacherTasks.jsx
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";

export default function TeacherTasks() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example: fetch teacher's tasks (replace with real API call)
    const fetchTasks = async () => {
      try {
        const dummyTasks = [
          { id: 1, title: "Grade Assignment 1", due: "2025-11-25" },
          { id: 2, title: "Prepare Quiz 2", due: "2025-11-28" },
        ];
        setTasks(dummyTasks);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading tasks...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hello, {user?.name}</h1>
      <h2 className="text-xl font-semibold mb-2">Your Tasks to Review</h2>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="p-4 bg-blue-50 rounded-md shadow hover:bg-blue-100 transition"
          >
            <div className="flex justify-between">
              <span className="font-medium">{task.title}</span>
              <span className="text-gray-500">Due: {task.due}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
