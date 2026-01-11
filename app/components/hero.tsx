import { useAuth } from "~/context/AuthContext";

const Hero = () => {
  const { user } = useAuth();

  return (
    <section className="w-full bg-red-100" id="hero">
      <div className="max-w-6xl mx-auto py-6">
        <h1>{`Welcome, ${user?.name}`}</h1>
        <p>
          This is a place where you can share and explore your ideas with the
          rest of the world, as well as get inspired by others!
        </p>
      </div>
    </section>
  );
};

export default Hero;
