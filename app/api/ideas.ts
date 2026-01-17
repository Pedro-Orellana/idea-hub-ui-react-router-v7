import axiosInstance from "~/lib/axios";
import { getStoredAccessToken } from "~/lib/accessToken";

export const createIdeaFunction = async (idea: {
  title: string;
  summary: string;
  description: string;
  tags: Array<string>;
}) => {
  try {
    const accessToken = getStoredAccessToken();
    console.log(`accessToken from api: ${accessToken}`);
    const res = await axiosInstance.post("/ideas", idea, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log(res.data);
    return res.data;
  } catch (err: any) {
    //create interceptor here
    const statusCode = err.status;
    const errData = err.response.data;
    console.log(statusCode);
    console.log(errData);
  }
};

export const getAllIdeasFunction = async () => {};

export const getSingleIdeaFunction = async () => {};

export const modifyIdeaFunction = async () => {};

export const deleteIdeaFunction = async () => {};
