// client/src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await login(form);
      if (res.user.role === "student") navigate("/student/dashboard");
      if (res.user.role === "teacher") navigate("/teacher/dashboard");
      if (res.user.role === "admin") navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
