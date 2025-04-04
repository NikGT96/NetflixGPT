import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  );
  const trending = useSelector((store) => store.movies.trending);
  console.log(trending);
  return (
    <div className="bg-black -mt-12">
      <div className="pl-8 text-stone-100 relative -top-32">
        <div className="p-6">
          <h1 className="font-bold text-2xl pb-6">Now Playing Movies</h1>
          <MoviesList Movies={nowPlayingMovies} />
        </div>
        <div className="p-6">
          <h1 className="font-bold text-2xl pb-6">Trending</h1>
          <MoviesList Movies={trending} />
        </div>
        <div className="p-6">
          <h1 className="font-bold text-2xl pb-6">Latest</h1>
          <MoviesList Movies={nowPlayingMovies} />
        </div>
        <div className="p-6">
          <h1 className="font-bold text-2xl pb-6">Action</h1>
          <MoviesList Movies={nowPlayingMovies} />
        </div>
        <div className="p-6">
          <h1 className="font-bold text-2xl pb-6">Romantic</h1>
          <MoviesList Movies={nowPlayingMovies} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
