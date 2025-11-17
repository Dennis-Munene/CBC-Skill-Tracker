import axios from "./axios";

// REGISTER
export const registerApi = async (data) => {
  const res = await axios.post("/auth/register", data);
  return res.data;
};

// LOGIN
export const loginApi = async (data) => {
  const res = await axios.post("/auth/login", data);
  return res.data;
};

// GET PROFILE
export const fetchProfileApi = async () => {
  const res = await axios.get("/auth/profile");
  return res.data;
};
