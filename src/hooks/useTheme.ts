import { useEffect, useReducer } from "react";
import { themeReducer, ThemeState } from "../reducers/themeReducer";

export const useTheme = () => {
  const [theme, dispatch] = useReducer(themeReducer, getInitialTheme());

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => dispatch({ type: "TOGGLE_THEME" });

  return { theme, toggleTheme };
};

const getInitialTheme = (): ThemeState => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return "dark";
  }
  return "light";
};
