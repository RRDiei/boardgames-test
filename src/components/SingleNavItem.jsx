import { NavLink } from "react-router";

const SingleNavItem = ({ navlink: { link, title } }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive, isPending }) =>
        isPending ? "nav-pending" : isActive ? "nav-active" : "nav-inactive"
      }
    >
      {title}
    </NavLink>
  );
};

export default SingleNavItem;
