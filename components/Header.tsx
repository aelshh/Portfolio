"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import useActiveSectionContext from "@/context/ActiveSectionContext";

export function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-5xl px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center mt-4"
          aria-label="Main navigation"
        >
          <div className="flex items-center gap-1 px-2 py-1.5 rounded-2xl bg-surface-light/70 dark:bg-surface-dark/70 backdrop-blur-xl border border-border-light dark:border-border-dark shadow-sm">
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
              className="relative px-3 sm:px-4 py-2 text-sm font-medium rounded-xl bg-accent/10 text-accent dark:text-accent-muted border border-accent/20 hover:bg-accent/20 transition-colors duration-200 ml-1"
              aria-label="Hire Adarsh Chaudhary for freelance web development"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Hire Me
              </span>
            </a>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}
