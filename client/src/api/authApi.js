
import axios from "./axios.js"; 

export const loginApi = async (credentials) => {
  const { data } = await axios.post("/auth/login", credentials);
  return data;
};

export const registerApi = async (userInfo) => {
  const { data } = await axios.post("/auth/register", userInfo);
  return data;
};

export const getProfileApi = async () => {
  const { data } = await axios.get("/auth/profile");
  return data;
};
