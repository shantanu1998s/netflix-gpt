import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMoviesList);
 
  if(!movies) return ;
  const mainMovie=movies[0];
  const {overview, title, id}= mainMovie;

  return (
    <div>
      <VideoTitle overview={overview} title={title}/>
      <VideoBackground id={id}/>
      <SecondaryContainer/>
    </div>
  );
};

export default MainContainer;
