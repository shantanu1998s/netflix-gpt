import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMovieSuggetion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return;
  return (
    <div className=" bg-black opacity-80">
      <div className=" mt-4">
        {movieNames.map((movieName, index) => (
          <MoviesList
           key={movieName}
           title={movieName}
           movies={movieResults[index]}
           />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggetion;
