import { createContext, useContext, useState, useEffect } from "react";
import { loginUserApi, registerUserApi, fetchProfileApi } from "../api/authApi.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for token and fetch profile on load
  useEffect(() => {
    const initUser = async () => {
      try {
        const profile = await fetchProfileApi();
        setUser(profile);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    initUser();
  }, []);

  const login = async (credentials) => {
    const data = await loginUserApi(credentials);
    setUser(data.user);
    return data;
  };

  const register = async (details) => {
    const data = await registerUserApi(details);
    setUser(data.user);
    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
