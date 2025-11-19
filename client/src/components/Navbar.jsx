// client/src/components/Navbar.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar({ setSidebarOpen }) {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <button
          className="text-gray-600 focus:outline-none md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
        <span className="font-bold text-xl">CBC Skill Tracker</span>
      </div>
      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <span>{user?.name}</span>
          <span>▼</span>
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow rounded-lg py-2 z-10">
            <button
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
