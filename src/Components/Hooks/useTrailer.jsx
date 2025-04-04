import { useDispatch } from "react-redux";
import { API_Options } from "../../Utils/constants";
import { useEffect } from "react";
import { addTrailer } from "../../Utils/movieSlice";

const useTrailer = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTrailer();
  }, []);

  const fetchTrailer = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
        API_Options
      );
      if (!data) {
        throw new Error("data not fetched");
      }
      const json = await data.json();
      const filteredVideo = json?.results?.filter(
        (video) => video?.type === "Trailer"
      );
      const trailer = filteredVideo ? filteredVideo[0] : json.results[0];
      dispatch(addTrailer(trailer));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export default useTrailer;
