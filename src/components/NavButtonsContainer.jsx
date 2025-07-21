import { useUserContext } from "../../hooks/useUser";
import { FaDiceD20 } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";
import useClickOutside from "../hooks/useClickOutside";

const NavButtonsContainer = () => {
  const { user, setUser } = useUserContext();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const avatarRef = useRef(null);
  const navigate = useNavigate();

  useClickOutside([menuRef, avatarRef], () => setShowMenu(false), showMenu);

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  if (!user) {
    return (
      <div className="flex gap-3 me-2">
        <Link to="/login" className="btn">
          Log In
        </Link>
        <Link to="/register" className="btn">
          Register
        </Link>
      </div>
    );
  }

  return (
    <div className="flex gap-2 me-2 items-center relative overflow-visible">
      <h2 className="font-semibold italic text-lg mr-1">{user.name}</h2>
      {user?.avatar ? (
        <img
          ref={avatarRef}
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full hover:cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
      ) : (
        <FaDiceD20
          ref={avatarRef}
          onClick={() => setShowMenu(!showMenu)}
          className="w-10 h-10 text-red-600 hover:cursor-pointer"
        />
      )}
      <div
        ref={menuRef}
        className={`absolute -bottom-15 left-0 w-[150px] bg-gray-200 rounded-md
              transition-all duration-200 ease-in-out border-1 border-black flex flex-col
              ${
                showMenu
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-2 scale-95 pointer-events-none"
              }`}
      >
        <Link to={`/dashboard/${user.name}`} className="text-lg ps-2">
          Dashboard
        </Link>
        <p className="text-lg hover:cursor-pointer ps-2" onClick={logout}>
          Logout
        </p>
      </div>
    </div>
  );
};
export default NavButtonsContainer;
