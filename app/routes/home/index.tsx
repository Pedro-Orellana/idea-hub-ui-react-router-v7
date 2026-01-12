import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "~/context/AuthContext";

//custom components
import HomeHero from "~/components/home-hero";
import LatestIdeas from "~/components/latest-ideas";
import AboutSection from "~/components/about";

export default function Home() {
  const { token } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <HomeHero />
      <LatestIdeas />
      <AboutSection />
    </div>
  );
}
