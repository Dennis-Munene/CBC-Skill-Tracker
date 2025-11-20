// src/features/student/Dashboard.jsx
import MainLayout from "../../components/layout/MainLayout.jsx";

export default function StudentDashboard() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
      <p>Welcome! Here you can track your tasks and progress.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-bold">Tasks</h2>
          <p>View and complete your assigned tasks.</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-bold">Progress</h2>
          <p>Check your competency progress.</p>
        </div>
      </div>
    </MainLayout>
  );
}
