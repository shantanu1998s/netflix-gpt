import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="-mt-36 w-screen">
        <div className=" bg-gradient-to-b from-black to-red-800">
          <MoviesList title={"Now Playing"} movies={movies.nowPlayingMoviesList}/>
          <MoviesList title={"Popular"} movies={movies.popularMovies} />
          <MoviesList title={"Top rated"} movies={movies.topRated} />
          <MoviesList title={"Up Coming"} movies={movies.upComing} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;