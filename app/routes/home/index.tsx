import type { Route } from "../+types/home";
import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl">Home Page</h1>
      <Link
        to={"/ideas"}
        className="bg-blue-500 rounded-md px-4 py-2 text-white"
      >
        Go to Ideas
      </Link>
    </div>
  );
}
