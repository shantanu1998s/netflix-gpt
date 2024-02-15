import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetion from "./GptMovieSuggetion";
import { BG_URL } from "../../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="flex-1 fixed -z-10 ">
        <img
          className="object-cover w-full h-full"
          alt="Not Found"
          src={BG_URL}
        />
      </div>

      <GptSearchBar />
      <GptMovieSuggetion />
    </div>
  );
};

export default GptSearch;
