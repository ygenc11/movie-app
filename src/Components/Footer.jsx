import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = React.useContext(ThemeContext);
  const textColor = theme === "dark" ? "light" : "dark";
  return (
    <footer className={`bg-${theme} text-${textColor} py-3`}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Sol kısım */}
        <span>
          <i className={`bi bi-copyright text-${textColor} `}></i>©{" "}
          {new Date().getFullYear()} MyMovieApp - All rights reserved.
        </span>
        <ul className="nav">
          <li className="nav-item">
            <a href="#" className={`nav-link px-2 text-${textColor}`}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className={`nav-link px-2 text-${textColor}`}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className={`nav-link px-2 text-${textColor}`}>
              Contact
            </a>
          </li>
        </ul>

        {/* Sosyal medya */}
        <div>
          <a href="#" className={`text-${textColor} me-3`}>
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className={`text-${textColor} me-3`}>
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className={`text-${textColor}`}>
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
