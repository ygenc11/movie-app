import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import MovieList from "../Components/MovieList";

const apiUrl = "https://api.themoviedb.org/3";
const api_key = import.meta.env.VITE_TMDB_API_KEY;
const page = 1;
const language = "en-US";

const SimilarMovies = ({ movieId }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetch(
          `${apiUrl}/movie/${movieId}/similar?api_key=${api_key}&page=${page}&language=${language}`
        );

        if (!response.ok) {
          throw new Error("error occurred");
        }

        const data = await response.json();

        if (data.results) {
          setMovies(data.results);
        }
      } catch (error) {}

      setLoading(false);
    }

    getMovies();
  }, [movieId]);

  if (loading) return <Loading />;

  return <MovieList Movies={movies} title="Similar Movies" />;
};

export default SimilarMovies;
