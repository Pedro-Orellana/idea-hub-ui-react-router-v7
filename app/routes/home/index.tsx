import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "~/context/AuthContext";

export default function Home() {
  const { token } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

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
