import axios from "axios";
import { getStoredAccessToken } from "./accessToken";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = getStoredAccessToken();
  if (token) {
    console.log("This is working correctly!!!!");
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
