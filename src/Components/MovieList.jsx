import Movie from "./Movie";
import React from "react";

const title = "Movies List";

function MovieList({ Movies = [], onAddToList, handleSelectedMovie }) {
  return (
    <div className="container py-3">
      <h1 className="mb-3 h4">{title}</h1>
      {Movies.length === 0 ? (
        <div>No movies available.</div>
      ) : (
        <div
          id="movie-list"
          className="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-2"
        >
          {Movies.map((movie, index) => (
            <Movie
              key={index}
              movieObject={movie}
              onAddToList={onAddToList}
              handleSelectMovie={handleSelectedMovie}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
