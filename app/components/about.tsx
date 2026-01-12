import { Link } from "react-router";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto p-8 my-20 bg-blue-100 rounded-lg"
    >
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold text-center">
          Want to know more about IdeaHub?
        </h1>
        <p className="text-lg font-thin max-w-lg text-center">
          IdeaHub was born as a way to practice my knowledge in frontend and
          backend development, but it has evolved into something bigger than
          that{" "}
        </p>
        <Link
          className="text-blue-500 hover:underline text-center text-lg"
          to={"/about"}
        >
          Read more
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
