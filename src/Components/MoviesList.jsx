import MoviesCard from "./MoviesCard";

const MoviesList = ({Movies}) => {
    return(
        <div className="overflow-x-scroll">
            <div className="flex gap-9 w-800">
                {Movies?.map((movie) => (
                    <MoviesCard key={movie.id} poster={movie.poster_path} />
                    ))}
            </div>
        </div>
    )
}

export default MoviesList;