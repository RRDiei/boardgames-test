import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { LiaDiceSolid } from "react-icons/lia";

const BoardgameThumb = ({ bg }) => {
  return (
    <div className="border-2 rounded-md w-70 md:w-80 p-2 mt-5 hover:scale-110 transition-all delay-75 hover:cursor-pointer bg-gray-100">
      <div className="flex justify-center">
        {bg.img_url ? (
          <img
            src={bg.img_url}
            alt={bg.title}
            className="w-70 h-64 object-cover"
          />
        ) : bg.img ? (
          React.createElement(bg.img, { className: "w-70 h-64" })
        ) : (
          <LiaDiceSolid className="w-70 h-64" />
        )}
      </div>
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
            <div key={category}>
              <FaHashtag className="text-sm text-gray-400 inline mr-2" />
              <span className="text-sm text-gray-600 bg-gray-200 rounded-2xl px-1 py-0.5">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BoardgameThumb;
