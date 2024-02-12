import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-36 px-12 absolute text-white">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4" >{overview}</p>
      <div>
        <button className="bg-gray-400 text-white py-3 px-10 text-xl bg-opacity-50 rounded-lg hover:opacity-80">  ▶Play</button>
        <button className="mx-2 bg-gray-400 text-white py-3 px-8 text-xl bg-opacity-50 rounded-lg hover:opacity-80">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
