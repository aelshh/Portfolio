"use client";

import { motion } from "framer-motion";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useThemeContext } from "@/context/ThemeSwitchContext";

export default function ThemeSwitchBtn() {
  const { theme, setTheme } = useThemeContext();

  const toggleTheme = () => {
    const newTheme = theme === "Light" ? "Dark" : "Light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    if (newTheme === "Dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-[9998] w-12 h-12 rounded-full glass-card flex items-center justify-center shadow-lg hover:border-primary/30 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "Dark" ? (
          <HiOutlineSun className="w-5 h-5 text-accent" />
        ) : (
          <HiOutlineMoon className="w-5 h-5 text-primary-light" />
        )}
      </motion.div>
    </motion.button>
  );
}
