// client/src/pages/StudentTasks.jsx
import { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function StudentTasks() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    setTasks([
      { id: 1, title: "Complete React Project", progress: 70 },
      { id: 2, title: "Submit Math Assignment", progress: 40 },
    ]);
  }, []);

  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}</h2>
      <div className="grid gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{task.title}</h3>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: `${task.progress}%` }}
              ></div>
            </div>
            <p className="mt-1 text-sm text-gray-600">{task.progress}% completed</p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
