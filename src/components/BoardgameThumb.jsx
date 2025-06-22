import { BsFillPersonFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";

const BoardgameThumb = ({ bg }) => {
  return (
    <div className="border-2 rounded-md w-70 md:w-80 p-2 mt-3 hover:scale-105 transition-all delay-75 hover:cursor-pointer bg-blue-50">
      <img src={bg.img_url} alt={bg.title} />
      <p className="capitalise text-2xl">{bg.title}</p>
      <div className="flex">
        <div className="w-1/2">
          <div className="mt-2">
            <BsFillPersonFill className="text-sm md:text-2xl inline mr-2" />{" "}
            <span className="text-sm md:text-md">
              {bg.min_players} - {bg.max_players} players
            </span>
          </div>
          <div className="mt-2">
            <FaClock className="text-sm md:text-2xl inline mr-2" />
            <span className="text-sm md:text-md">{bg.playtime} minutes</span>
          </div>
        </div>
        <div className="w-1/2">
          {bg.categories.map((category) => (
            <div>
              <FaHashtag className="text-sm text-gray-400 inline mr-2" />
              <span className="text-sm text-gray-600 bg-gray-200 rounded-2xl px-1 py-0.5">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BoardgameThumb;
