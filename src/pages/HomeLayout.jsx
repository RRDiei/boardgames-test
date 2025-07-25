import { Outlet } from "react-router";
import { NavBar } from "../components";

const HomeLayout = () => {
  return (
    <div className="relative">
      <NavBar />
      <div className="p-5 bg-blue-50">
        <Outlet />
      </div>
    </div>
  );
};
export default HomeLayout;
