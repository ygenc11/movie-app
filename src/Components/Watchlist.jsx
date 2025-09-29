import React from "react";
import Movie from "./Movie";
import WatchlistMovie from "./WatchlistMovie";

const Watchlist = ({ watchlistMovies = [], title, removeFromWatchlist }) => {
  return (
    <>
      {
        <div className="container py-3">
          <h1 className="mb-3 h4">{title}</h1>
          {watchlistMovies.length === 0 ? (
            <div>No movies in watchlist.</div>
          ) : (
            <div
              id="watchlist"
              className="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-1 g-l"
            >
              {watchlistMovies.map((movie, index) => (
                <WatchlistMovie
                  key={index}
                  movieObject={movie}
                  removeFromWatchlist={removeFromWatchlist}
                />
              ))}
            </div>
          )}
        </div>
      }
    </>
  );
};

export default Watchlist;
