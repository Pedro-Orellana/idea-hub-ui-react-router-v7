import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "~/context/AuthContext";

import axiosInstance from "~/lib/axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //right now it should automatically log the user in, without checking anything
    //once I have server running, this has to really log in a user
    if (!email || !password) {
      setError("both email and password are neccessary");
    } else {
      const loginInfo = {
        email,
        password,
      };
      axiosInstance.post("/auth/login", loginInfo);
      setUser(email);
      navigate("/ideas");
    }
  };

  return (
    <>
      <h1 className="text-black text-3xl font-bold">Log in to your account</h1>
      <p className="font-light text-lg mt-4">
        Welcome back! share your ideas with the world today.
      </p>

      {error && (
        <div className="bg-red-100 text-red-700 py-2 px-2 mt-2 text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col mt-10">
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
              setError("");
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
              setError("");
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
      </form>

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
