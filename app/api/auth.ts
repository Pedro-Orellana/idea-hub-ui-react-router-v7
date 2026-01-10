import axiosInstance from "~/lib/axios";

export const loginFunction = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const res = await axiosInstance.post("/auth/login", credentials);
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
};

export const registerFunction = async (credentials: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await axiosInstance.post("/auth/register", credentials);
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
};

export const logoutFunction = async () => {
  try {
    const res = await axiosInstance.post("/auth/logout");
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
};
