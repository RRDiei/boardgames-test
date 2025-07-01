import { useUserContext } from "../../hooks/useUser";
import { FaDiceD20 } from "react-icons/fa";
import { Link } from "react-router";

const NavButtonsContainer = () => {
  const { user } = useUserContext();

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
    <div className="flex gap-2 me-2 items-center ">
      <h2 className="font-semibold italic text-lg mr-1">{user.name}</h2>
      {user?.avatar ? (
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full hover:cursor-pointer"
        />
      ) : (
        <FaDiceD20 className="w-10 h-10 text-red-600 hover:cursor-pointer" />
      )}
    </div>
  );
};
export default NavButtonsContainer;
