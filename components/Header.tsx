"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import useActiveSectionContext from "@/context/ActiveSectionContext";
import { HiBars3, HiXMark } from "react-icons/hi2";

export function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999]">
      <div className="mx-auto max-w-5xl px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center mt-4"
          aria-label="Main navigation"
        >
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-2xl bg-surface-light/70 dark:bg-surface-dark/70 backdrop-blur-xl border border-border-light dark:border-border-dark shadow-sm">
            {links.map((link) => (
              <a
                key={link.hash}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={`relative px-3 sm:px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200 ${
                  activeSection === link.name
                    ? "text-white"
                    : "text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark"
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
                    className="absolute inset-0 rounded-xl bg-accent"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setTimeOfLastClick(Date.now())}
              className="relative px-3 sm:px-4 py-2 text-sm font-medium rounded-xl bg-accent/10 text-accent dark:text-accent-muted border border-accent/20 hover:bg-accent/20 transition-colors duration-200 ml-1"
              aria-label="Hire Adarsh Chaudhary for freelance web development"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Hire Me
              </span>
            </a>
          </div>

          {/* Mobile Header Bar */}
          <div className="flex lg:hidden items-center justify-between w-full px-3 py-2 rounded-2xl bg-surface-light/70 dark:bg-surface-dark/70 backdrop-blur-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="shrink-0 p-1.5 text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
            </button>

            <span className="truncate text-sm font-medium text-text-light dark:text-text-dark mx-2">
              {activeSection}
            </span>

            <a
              href="#contact"
              onClick={() => setTimeOfLastClick(Date.now())}
              className="shrink-0 relative px-3 py-1.5 text-xs font-medium rounded-xl bg-accent/10 text-accent dark:text-accent-muted border border-accent/20"
              aria-label="Hire Adarsh Chaudhary for freelance web development"
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
                className="absolute top-full left-4 right-4 mt-2 lg:hidden"
              >
                <div className="flex flex-col gap-0.5 p-2 rounded-2xl bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-xl border border-border-light dark:border-border-dark shadow-lg">
                  {links.map((link) => (
                    <a
                      key={link.hash}
                      href={link.hash}
                      onClick={() => handleLinkClick(link.name)}
                      className={`relative px-4 py-2.5 text-sm font-medium rounded-xl transition-colors duration-200 ${
                        activeSection === link.name
                          ? "text-white"
                          : "text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark"
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
                          className="absolute inset-0 rounded-xl bg-accent"
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </a>
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
