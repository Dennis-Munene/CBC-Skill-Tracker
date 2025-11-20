// client/src/components/layout/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Sidebar({ isOpen, setIsOpen }) {
  const { user } = useAuth();
  const location = useLocation();

  const links = {
    student: [
      { name: "Dashboard", path: "/student/dashboard" },
      { name: "Tasks", path: "/student/tasks" },
    ],
    teacher: [
      { name: "Dashboard", path: "/teacher/dashboard" },
      { name: "Tasks", path: "/teacher/tasks" },
    ],
    admin: [
      { name: "Dashboard", path: "/admin/dashboard" },
      { name: "Users", path: "/admin/users" },
    ],
  };

  const menuLinks = user ? links[user.role] || [] : [];

  return (
    <div
      className={`fixed inset-y-0 left-0 bg-white w-64 shadow-lg transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:inset-0`}
    >
      <div className="flex items-center justify-center h-16 shadow-md">
        <h1 className="font-bold text-xl">Skill Tracker</h1>
      </div>
      <nav className="mt-6">
        {menuLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block px-6 py-3 text-gray-700 hover:bg-gray-200 transition-colors ${
              location.pathname === link.path ? "bg-gray-200 font-semibold" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
