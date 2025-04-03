import { useSelector } from "react-redux";
import BackgroundVideo from "./BackgroundVideo";
import VideoTitle from "./videoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const firstMovie = movies[9];
    // console.log(firstMovie);
  const { id, overview, title } = firstMovie;

  return (
    <div>
      <BackgroundVideo id={id} />
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
