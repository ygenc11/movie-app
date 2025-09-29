import { Link } from "react-router";

const Movie = ({ movieObject }) => {
  return (
    <div className="col">
      <div className="card position-relative h-100">
        <Link to={`/movies/${movieObject.id}`}>
          <img
            src={
              movieObject.poster_path
                ? "https://image.tmdb.org/t/p/original/" +
                  movieObject.poster_path
                : "https://placehold.co/600x900?text=No+Image"
            }
            alt={movieObject.title}
            className="card-img-top"
          />
        </Link>
        <div className="card-body">
          <h2 className="h6 card-title">{movieObject.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Movie;
