import IdeaCard from "./idea-card";
import { Link } from "react-router";

const LatestIdeas = () => {
  return (
    <section id="latest-ideas" className="max-w-6xl mx-auto py-10">
      <h3 className="text-2xl font-bold">These are your latest ideas: </h3>
      <IdeaCard />
      <IdeaCard />
      <IdeaCard />

      <Link
        className="text-blue-500 text-lg hover:underline ms-8"
        to={"/ideas"}
      >
        See all ideas
      </Link>
    </section>
  );
};

export default LatestIdeas;
