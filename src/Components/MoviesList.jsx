import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="overflow-x-scroll p-6">
      <h1 className="font-bold text-2xl text-white pb-6">{title}</h1>
      <div className="flex gap-9 w-800">
        {movies?.map((movie) => (
          <MoviesCard key={movie.id} poster={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
