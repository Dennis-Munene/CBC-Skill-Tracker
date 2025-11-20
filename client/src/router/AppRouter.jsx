
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../features/auth/Login.jsx";
import Signup from "../features/auth/Signup.jsx";

import StudentDashboard from "../features/student/Dashboard.jsx";
import TeacherDashboard from "../features/teacher/TaskCreator.jsx";
import AdminDashboard from "../pages/AdminDashboard.jsx";

import StudentTasks from "../pages/StudentTasks.jsx";
import TeacherTasks from "../pages/TeacherTasks.jsx";

import { useAuth } from "../context/AuthContext.jsx";
import ProtectedRoute from "../features/shared/ProtectedRoute.jsx";

export default function AppRouter() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {user?.role === "student" && <StudentDashboard />}
              {user?.role === "teacher" && <TeacherDashboard />}
              {user?.role === "admin" && <AdminDashboard />}
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/tasks"
          element={
            <ProtectedRoute role="student">
              <StudentTasks />
            </ProtectedRoute>
          }
        />

        <Route
          path="/teacher/tasks"
          element={
            <ProtectedRoute role="teacher">
              <TeacherTasks />
            </ProtectedRoute>
          }
        />

        {/* Redirect root to dashboard or login */}
        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
