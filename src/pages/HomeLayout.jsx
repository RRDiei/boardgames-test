import { Outlet } from "react-router";
import { NavBar } from "../components";

const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <div className="p-5 bg-blue-50">
        <Outlet />
      </div>
    </>
  );
};
export default HomeLayout;
