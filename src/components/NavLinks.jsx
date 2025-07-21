import { NavLink } from "react-router";

const NavLinks = () => {
  return (
    <div className="flex gap-2 items-center px-3 text-xl font-semibold">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "nav-pending" : isActive ? "nav-active" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/boardgames"
        className={({ isActive, isPending }) =>
          isPending ? "nav-pending" : isActive ? "nav-active" : ""
        }
      >
        Boardgames
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "nav-pending" : isActive ? "nav-active" : ""
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "nav-pending" : isActive ? "nav-active" : ""
        }
      >
        Contact
      </NavLink>
    </div>
  );
};
export default NavLinks;
