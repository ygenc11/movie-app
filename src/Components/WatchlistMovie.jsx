import React from "react";

const WatchlistMovie = ({ movieObject, onAddToList, removeFromWatchlist }) => {
  const imageUrl = movieObject.imageUrl || "images/img1.webp"; // Example image URL
  const title = movieObject.title || "Movie Title";
  const description =
    movieObject.description || "This is a brief description of the movie.";

  return (
    <>
      <div className="col">
        {
          <div className="card movie position-relative">
            <img
              src={
                movieObject.poster_path
                  ? "https://image.tmdb.org/t/p/original/" +
                    movieObject.poster_path
                  : "https://placehold.co/600x900?text=No+Image"
              }
              alt={movieObject.title}
              className="img-fluid rounded"
            />

            {/* Remove button - Top right corner */}
            <button
              className="btn btn-danger position-absolute top-0 end-0 m-2 rounded-circle p-1"
              onClick={() => removeFromWatchlist(movieObject)}
              style={{
                width: "30px",
                height: "30px",
                fontSize: "12px",
                border: "none",
                boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
              }}
              title="Remove from Watchlist"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <div>
              <p className="card-text mb-0">{movieObject.description}</p>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default WatchlistMovie;
