// client/src/pages/AdminDashboard.jsx
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";

export default function AdminDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example: fetch admin statistics
    const fetchStats = async () => {
      try {
        const dummyStats = {
          totalStudents: 120,
          totalTeachers: 15,
          totalTasks: 45,
        };
        setStats(dummyStats);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading dashboard...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-green-100 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Students</h2>
          <p className="text-3xl font-bold">{stats.totalStudents}</p>
        </div>
        <div className="p-6 bg-yellow-100 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Teachers</h2>
          <p className="text-3xl font-bold">{stats.totalTeachers}</p>
        </div>
        <div className="p-6 bg-blue-100 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Tasks</h2>
          <p className="text-3xl font-bold">{stats.totalTasks}</p>
        </div>
      </div>
    </div>
  );
}
