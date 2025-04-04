import { useEffect } from "react";
import { API_Options } from "../../Utils/constants";
import { useDispatch } from "react-redux";
import { addTrending } from "../../Utils/movieSlice";

const useTrending = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_Options
      );
      if (!response) {
        throw new Error("Error");
      }
      const data = await response.json();
    //   console.log(data.results);
      dispatch(addTrending(data.results));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export default useTrending;
