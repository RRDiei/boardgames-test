import { useBoardgameContext } from "../../hooks/useBoardgames";
import { BoardgameThumb } from "../components";

const Landing = () => {
  const { boardgames } = useBoardgameContext();
  return (
    <>
      <h1 className="text-center text-5xl font-sans font-bold">
        Welcome to <span className="text-indigo-800">Boardgames</span>!
      </h1>
      <h2 className="text-center text-3xl mt-4">Your Boardgame Website</h2>
      <div>
        <h3 className="text-2xl font-bold">Current boardgames</h3>
        <div className="flex justify-center lg:justify-items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {boardgames.map((bg) => (
              <BoardgameThumb key={bg.id} bg={bg} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Landing;
