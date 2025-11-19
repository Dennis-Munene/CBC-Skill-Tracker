import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import StudentTasks from "../pages/StudentTasks";
import TeacherTasks from "../pages/TeacherTasks";
import AdminDashboard from "../pages/AdminDashboard";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/student/dashboard" element={<StudentTasks />} />
      <Route path="/teacher/dashboard" element={<TeacherTasks />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
