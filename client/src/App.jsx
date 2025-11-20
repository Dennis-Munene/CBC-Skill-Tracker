import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import StudentTasks from "./pages/StudentTasks.jsx";
import TeacherTasks from "./pages/TeacherTasks.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboards */}
        <Route path="/student/dashboard" element={<StudentTasks />} />
        <Route path="/teacher/dashboard" element={<TeacherTasks />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
