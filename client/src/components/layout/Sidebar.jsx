// client/src/components/layout/Sidebar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Sidebar({ isOpen, setIsOpen }) {
  const { user } = useAuth();
  const links = [
    { label: "Dashboard", path: `/${user?.role}/dashboard` },
  ];

  return (
    <div
      className={`bg-white w-64 h-full shadow-md fixed md:relative transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 md:translate-x-0`}
    >
      <div className="p-4 font-bold border-b">Menu</div>
      <ul className="mt-2">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="block py-2 px-4 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
