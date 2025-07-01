import { useUserContext } from "../../hooks/useUser";
import { FaDiceD20 } from "react-icons/fa";
import { Link } from "react-router";

const NavButtonsContainer = () => {
  const { user } = useUserContext();

  if (!user) {
    return (
      <div className="flex gap-3 pe-2">
        <Link to="/login" className="btn">
          Log In
        </Link>
        <Link to="/register" className="btn">
          Register
        </Link>
      </div>
    );
  }

  return <div>NavButtonsContainer</div>;
};
export default NavButtonsContainer;
