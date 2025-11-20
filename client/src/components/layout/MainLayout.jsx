// src/components/layout/MainLayout.jsx
import { useState } from "react";
import Navbar from "../Navbar.jsx"; // ✅ correct path
import Sidebar from "./Sidebar.jsx";

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <main className="p-6 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
