import { useState } from "react";
import { Link } from "react-router";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav>
      <div className="flex px-6 py-3 max-w-6xl mx-auto items-center justify-between">
        <h1 className="text-3xl text-orange-500">Idea Hub</h1>

        <div className="items-center space-x-4">
          {loggedIn ? (
            <>
              <Link to={"/ideas"}>All Ideas</Link>
              <Link to={"/ideas/create"}>New Idea</Link>
              <Link to={"/about"}>About</Link>
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
