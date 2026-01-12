import IdeaCard from "./idea-card";
import { Link } from "react-router";

const AllIdeasComponent = () => {
  return (
    <section id="all-ideas" className="max-w-6xl mx-auto my-20">
      <div className="flex justify-between px-4">
        <h3>All Ideas:</h3>
        <Link
          to={"/ideas/create"}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 hover:shadow-lg transition"
        >
          Create new idea 💡
        </Link>
      </div>
      <IdeaCard />
      <IdeaCard />
      <IdeaCard />
      <IdeaCard />
      <IdeaCard />
    </section>
  );
};

export default AllIdeasComponent;
