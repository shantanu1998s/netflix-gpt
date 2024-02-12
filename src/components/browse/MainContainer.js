import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMoviesList);
 
  if(!movies) return ;
  console.log(movies);
  const mainMovie=movies[0];
  const {overview, title, id}= mainMovie;
  console.log(mainMovie)

  return (
    <div>
      <VideoTitle overview={overview} title={title}/>
      <VideoBackground id={id}/>
    </div>
  );
};

export default MainContainer;
