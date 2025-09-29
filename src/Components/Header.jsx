import Logo from "./Logo";
import SearchForm from "./SearchForm";
import WatchlistButton from "./WatchlistButton";

function Header({
  watchlistMovies,
  onSetIsWatchlistOpen,
  searchQuery,
  setSearchQuery,
}) {
  return (
    <div id="header">
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <Logo />
          <SearchForm
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <WatchlistButton
            onSetIsWatchlistOpen={onSetIsWatchlistOpen}
            watchlistMovies={watchlistMovies}
          />
        </div>
      </nav>
    </div>
  );
}

export default Header;
