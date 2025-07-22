import { SingleNavItem } from ".";

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
      {navlinks.map((navlink) => (
        <SingleNavItem key={navlink.title} navlink={navlink} />
      ))}
    </div>
  );
};
export default NavLinks;
