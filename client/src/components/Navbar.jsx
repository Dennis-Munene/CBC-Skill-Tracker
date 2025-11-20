// client/src/components/Navbar.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar({ setSidebarOpen }) {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow flex justify-between items-center p-4">
      <button
        className="md:hidden text-gray-600"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        ☰
      </button>
      <h1 className="font-bold text-xl">CBC Skill Tracker</h1>
      {user && (
        <div className="relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center space-x-2 bg-gray-200 p-2 rounded"
          >
            <span>{user.name}</span>
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
              <button
                onClick={logout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
