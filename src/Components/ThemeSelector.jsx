import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const ThemeSelector = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="theme-selector" style={{ cursor: "pointer" }}>
      <i
        className={`ms-2 bi bi-moon-stars${
          theme === "dark" ? "-fill text-white" : "-fill text-primary"
        }`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      ></i>
    </div>
  );
};

export default ThemeSelector;
