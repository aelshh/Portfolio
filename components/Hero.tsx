"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useSectionInView, useTextScramble } from "@/lib/hooks";
import MagneticButton from "@/components/ui/MagneticButton";

const scrambleTexts = [
  "Full-Stack Developer",
  "React (Next.js) Developer",
  "Freelance Web Developer",
  "Open Source Advocate",
];

export function Hero() {
  const { ref } = useSectionInView("Home", 0.3);
  const { displayText, next } = useTextScramble(scrambleTexts);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion || !nameRef.current) return;

    const el = nameRef.current;
    const words = el.querySelectorAll(".hero-word");

    gsap.fromTo(
      words,
      { y: 120, opacity: 0, rotateX: 40 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1.2,
      }
    );
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 lg:pt-0"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left: Text content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-px bg-gradient-to-r from-primary to-accent" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary-light">
                Portfolio
              </span>
            </motion.div>

            <h1
              ref={nameRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-extrabold leading-[0.95] tracking-tight"
              style={{ perspective: "1000px" }}
            >
              <span className="hero-word inline-block overflow-hidden">
                <span className="inline-block">Adarsh</span>
              </span>
              <br />
              <span className="hero-word inline-block overflow-hidden text-gradient-violet">
                <span className="inline-block">Chaudhary</span>
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="relative"
            >
              <button
                onClick={next}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 font-mono text-sm text-primary-light hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-pointer"
                aria-label="Toggle role title"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {displayText}
                <span className="animate-pulse text-accent">_</span>
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.6 }}
              className="text-lg text-text-secondary max-w-lg leading-relaxed"
            >
              I build powerful products from code — full-stack web applications
              with React, Next.js, Node.js & TypeScript. Available for freelance
              projects worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent-dim transition-all duration-300 shadow-lg shadow-accent/20"
                aria-label="Hire Adarsh Chaudhary - Get in touch"
              >
                Hire Me
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                href="/CV.pdf"
                download
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-text-primary font-medium text-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                aria-label="Download Adarsh Chaudhary resume"
              >
                Download CV
                <HiDownload className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </MagneticButton>

              <div className="flex items-center gap-2 ml-2">
                <MagneticButton
                  href="https://www.linkedin.com/in/adarsh-chaudhary-369429278/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border text-text-secondary hover:text-primary-light hover:border-primary/30 transition-all duration-300"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin className="w-5 h-5" />
                </MagneticButton>
                <MagneticButton
                  href="https://github.com/aelshh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border text-text-secondary hover:text-primary-light hover:border-primary/30 transition-all duration-300"
                  aria-label="GitHub profile"
                >
                  <FaGithub className="w-5 h-5" />
                </MagneticButton>
              </div>
            </motion.div>
          </div>

          {/* Right: Profile image + visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-2xl" />
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-border">
                <Image
                  src="/picofme.png"
                  alt="Adarsh Chaudhary - Full-Stack Web Developer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/20 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-2 right-0 translate-x-1/4 px-4 py-2 rounded-xl glass-card text-xs font-mono text-accent whitespace-nowrap">
                Available for work
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono text-text-muted tracking-[0.3em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
