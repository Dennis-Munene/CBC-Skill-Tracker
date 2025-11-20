// src/features/teacher/TaskCreator.jsx
import MainLayout from "../../components/layout/MainLayout.jsx";

export default function TeacherDashboard() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-4">Teacher Dashboard</h1>
      <p>Manage tasks and grade student submissions.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-bold">Create Tasks</h2>
          <p>Create new tasks for students.</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-bold">Grade Submissions</h2>
          <p>View and grade submitted tasks.</p>
        </div>
      </div>
    </MainLayout>
  );
}
