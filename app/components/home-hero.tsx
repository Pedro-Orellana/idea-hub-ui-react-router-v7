import { useAuth } from "~/context/AuthContext";

const HomeHero = () => {
  const { user } = useAuth();

  return (
    <section className="w-full bg-teal-100 my-20" id="hero">
      <div className="max-w-6xl mx-auto py-6">
        <h1 className="text-3xl font-bold">{`Welcome, ${user?.name}`}</h1>
        <p className="text-xl font-thin max-w-lg mt-4">
          This is a place where you can share and explore your ideas with the
          rest of the world, as well as get inspired by others!
        </p>
      </div>
    </section>
  );
};

export default HomeHero;
