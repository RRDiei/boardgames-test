import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="p-5 bg-blue-50">
      <Outlet />
    </div>
  );
};
export default HomeLayout;
