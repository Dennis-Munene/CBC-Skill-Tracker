// client/src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import StudentTasks from "./pages/StudentTasks.jsx";
import TeacherTasks from "./pages/TeacherTasks.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";
import { useAuth } from "./context/AuthContext.jsx";

function App() {
  const { user, loading } = useAuth();

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/student/dashboard"
          element={user?.role === "student" ? <MainLayout><StudentTasks /></MainLayout> : <Navigate to="/login" />}
        />
        <Route
          path="/teacher/dashboard"
          element={user?.role === "teacher" ? <MainLayout><TeacherTasks /></MainLayout> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/dashboard"
          element={user?.role === "admin" ? <MainLayout><AdminDashboard /></MainLayout> : <Navigate to="/login" />}
        />

        <Route path="*" element={<Navigate to={user ? `/${user.role}/dashboard` : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
