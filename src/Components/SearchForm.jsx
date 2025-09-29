import React from "react";
import { useNavigate } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useState } from "react";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);
  const textColor = theme === "dark" ? "light" : "dark";

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form
      className="d-flex mb-2 mb-lg-0 "
      role="search"
      onSubmit={handleSubmit}
    >
      <input
        className="form-control me-1"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className={`btn btn-${theme} border`} type="submit">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default SearchForm;
