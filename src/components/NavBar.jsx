import { Link } from "react-router";
import NavLinks from "./NavLinks";
import NavButtonsContainer from "./NavButtonsContainer";

const NavBar = () => {
  return (
    <>
      <nav className="h-18 bg-blue-100 w-full border-b-1 rounded-md">
        <div className="flex flex-row justify-between items-center w-full h-full">
          <div className="px-3">
            <Link to="/">
              <p className="text-indigo-800 font-bold text-xl -rotate-7">
                Boardgames
              </p>
            </Link>
          </div>
          <NavLinks />
          <NavButtonsContainer />
        </div>
      </nav>
    </>
  );
};
export default NavBar;
