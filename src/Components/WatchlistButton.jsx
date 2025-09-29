import React from "react";

const WatchlistButton = ({ watchlistMovies, onSetIsWatchlistOpen }) => {
  const count = watchlistMovies?.length || 0;

  const onClickHandler = () => {
    console.log("Watchlist button clicked. Current count:", count);
    onSetIsWatchlistOpen((prevState) => !prevState);
  };

  return (
    <div className="mb-2 mb-lg-0 ms-1">
      <button
        type="button"
        className="btn btn-outline-light position-relative"
        onClick={onClickHandler}
      >
        <i className="bi bi-heart"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {watchlistMovies?.length}
        </span>
      </button>
    </div>
  );
};

export default WatchlistButton;
