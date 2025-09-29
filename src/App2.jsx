import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Movies from "./Components/data";
import { useState } from "react";
import { useEffect } from "react";
import MovieDetails from "./Components/MovieDetails";

const api_key = import.meta.env.VITE_TMDB_API_KEY;
const page = 1;
const query = "action";
const api_url = "https://api.themoviedb.org/3";
const image_url = "https://image.tmdb.org/t/p/w500";

function App2() {
  const [movies, setMovies] = useState();
  const [watchlistMovies, setWatchlistMovies] = useState([]);
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // mounting => ilk render edilme anı
  // re-render => state veya props değiştiğinde tekrar render edilme
  // unmounting => componentin DOM'dan kaldırılması

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);

      const response = await fetch(
        `
https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchQuery}&page=${page}`
      );
      const data = await response.json();
      console.log(data);

      setMovies(data.results);
      setIsLoading(false);
    }

    if (searchQuery.length < 3) {
      setMovies([]);
      return;
    }

    getMovies();
  }, [searchQuery]);

  function handleAddToWatchlist(movie) {
    const isAddedToList = watchlistMovies
      .map((item) => item.id)
      .includes(movie.id);
    if (!isAddedToList) {
      setWatchlistMovies((movies) => [...movies, movie]);
    }
  }

  function handleRemoveFromWatchlist(movie) {
    const isRemovedFromList = watchlistMovies
      .map((item) => item.id)
      .includes(movie.id);
    if (isRemovedFromList) {
      setWatchlistMovies((movies) =>
        movies.filter((item) => item.id !== movie.id)
      );
    }
  }

  return (
    <>
      <Header
        watchlistMovies={watchlistMovies}
        onSetIsWatchlistOpen={setIsWatchlistOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Main
        movies={movies}
        watchlistMovies={watchlistMovies}
        isWatchlistOpen={isWatchlistOpen}
        onAddToList={handleAddToWatchlist}
        onRemoveFromWatchlist={handleRemoveFromWatchlist}
        isLoading={isLoading}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
      />
      <Footer />
    </>
  );
}

export default App;
