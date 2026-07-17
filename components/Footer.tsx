"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

export default function Footer() {
  const scrollToTop = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-border">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Adarsh Chaudhary. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/adarsh-chaudhary-369429278/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary-light transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/aelshh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary-light transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-full border border-border text-text-muted hover:text-primary-light hover:border-primary/30 transition-all duration-300"
              aria-label="Back to top"
            >
              <HiArrowUp className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-text-muted font-mono">
            Built with Next.js · GSAP · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
