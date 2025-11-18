import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import StudentTasks from "./pages/StudentTasks";
import TeacherTasks from "./pages/TeacherTasks";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
