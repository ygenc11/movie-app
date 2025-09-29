import React, { useEffect, useState } from "react";

import Movie from "../Components/Movie";
import Loading from "../Components/Loading";
import { useSearchParams } from "react-router";
import MovieList from "../Components/MovieList";
import Pagination from "../Components/Pagination";

const api_key = import.meta.env.VITE_TMDB_API_KEY;
const api_url = "https://api.themoviedb.org/3";
const image_url = "https://image.tmdb.org/t/p/w500";

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  const page = searchParams.get("page") || 1;
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      const response = await fetch(
        `${api_url}/search/movie?api_key=${api_key}&query=${query}&page=${page}`
      );
      const data = await response.json();
      console.log(data);

      setMovies(data.results);
      setIsLoading(false);
      setTotalPages(data.total_pages);
    }

    getMovies();
  }, [searchParams]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <MovieList Movies={movies} title={`Search Results: ${query}`} />
      <Pagination
        page={page}
        totalPages={totalPages}
        setSearchParams={setSearchParams}
        query={query}
      />
    </>
  );
};
export default SearchResults;
