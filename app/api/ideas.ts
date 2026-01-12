import axiosInstance from "~/lib/axios";

export const createIdeaFunction = async (
  idea: {
    userId: string;
    title: string;
    summary: string;
    description: string;
    tags: Array<string>;
  },
  accessToken: string
) => {
  try {
    const res = await axiosInstance.post("/ideas", idea, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log(res.data);
    return res.data;
  } catch (err: any) {
    //create interceptor here
  }
};

export const getAllIdeasFunction = async () => {};

export const getSingleIdeaFunction = async () => {};

export const modifyIdeaFunction = async () => {};

export const deleteIdeaFunction = async () => {};
