import { Link } from "react-router";
import { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1 className="text-black text-3xl font-bold">Don't have an account?</h1>
      <p className="font-light text-lg mt-4">
        Create a new account today and share your ideas with everyone!
      </p>

      <form className="flex flex-col mt-10">
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 rounded px-3 py-2"
          />
        </div>

        <button
          className="bg-blue-500 px-2 py-2 text-white rounded mt-8
         hover:bg-blue-600 hover:shadow-xl transition"
        >
          Register account
        </button>
      </form>
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
