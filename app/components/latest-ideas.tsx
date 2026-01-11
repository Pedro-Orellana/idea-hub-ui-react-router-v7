import IdeaCard from "./idea-card";
import { Link } from "react-router";

const LatestIdeas = () => {
  return (
    <section id="latest-ideas" className="max-w-6xl mx-auto py-10">
      <h3>These are your latest ideas: </h3>
      <IdeaCard />
      <IdeaCard />
      <IdeaCard />
      <Link to={"/ideas"}>See more</Link>
    </section>
  );
};

export default LatestIdeas;
