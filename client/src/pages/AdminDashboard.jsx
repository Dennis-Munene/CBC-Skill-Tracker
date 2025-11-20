// src/pages/AdminDashboard.jsx
import MainLayout from "../components/layout/MainLayout.jsx";

export default function AdminDashboard() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Manage all users and system settings.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-bold">Users</h2>
          <p>View, edit, or delete users.</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-bold">Settings</h2>
          <p>System configuration and settings.</p>
        </div>
      </div>
    </MainLayout>
  );
}
