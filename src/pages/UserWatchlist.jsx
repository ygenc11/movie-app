import React from "react";
import Watchlist from "../Components/Watchlist";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const UserWatchlist = () => {
  const { watchList, removeFromWatchList } = useContext(UserContext);
  return (
    <Watchlist
      watchlistMovies={watchList}
      title="Your Watchlist"
      removeFromWatchlist={removeFromWatchList}
    />
  );
};

export default UserWatchlist;
