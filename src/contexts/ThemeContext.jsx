import { createContext, useEffect } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  // Load initial theme from localStorage or default to 'light'
  const [storedTheme] = useState(localStorage.getItem("theme"));
  const initialTheme = storedTheme ? JSON.parse(storedTheme) : "light";
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
