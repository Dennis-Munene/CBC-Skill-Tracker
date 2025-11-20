// client/src/pages/TeacherTasks.jsx
import { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function TeacherTasks() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([
      { id: 1, title: "Grade Math Assignments", submissions: 20 },
      { id: 2, title: "Prepare Science Quiz", submissions: 15 },
    ]);
  }, []);

  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}</h2>
      <div className="grid gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <h3 className="font-semibold">{task.title}</h3>
            <span className="text-gray-600">{task.submissions} submissions</span>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
