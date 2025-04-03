import React from "react";

const VideoTitle = ({ title, overview }) => {
  return(
    <div className="absolute top-70 w-1/2 text-amber-50 p-10">
      <h1 className="text-6xl pb-3">{title}</h1>
      <p>{overview}</p>
      <div className="mt-6 flex gap-2">
        <button className="bg-gray-500 text-3xl p-4 rounded-md">Play</button>
        <button className="bg-gray-500 text-3xl p-4 rounded-md" >More Info</button>
      </div>
    </div>
  )
};

export default VideoTitle;
