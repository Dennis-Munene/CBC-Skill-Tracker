// src/features/shared/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

/**
 * ProtectedRoute component
 * @param {ReactNode} children - The component to render if access is allowed
 * @param {string} role - Optional: role required to access this route
 */
export default function ProtectedRoute({ children, role }) {
  const { user, loading } = useAuth();

  // Show nothing or a loader while checking authentication
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Role-based access
  if (role && user.role !== role) {
    // Redirect to dashboard if user role does not match
    return <Navigate to="/dashboard" replace />;
  }

  // Access granted
  return children;
}
