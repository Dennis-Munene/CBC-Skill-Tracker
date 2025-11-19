// client/src/pages/Register.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await register(form);
      navigate(`/${res.user.role}/dashboard`);
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <select name="role" onChange={handleChange} className="w-full p-3 border rounded-lg">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
