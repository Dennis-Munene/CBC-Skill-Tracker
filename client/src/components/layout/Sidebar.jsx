// src/components/layout/Sidebar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Sidebar({ isOpen }) {
  const { user } = useAuth();

  return (
    <aside
      className={`bg-gray-800 text-white w-64 p-6 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      } md:translate-x-0`}
    >
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <ul className="space-y-2">
        {user?.role === "student" && (
          <>
            <li>
              <Link to="/dashboard" className="hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/student/tasks" className="hover:underline">
                Tasks
              </Link>
            </li>
            <li>
              <Link to="/student/progress" className="hover:underline">
                Progress
              </Link>
            </li>
          </>
        )}
        {user?.role === "teacher" && (
          <>
            <li>
              <Link to="/dashboard" className="hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/teacher/tasks" className="hover:underline">
                Manage Tasks
              </Link>
            </li>
            <li>
              <Link to="/teacher/grades" className="hover:underline">
                Grade Submissions
              </Link>
            </li>
          </>
        )}
        {user?.role === "admin" && (
          <>
            <li>
              <Link to="/dashboard" className="hover:underline">
                Admin Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className="hover:underline">
                Manage Users
              </Link>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
}
