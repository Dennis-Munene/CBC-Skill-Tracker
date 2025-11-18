import { createContext, useContext, useState, useEffect } from "react";
import { loginApi, registerApi, fetchProfileApi } from "../api/authApi";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user on refresh
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchProfileApi();
        setUser(res.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const login = async (data) => {
    const res = await loginApi(data);
    setUser(res.user);
    return res;
  };

  const register = async (data) => {
    const res = await registerApi(data);
    setUser(res.user);
    return res;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
