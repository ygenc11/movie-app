import React from "react";
import Watchlist from "./Watchlist";
import MovieList from "./MovieList";
import Loading from "./Loading";
import MovieDetails from "./MovieDetails";

const Main = ({
  movies,
  watchlistMovies,
  isWatchlistOpen,
  onAddToList,
  onRemoveFromWatchlist,
  isLoading,
  selectedMovie,
  setSelectedMovie,
}) => {
  return (
    <main>
      {selectedMovie && (
        <MovieDetails
          movieObject={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
      <Watchlist
        watchlistMovies={watchlistMovies}
        isWatchlistOpen={isWatchlistOpen}
        onRemoveFromWatchlist={onRemoveFromWatchlist}
      />
      {isLoading && <Loading />}
      <MovieList
        Movies={movies}
        onAddToList={onAddToList}
        handleSelectedMovie={setSelectedMovie}
      />
    </main>
  );
};

export default Main;
