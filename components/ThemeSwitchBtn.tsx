"use client";

import { useThemeContext } from "@/context/ThemeSwitchContext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitchBtn = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] rounded-full flex justify-center items-center backdrop-blur-[0.5rem] bg-opacity-80 border  border-white shadow-2xl hover:scale-[1.14] active:scale-105 transition-all hover:cursor-pointer dark:bg-gray-950  "
      onClick={() => {
        if (theme === "Light") {
          setTheme("Dark");
          window.localStorage.setItem("theme", "Dark");
          document.documentElement.classList.add("dark");
        } else {
          setTheme("Light");
          window.localStorage.setItem("theme", "Light");
          document.documentElement.classList.remove("dark");
        }
      }}
    >
      {theme === "Light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitchBtn;
