import axios from "./axios";

// REGISTER
export const registerApi = async (data) => {
  try {
    const res = await axios.post("/auth/register", data);
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Network Error" };
  }
};

// LOGIN
export const loginApi = async (data) => {
  try {
    const res = await axios.post("/auth/login", data);
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Network Error" };
  }
};

// PROFILE
export const fetchProfileApi = async () => {
  try {
    const res = await axios.get("/auth/profile");
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Auth Failed" };
  }
};
