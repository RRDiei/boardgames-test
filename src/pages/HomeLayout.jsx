import { Outlet } from "react-router";
import { Footer, NavBar } from "../components";

const HomeLayout = () => {
  return (
    <div className="relative">
      <NavBar />
      <div className="p-5 bg-blue-50">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default HomeLayout;
