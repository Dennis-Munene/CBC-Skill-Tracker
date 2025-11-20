// src/components/Navbar.jsx
import { useAuth } from "../context/AuthContext.jsx"; // fixed path
import { Link } from "react-router-dom";

export default function Navbar({ setSidebarOpen }) {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow">
      <button
        className="text-gray-500 focus:outline-none lg:hidden"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        ☰
      </button>
      <div className="flex items-center gap-4">
        <span className="font-bold text-gray-700">Welcome, {user?.name || "Guest"}</span>
        {user && (
          <button
            onClick={logout}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
