import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import Movie from "../Components/Movie";
import Loading from "../Components/Loading";

const api_key = import.meta.env.VITE_TMDB_API_KEY;
const page = 1;
const api_url = "https://api.themoviedb.org/3";
const image_url = "https://image.tmdb.org/t/p/w500";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(
        `${api_url}/movie/popular?api_key=${api_key}&page=${page}`
      );
      const data = await response.json();
      console.log(data);

      setMovies(data.results);
      setIsLoading(false);
    }

    getMovies();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container my-3 ">
      <div className="card">
        <div className="Header"></div>
        <h2 className="title hb-5 mb-0">Popular Movies</h2>
      </div>
      <div className="card-body">
        {movies.length === 0 ? (
          <div>No movies available.</div>
        ) : (
          <div
            id="movie-list"
            className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4"
          >
            {movies.map((movie, index) => (
              <Movie key={index} movieObject={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
