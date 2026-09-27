"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, useMechanicalSound } from "@/components/ui/BrutalistLayout";
import { useThemeContext } from "@/context/ThemeSwitchContext";
import useActiveSectionContext from "@/context/ActiveSectionContext";
import type { SectionName } from "@/lib/types";
import { Search, Sun, Moon, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

const navItems: readonly { label: SectionName; hash: string }[] = [
  { label: "Home", hash: "#home" },
  { label: "About", hash: "#about" },
  { label: "Projects", hash: "#projects" },
  { label: "Experience", hash: "#experience" },
  { label: "Skills", hash: "#skills" },
  { label: "Contact", hash: "#contact" },
];

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const { theme, setTheme } = useThemeContext();
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const playClick = useMechanicalSound();

  const isDark = theme === "Dark";

  const handleToggleTheme = () => {
    playClick();
    const next = isDark ? "Light" : "Dark";
    setTheme(next);
    window.localStorage.setItem("theme", next);
    if (next === "Dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  const handleLinkClick = (name: SectionName, hash: string) => {
    playClick();
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMobileMenuOpen(false);
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-md">
      <Container className="flex items-center justify-between px-6 py-3 sm:px-8">
        {/* Left: Brand with phonetic pronunciation */}
        <a
          href="#home"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-baseline gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="font-serif text-xl tracking-wide text-[var(--fg)]">
            Adarsh
          </span>
          <span className="font-mono text-[11px] text-[var(--soft)] tracking-wide">
            /a · darsh/
          </span>
        </a>

        {/* Center / Desktop Links */}
        <nav className="hidden sm:flex items-center gap-5 text-[13px] text-[var(--muted)]">
          {navItems.map((item) => {
            const isActive =
              activeSection.toLowerCase() === item.label.toLowerCase() ||
              (item.label === "Home" && activeSection === "Home");
            return (
              <a
                key={item.hash}
                href={item.hash}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.label, item.hash);
                }}
                className={`group relative py-1 transition-colors hover:text-[var(--fg)] ${
                  isActive ? "text-[var(--fg)] font-semibold" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100 ${
                    isActive ? "scale-x-100 origin-left" : ""
                  }`}
                />
              </a>
            );
          })}

          {/* Search Trigger */}
          {onOpenCommandPalette && (
            <button
              type="button"
              onClick={() => {
                playClick();
                onOpenCommandPalette();
              }}
              aria-label="Search Command Palette"
              className="grid size-7 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-all duration-300 hover:text-[var(--fg)] hover:border-[var(--soft)] cursor-pointer"
            >
              <Search className="size-3.5" />
            </button>
          )}

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={handleToggleTheme}
            aria-label="Toggle theme"
            className="grid size-7 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-all duration-300 hover:rotate-45 hover:text-[var(--fg)] hover:border-[var(--soft)] cursor-pointer"
          >
            {isDark ? (
              <Sun className="size-3.5 text-amber-300" />
            ) : (
              <Moon className="size-3.5" />
            )}
          </button>
        </nav>

        {/* Mobile Actions */}
        <div className="flex sm:hidden items-center gap-2.5">
          {onOpenCommandPalette && (
            <button
              type="button"
              onClick={() => {
                playClick();
                onOpenCommandPalette();
              }}
              aria-label="Search Command Palette"
              className="grid size-8 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)] cursor-pointer"
            >
              <Search className="size-4" />
            </button>
          )}

          <button
            type="button"
            onClick={handleToggleTheme}
            aria-label="Toggle theme"
            className="grid size-8 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)] cursor-pointer"
          >
            {isDark ? (
              <Sun className="size-4 text-amber-300" />
            ) : (
              <Moon className="size-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              playClick();
              setMobileMenuOpen((prev) => !prev);
            }}
            aria-label="Toggle Mobile Menu"
            className="grid size-8 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="sm:hidden absolute top-full left-0 w-full bg-[var(--bg)] border-b border-[var(--line)] overflow-hidden shadow-lg z-50 bg-stripes"
          >
            <div className="px-6 py-5 space-y-3 flex flex-col font-serif text-lg bg-[var(--bg)]">
              {navItems.map((item) => {
                const isActive = activeSection.toLowerCase() === item.label.toLowerCase();
                return (
                  <a
                    key={item.hash}
                    href={item.hash}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.label, item.hash);
                    }}
                    className={`flex items-center gap-2.5 border-b border-dashed border-[var(--line)]/50 pb-2 transition-colors ${
                      isActive ? "text-[var(--fg)] font-semibold" : "text-[var(--muted)]"
                    }`}
                  >
                    <span
                      className={`size-1.5 rounded-full bg-[var(--fg)] ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
