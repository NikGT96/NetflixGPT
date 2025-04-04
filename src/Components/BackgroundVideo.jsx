import { useSelector } from "react-redux";
import useTrailer from "./Hooks/useTrailer";

const BackgroundVideo = ({ id }) => {
  useTrailer(id);
  const trailer = useSelector((store) => store.movies.trailer);

  return (
    <div>
      <div className=" top-0 left-0 w-screen h-screen overflow-hidden">
        <iframe
        className="absolute top-0 left-0 w-full h-full object-contain -z-10"
          src={"https://www.youtube.com/embed/"+ trailer?.key +"?&autoplay=1&mute=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default BackgroundVideo;
