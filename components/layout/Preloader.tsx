"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

const nameLetters = "ADARSH".split("");

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show) return;

    const letters = document.querySelectorAll(".preloader-letter");

    gsap.fromTo(
      letters,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.04,
        ease: "power3.out",
        delay: 0.1,
      }
    );

    gsap.to(letters, {
      y: -80,
      opacity: 0,
      duration: 0.3,
      stagger: 0.03,
      ease: "power3.in",
      delay: 0.7,
    });
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-[10001] flex items-center justify-center bg-base"
        >
          <div className="flex items-center gap-1">
            {nameLetters.map((letter, i) => (
              <span
                key={i}
                className="preloader-letter inline-block text-5xl sm:text-7xl md:text-8xl font-display font-extrabold text-gradient-violet opacity-0"
              >
                {letter}
              </span>
            ))}
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-xs font-mono text-text-muted tracking-[0.3em] uppercase"
            >
              Full-Stack Developer
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
