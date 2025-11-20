// client/src/pages/AdminDashboard.jsx
import MainLayout from "../components/layout/MainLayout.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p>Welcome, {user.name}. Here you can manage users and system settings.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">Manage Students</div>
        <div className="bg-white p-4 rounded shadow">Manage Teachers</div>
        <div className="bg-white p-4 rounded shadow">System Settings</div>
      </div>
    </MainLayout>
  );
}
