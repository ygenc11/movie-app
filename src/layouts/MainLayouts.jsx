import React from "react";
import { NavLink, Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ThemeContext } from "../contexts/ThemeContext";

const MainLayouts = () => {
  const { theme } = React.useContext(ThemeContext);
  const color = theme === "dark" ? "bg-dark text-white" : "bg-light text-dark";

  console.log(theme);

  return (
    <>
      <Navbar />
      <main className={color}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayouts;
