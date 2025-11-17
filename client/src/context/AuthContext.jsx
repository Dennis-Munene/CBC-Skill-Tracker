import { createContext, useContext, useState, useEffect } from "react";
import { loginApi, registerApi, fetchProfileApi } from "../api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user on page refresh
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await fetchProfileApi();
        setUser(res.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  // LOGIN
  const login = async (data) => {
    const res = await loginApi(data);
    setUser(res.user);
    return res;
  };

  // REGISTER
  const register = async (data) => {
    const res = await registerApi(data);
    setUser(res.user);
    return res;
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
