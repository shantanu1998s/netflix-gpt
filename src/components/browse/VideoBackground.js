import React, { useEffect } from "react";
import useMoviesTrailer from "../hooks/useMovesTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  useMoviesTrailer(id);
  const trailerVideo= useSelector(store=> store.movies.trailerVideo)
  return (
    <div className="">
      <iframe
      className=" w-screen h-screen -z-10"
        src={"https://www.youtube.com/embed/"
        + trailerVideo?.key+  "?autoplay=1&mute=1" + "&loop=1" +"&playlist="+trailerVideo?.key}
        title="YouTube video player"
       
      ></iframe>
    </div>
  );
};

export default VideoBackground;
