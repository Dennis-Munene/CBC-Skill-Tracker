import { createContext, useContext, useState, useEffect } from "react";
import { loginApi, registerApi, getProfileApi } from "../api/authApi.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const data = await loginApi(credentials);
    setUser(data.user);
    localStorage.setItem("token", data.token);
    return data;
  };

  const register = async (userInfo) => {
    const data = await registerApi(userInfo);
    setUser(data.user);
    localStorage.setItem("token", data.token);
    return data;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  const fetchProfile = async () => {
    try {
      const data = await getProfileApi();
      setUser(data.user);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
