import MainLayout from "../components/layout/MainLayout.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function StudentTasks() {
  const { user } = useAuth();
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <p>Welcome, {user?.name}</p>
    </MainLayout>
  );
}
