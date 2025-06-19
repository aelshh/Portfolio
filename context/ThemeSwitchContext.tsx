"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "Light" | "Dark";

type ThemeSwitchContextProps = { children: React.ReactNode };
type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeSwitchContextProvider = ({
  children,
}: ThemeSwitchContextProps) => {
  const [theme, setTheme] = useState<Theme>("Light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "Dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("Dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context) {
    const { theme, setTheme } = context;
    return { theme, setTheme };
  } else {
    throw new Error(
      "useThemeContext must be used within useThemeContextProvider"
    );
  }
};
