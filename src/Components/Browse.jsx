import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies(); //here only calling this custom hook but this hook is onlt dispatching and not returning anything, thats why we cannot store anything from it directly. we have to use useselctor to use dat afrom store.
  

  return (
    <div>
      <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
