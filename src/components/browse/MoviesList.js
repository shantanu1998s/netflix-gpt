import React from "react";
import MovieCards from "./MovieCards";

const MoviesList = ({ title, movies }) => {
  return (
    movies &&(
    <div className="pl-4 ">
    <h1 className="text-3xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCards key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
    )
  );
};

export default MoviesList;