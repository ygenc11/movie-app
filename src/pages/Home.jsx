import React from "react";
import { NavLink } from "react-router";
import SearchForm from "../Components/SearchForm";
import Movies from "./Movies";

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="img-overlay">
          <div className="container pt-5">
            <div className="row">
              <div className="col-12 lg-7 mx-auto text-center text-white">
                <h1>Welcome to the Movie App</h1>
                <p className="lead">
                  Discover and explore a wide range of movies. Browse through
                  popular films, search for your favorites, and get detailed
                  information about each movie.
                </p>
                <SearchForm />
              </div>
              <div className="col-12 lg-5 d-none d-lg-block"></div>
            </div>
          </div>
        </div>
      </div>
      <Movies />
    </>
  );
};

export default Home;
