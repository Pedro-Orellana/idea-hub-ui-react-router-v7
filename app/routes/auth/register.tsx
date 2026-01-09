import { Link, useFetcher } from "react-router";
import { useState, useEffect } from "react";
import type { Route } from "../about/+types";

import axiosInstance from "~/lib/axios";

export const action = async ({ request }: Route.ActionArgs) => {
  const data = await request.formData();
  if (!data.get("name") || !data.get("email") || !data.get("password")) {
    return { error: "all fields are required" };
  }
  //data is available and is correct, send an http request to register new user
  const res = await axiosInstance.post("/auth/register", {
    name: data.get("name")?.toString(),
    email: data.get("email")?.toString(),
    password: data.get("password")?.toString(),
  });

  return res.data;
};

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetcher = useFetcher();

  useEffect(() => {
    console.log(fetcher);
  }, [fetcher]);

  return (
    <>
      <h1 className="text-black text-3xl font-bold">Don't have an account?</h1>
      <p className="font-light text-lg mt-4">
        Create a new account today and share your ideas with everyone!
      </p>

      {fetcher?.data?.error && (
        <div className="bg-red-100 text-red-700 text-center">
          {fetcher.data.error}
        </div>
      )}

      {fetcher?.data?.message && (
        <div className="bg-green-100 text-green-700 text-center">
          {fetcher.data.message}
        </div>
      )}

      <fetcher.Form method="post" className="flex flex-col mt-10">
        <h3 className="text-sm mb-2">
          Please provide the following information:
        </h3>

        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="text-sm text-gray-700 font-light">
            User name
          </label>
          <input
            name="name"
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (fetcher?.data?.error) fetcher.data.error = "";
              if (fetcher?.data?.message) fetcher.data.message = "";
            }}
            className="border border-gray-400 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-sm text-gray-700 font-light">
            Email
          </label>
          <input
            name="email"
            id="email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (fetcher?.data?.error) fetcher.data.error = "";
              if (fetcher?.data?.message) fetcher.data.message = "";
            }}
            className="border border-gray-400 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="password"
            className="text-sm text-gray-700 font-light"
          >
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (fetcher?.data?.error) fetcher.data.error = "";
              if (fetcher?.data?.message) fetcher.data.message = "";
            }}
            className="border border-gray-400 rounded px-3 py-2"
          />
        </div>

        <button
          className={`bg-blue-500 px-2 py-2 text-white rounded mt-8
           hover:bg-blue-600 hover:shadow-xl transition disabled:bg-gray-400 disabled:shadow-none`}
          disabled={!(fetcher.state === "idle")}
        >
          {fetcher.state === "idle" ? "Register account" : "Registering..."}
        </button>
      </fetcher.Form>
      <p className="text-center mt-2">
        Already have an account? login{" "}
        <Link className="text-blue-500 hover:underline" to={"/login"}>
          Here
        </Link>
      </p>
    </>
  );
};

export default RegisterPage;
