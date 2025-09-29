import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../Components/Loading";
import SimilarMovies from "./SimilarMovies";
import Actors from "../Components/Actors";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const apiUrl = "https://api.themoviedb.org/3";
const api_key = import.meta.env.VITE_TMDB_API_KEY;
const language = "en-US";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToWatchList, removeFromWatchList, watchList } =
    useContext(UserContext);
  const isAdded = watchList?.find((m) => m.id === movie?.id);

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(
          `${apiUrl}/movie/${id}?api_key=${api_key}&language=${language}&append_to_response=credits`
        );

        if (!response.ok) {
          throw new Error("Error occurred");
        }

        const data = await response.json();
        setMovie(data);
      } catch (error) {}

      setLoading(false);
      window.scrollTo(0, 0);
    }

    getMovie();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <>
      <div
        className="text-white position-relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="img-overlay">
          <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="row">
              <div className="col-md-3 d-none d-lg-block">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  className="img-fluid rounded shadow img-thumbnail"
                />
              </div>
              <div className="col-md-9">
                <h1 className="display-4">{movie.title}</h1>
                <p>
                  {movie.release_date} <i className="bi bi-dot text-white"></i>
                  <span className="text-white">
                    {movie.genres?.map((genre) => genre.name).join(", ") || ""}
                  </span>
                  <i className="bi bi-dot text-white"></i>
                  {movie.runtime} minutes
                </p>

                {/* Rating ve Plus ikonu yan yana */}
                <div className="d-flex align-items-center mb-3">
                  <span className="badge bg-warning me-2">
                    {Math.round(movie.vote_average * 10)}%
                  </span>
                  <span
                    className="badge bg-danger fs-6"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      if (isAdded) {
                        removeFromWatchList(movie);
                      } else {
                        addToWatchList(movie);
                      }
                    }}
                  >
                    {isAdded ? (
                      <i className="bi bi-bookmark-fill"></i>
                    ) : (
                      <i className="bi bi-bookmark-plus"></i>
                    )}
                  </span>
                </div>

                {movie.overview && (
                  <p className="lead">
                    <strong>Summary:</strong> {movie.overview}
                  </p>
                )}

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                  <p className="d-flex flex-column text-center">
                    <span>Producer</span>
                    <span>
                      {movie.production_companies?.[0]?.name || "not known"}
                    </span>
                  </p>
                  <p className="d-flex flex-column text-center">
                    <span>Director</span>{" "}
                    <span>{movie.credits?.crew?.[0]?.name || "not known"}</span>
                  </p>
                  <p className="d-flex flex-column text-center">
                    <span>Senarist</span>{" "}
                    <span>{movie.credits?.crew?.[1]?.name || "not known"}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Actors actors={movie.credits.cast} />
      <SimilarMovies movieId={id} />
    </>
  );
};

export default MovieDetails;
