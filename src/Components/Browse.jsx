import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./Hooks/useNowPlayingMovies";
// import MainComponent from "./MainComponent"
// import SecondaryComponent from "./SecondaryComponent"
// import { useDispatch } from "react-redux";
// import { removeUser } from "../Utils/userSlice";

const Browse = () => {
  useNowPlayingMovies(); //here only calling this custom hook but this hook is onlt dispatching and not returning anything, thats why we cannot store anything from it directly. we have to use useselctor to use dat afrom store.
  

  return (
    <div>
      <div>
        <Header />
        {/* <MainComponent /> */}
        {/* <SecondaryComponent /> */}
      </div>
    </div>
  );
};

export default Browse;
