"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useSectionInView, useTextScramble } from "@/lib/hooks";

const scrambleTexts = [
  "Full-Stack Developer",
  "React (Next.js) Developer",
  "Freelance Web Developer",
  "Open Source Advocate",
];

export function Hero() {
  const { ref } = useSectionInView("Home", 0.8);
  const { displayText, next } = useTextScramble(scrambleTexts);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto mb-8 w-24 h-24 sm:w-28 sm:h-28"
        >
          <div className="absolute inset-0 rounded-full bg-accent/20 animate-pulse" />
          <div className="absolute inset-1 rounded-full bg-accent/10 blur-md" />
          <Image
            src="/picofme.png"
            alt="Adarsh Chaudhary - Full-Stack Web Developer based in Lucknow, India"
            width={112}
            height={112}
            className="relative rounded-full object-cover w-full h-full border-2 border-accent/30"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          Adarsh Chaudhary
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <button
            onClick={next}
            className="font-mono text-sm sm:text-base text-accent dark:text-accent-muted tracking-wider cursor-pointer bg-transparent border-none hover:opacity-80 transition-opacity"
            aria-label="Toggle role title"
          >
            {displayText}
            <span className="animate-pulse ml-0.5">_</span>
          </button>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-base sm:text-lg text-muted-light dark:text-muted-dark max-w-xl mx-auto leading-relaxed"
        >
          I build powerful products from code — full-stack web applications with{" "}
          <span className="text-text-light dark:text-text-dark font-semibold">
            React, Next.js, Node.js & TypeScript
          </span>
          . Available for freelance projects worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group px-6 py-3 rounded-xl bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-accent/20"
            aria-label="Hire Adarsh Chaudhary - Get in touch for freelance web development"
          >
            Hire Me
            <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/CV.pdf"
            download
            className="group px-6 py-3 rounded-xl border border-border-light dark:border-border-dark text-text-light dark:text-text-dark font-medium text-sm hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 flex items-center gap-2"
            aria-label="Download Adarsh Chaudhary resume CV"
          >
            Download CV
            <HiDownload className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/adarsh-chaudhary-369429278/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark hover:text-accent hover:border-accent/50 transition-all duration-300"
            aria-label="Adarsh Chaudhary LinkedIn profile"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/aelshh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark hover:text-accent hover:border-accent/50 transition-all duration-300"
            aria-label="Adarsh Chaudhary GitHub profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-muted-light dark:text-muted-dark tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-0.5 h-6 bg-accent/50 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
