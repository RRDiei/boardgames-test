import { NavLink } from "react-router";

const NavLinks = () => {
  const navlinks = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/boardgames",
      title: "Boardgames",
    },
    {
      link: "/about",
      title: "About",
    },
    {
      link: "/contact",
      title: "Contact",
    },
  ];

  return (
    <div className="flex gap-2 items-center px-3 text-xl font-semibold">
      {navlinks.map((nl) => (
        <NavLink
          key={nl.title}
          to={nl.link}
          className={({ isActive, isPending }) =>
            isPending
              ? "nav-pending"
              : isActive
              ? "border-b-2 border-indigo-400"
              : "hover:border-b-2 hover:border-indigo-200"
          }
        >
          {nl.title}
        </NavLink>
      ))}
    </div>
  );
};
export default NavLinks;
