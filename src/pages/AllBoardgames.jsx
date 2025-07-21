import { useBoardgameContext } from "../../hooks/useBoardgames";
import { BoardgameThumb } from "../components";

const AllBoardgames = () => {
  const { boardgames } = useBoardgameContext();

  return (
    <div className="min-h-screen">
      <h2 className="text-center text-3xl mt-4">All Boardgames</h2>
      <div className="flex justify-center lg:justify-items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {boardgames.map((bg) => (
            <BoardgameThumb key={bg.id} bg={bg} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllBoardgames;
