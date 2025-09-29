import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router";
import SearchForm from "./SearchForm";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeSelector from "./ThemeSelector";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { watchList } = useContext(UserContext);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-${theme} border-bottom border-body`}
      data-bs-theme={theme}
    >
      <div className="container">
        <Logo />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            <SearchForm />
            <NavLink
              to="/watchlist"
              className={`btn btn-${theme} border position-relative`}
            >
              <i className="bi bi-bookmark-plus"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {watchList?.length || 0}
              </span>
            </NavLink>
            <ThemeSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
