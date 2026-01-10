import axiosInstance from "~/lib/axios";

export const loginFunction = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const res = await axiosInstance.post("/auth/login", credentials);
    console.log(res.data);
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
