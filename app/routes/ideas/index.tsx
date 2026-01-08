import { Link } from "react-router";

const IdeasPage = () => {
  return (
    <div>
      <h1 className="text-2xl">Ideas Page</h1>
      <Link to={"/"} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Go back home
      </Link>
    </div>
  );
};

export default IdeasPage;
