import { useEffect } from "react";
import { API_Options } from "../../Utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../Utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_Options
      );
      if (!response) {
        throw new Error("Error");
      }
      const data = await response.json();
      dispatch(addNowPlayingMovies(data));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export default useNowPlayingMovies;
