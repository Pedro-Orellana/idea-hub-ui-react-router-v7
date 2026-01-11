import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen justify-center bg-teal-100">
      <div className="max-w-6xl mx-auto px-6">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
