import Hero from "~/components/hero";
import Footer from "~/components/footer";
import NavBar from "~/components/navbar";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    //screen background color
    <div className="min-h-screen bg-white">
      <div className="flex flex-col h-full justify-between">
        <div>
          <NavBar />
          <Hero />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
