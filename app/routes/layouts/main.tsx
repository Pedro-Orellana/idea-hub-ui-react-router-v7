import Footer from "~/components/footer";
import NavBar from "~/components/navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    //screen background color
    <div className="h-screen bg-white">
      <div className="flex flex-col h-full justify-between">
        <div>
          <NavBar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
