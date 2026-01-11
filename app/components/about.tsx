import { Link } from "react-router";

const AboutSection = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto py-10">
      <div>
        <h1>Want to know more about IdeaHub?</h1>
        <p>
          IdeaHub was born as a way to practice my knowledge in frontend and
          backend development, but it has evolved into something bigger than
          that{" "}
        </p>
        <Link to={"/about"}>Read more</Link>
      </div>
    </section>
  );
};

export default AboutSection;
