import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">
        CBC Skill-Tracker
      </Link>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span>Welcome, {user.name} ({user.role})</span>
            <Link
              to={user.role === "admin" ? "/admin" : user.role === "teacher" ? "/teacher/tasks" : "/student/tasks"}
              className="hover:underline hover:text-gray-200"
            >
              Dashboard
            </Link>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="hover:underline hover:text-gray-200 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="hover:underline hover:text-gray-200 transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
