import { useState } from "react";
import { Link, useNavigate, useFetcher } from "react-router";
import { useAuth } from "~/context/AuthContext";
import { loginFunction } from "~/api/auth";
import type { Route } from "../about/+types";

export const action = async ({ request }: Route.ActionArgs) => {
  const data = await request.formData();
  const email = data.get("email")?.toString();
  const password = data.get("password")?.toString();

  if (!email || !password) {
    return { error: "Email and password are required" };
  }
  return await loginFunction({ email, password });
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useAuth();

  const navigate = useNavigate();

  const fetcher = useFetcher();

  return (
    <>
      <h1 className="text-black text-3xl font-bold">Log in to your account</h1>
      <p className="font-light text-lg mt-4">
        Welcome back! share your ideas with the world today.
      </p>

      {fetcher?.data?.error && (
        <div className="bg-red-100 text-red-700 py-2 px-2 mt-2 text-center">
          {fetcher.data.error}
        </div>
      )}

      <fetcher.Form method="post" className="flex flex-col mt-10">
        <h3 className="text-sm mb-2">
          Please provide the following information:{" "}
        </h3>

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
            }}
            className="border border-gray-400 rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 px-2 py-2 text-white rounded mt-8
         hover:bg-blue-600 hover:shadow-xl transition"
        >
          Login
        </button>
      </fetcher.Form>

      <p className="text-center mt-2">
        Don't have an account? create one{" "}
        <Link className="text-blue-500 hover:underline" to={"/register"}>
          Here
        </Link>
      </p>
    </>
  );
};

export default LoginPage;
