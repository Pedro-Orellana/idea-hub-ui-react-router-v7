import { useAuth } from "~/context/AuthContext";
import { Link } from "react-router";
import { useNavigate } from "react-router";

import { logoutFunction } from "~/api/auth";

const NavBar = () => {
  const { token, setToken, setUser } = useAuth();

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const data = await logoutFunction();
      if (data?.message) {
        setToken("");
        setUser(null);
        navigate("/login");
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <nav className="bg-stone-200">
      <div className="flex  py-4 max-w-6xl mx-auto items-center justify-between">
        <h1 className="text-3xl text-orange-500 font-bold">IdeaHub</h1>

        <div className="items-center space-x-4">
          {token ? (
            <>
              <Link to={"/"}>Home</Link>
              <Link to={"/ideas"}>Ideas</Link>
              <Link to={"/about"}>About</Link>
              <button
                type="button"
                onClick={handleClick}
                className="bg-red-500 text-white rounded py-2 px-4 hover:cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"}>Log in</Link>
              <Link
                to={"/register"}
                className="bg-blue-500 text-white rounded-md px-3 py-2"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
