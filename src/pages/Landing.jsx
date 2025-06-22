import { BoardgameThumb } from "../components";

const Landing = ({ boardgameData }) => {
  return (
    <>
      <h1 className="text-center text-5xl font-sans font-bold">
        Welcome to <span className="text-indigo-800">Boardgames</span>!
      </h1>
      <h2 className="text-center text-3xl mt-4">Your Boardgame Website</h2>
      <div>
        <h3 className="text-2xl font-bold">Current boardgames</h3>
        <div className="grid grid-cols-3 gap-4">
          {boardgameData.map((bg) => (
            <BoardgameThumb bg={bg} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Landing;
