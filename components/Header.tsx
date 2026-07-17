"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import useActiveSectionContext from "@/context/ActiveSectionContext";
import { HiBars3, HiXMark } from "react-icons/hi2";

export function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9998]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5,         delay: 1.0, ease: "easeOut" }}
          className="flex items-center justify-center mt-4"
          aria-label="Main navigation"
        >
          {/* Desktop Navigation */}
          <div
            className={`hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-2xl transition-all duration-500 ${
              scrolled
                ? "bg-surface-glass backdrop-blur-2xl border border-border shadow-lg shadow-black/10"
                : "bg-transparent border border-transparent"
            }`}
          >
            {links.map((link) => (
              <a
                key={link.hash}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                  activeSection === link.name
                    ? "text-white"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                aria-current={activeSection === link.name ? "true" : undefined}
              >
                {activeSection === link.name && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute inset-0 rounded-xl bg-primary"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setTimeOfLastClick(Date.now())}
              className="relative px-4 py-2 text-sm font-medium rounded-xl bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors duration-200 ml-1"
              aria-label="Hire Adarsh Chaudhary"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Hire Me
              </span>
            </a>
          </div>

          {/* Mobile Header Bar */}
          <div
            className={`flex lg:hidden items-center justify-between w-full px-4 py-3 rounded-2xl transition-all duration-500 ${
              scrolled
                ? "bg-surface-glass backdrop-blur-2xl border border-border shadow-lg shadow-black/10"
                : "bg-transparent border border-transparent"
            }`}
          >
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="shrink-0 p-1.5 text-text-secondary hover:text-text-primary transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <HiXMark size={22} />
              ) : (
                <HiBars3 size={22} />
              )}
            </button>

            <span className="truncate text-sm font-medium text-text-primary mx-2 font-display">
              {activeSection}
            </span>

            <a
              href="#contact"
              onClick={() => setTimeOfLastClick(Date.now())}
              className="shrink-0 relative px-3 py-1.5 text-xs font-medium rounded-xl bg-accent/10 text-accent border border-accent/20"
              aria-label="Hire Adarsh Chaudhary"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Hire Me
              </span>
            </a>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute top-full left-6 right-6 mt-2 lg:hidden"
              >
                <div className="flex flex-col gap-0.5 p-2 rounded-2xl glass-card backdrop-blur-2xl shadow-lg">
                  {links.map((link, i) => (
                    <motion.a
                      key={link.hash}
                      href={link.hash}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => handleLinkClick(link.name)}
                      className={`relative px-4 py-3 text-sm font-medium rounded-xl transition-colors duration-200 ${
                        activeSection === link.name
                          ? "text-white"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                      aria-current={
                        activeSection === link.name ? "true" : undefined
                      }
                    >
                      {activeSection === link.name && (
                        <motion.span
                          layoutId="activeSectionMobile"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                          className="absolute inset-0 rounded-xl bg-primary"
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
}
