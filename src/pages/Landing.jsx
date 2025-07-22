import { useBoardgameContext } from "../../hooks/useBoardgames";
import { BoardgameThumb } from "../components";
import { ToastContainer, toast } from "react-toastify";
import { Link, useLocation } from "react-router";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { threeLatest } from "../../utils/latest-calculator";

const Landing = () => {
  const { boardgames } = useBoardgameContext();
  const location = useLocation();

  const latest = threeLatest(boardgames);

  useEffect(() => {
    if (location.state?.showToast) {
      toast.success(location.state.message);
    }
  }, [location.state]);

  return (
    <>
      <h1 className="text-center text-5xl font-sans font-bold">
        Welcome to <span className="text-indigo-800">Boardgames</span>!
      </h1>
      <h2 className="text-center text-3xl mt-4">Your Boardgame Website</h2>
      <div className="h-screen">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold">Latest boardgames</h3>
          <Link to="/boardgames">
            <h3 className="text-xl italic transition-all duration-200 ease-in-out hover:translate-x-1">
              See all games <FaArrowRight className="inline" />
            </h3>
          </Link>
        </div>
        <div className="flex justify-center lg:justify-items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {latest.map((bg) => (
              <BoardgameThumb key={bg.id} bg={bg} />
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Landing;
