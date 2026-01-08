import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    //screen
    <section className="flex min-h-screen bg-indigo-100  justify-center">
      {/* card */}
      <div className="max-w-5xl h-160 mx-auto mt-20 rounded-lg items-center bg-gray-100">
        <div className="flex w-full h-full">
          <img
            src="./images/forest.jpeg"
            alt="forest image"
            className="object-cover h-full w-1/2 rounded-l-lg"
          />
          <div className="flex flex-col w-1/2 h-full px-8 py-4 justify-center">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
