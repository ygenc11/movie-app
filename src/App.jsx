import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import MainLayouts from "./layouts/MainLayouts";
import SearchResults from "./pages/SearchResults";
import UserWatchlist from "./pages/UserWatchlist";
import Login from "./pages/Login";
import Register from "./pages/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/movies", element: <Movies /> },
      { path: "/movies/:id", element: <MovieDetails /> },
      { path: "/search", element: <SearchResults /> }, // search?q=father
      { path: "/watchlist", element: <UserWatchlist /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
