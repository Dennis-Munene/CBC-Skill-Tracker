import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import taskApi from "../../api/taskApi";

export default function TaskCreator() {
  const { user } = useAuth();

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const createTask = async () => {
    await taskApi.create(task);
    alert("Task created successfully!");
  };

  return (
    <div className="p-6 space-y-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold text-purple-700">Create New Task</h2>

      <input
        type="text"
        name="title"
        placeholder="Task Title"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <textarea
        name="description"
        placeholder="Task Description"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
        rows="4"
      />

      <button
        onClick={createTask}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700"
      >
        Create Task
      </button>
    </div>
  );
}
