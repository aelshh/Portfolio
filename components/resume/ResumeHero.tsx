"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "@/components/ui/flip-words";

export default function ResumeHero() {
  const words = [
    "Full-Stack Developer",
    "AI Systems Builder",
    "Freelance Engineer",
    "Next.js Specialist",
  ];

  return (
    <section className="relative w-full overflow-hidden py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn(
            "relative overflow-hidden glass-card rounded-3xl p-8 sm:p-12",
            "print:bg-white print:border-neutral-200 print:shadow-none print:rounded-none print:p-6 print:!translate-y-0 print:!opacity-100",
          )}
        >
          {/* Ambient Background for Glass Card */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl print:hidden">
            <BackgroundBeams />
          </div>

          <div className="relative z-10 flex flex-col gap-6">
            {/* Top row */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
              {/* Left side */}
              <div className="flex flex-col gap-2 max-w-2xl">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gradient-violet tracking-tight">
                  Adarsh Chaudhary
                </h1>

                <div className="text-xl sm:text-2xl font-medium text-text-primary mt-2">
                  I&apos;m a{" "}
                  <span className="print:hidden inline-block">
                    <FlipWords
                      words={words}
                      className="text-primary font-display font-bold px-0"
                    />
                  </span>
                  <span className="hidden print:inline text-primary font-display font-bold">
                    Full-Stack Developer
                  </span>
                </div>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-lg mt-2">
                  Building production-grade web apps with React, Next.js,
                  Node.js & TypeScript — from AI products to SaaS platforms.
                </p>
              </div>

              {/* Right side (Availability Badge) */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 shrink-0">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="text-xs font-mono text-emerald-400">
                  Available for Opportunities
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-2" />

            {/* Bottom row (Contact & Socials) */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-text-muted hover:text-primary transition-colors">
                <span>📍</span> Lucknow, India
              </div>
              <a
                href="mailto:hello@adarshchaudhary.in"
                className="flex items-center gap-2 text-xs sm:text-sm font-mono text-text-muted hover:text-primary transition-colors"
              >
                <span>✉️</span> hello@adarshchaudhary.in
              </a>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-text-muted hover:text-primary transition-colors">
                <span>📱</span> +91 8707479934
              </div>

              <a
                href="https://github.com/aelshh"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm font-mono text-text-muted hover:text-primary transition-colors"
              >
                <span>💻</span> github.com/aelshh
              </a>
              <a
                href="https://www.linkedin.com/in/adarsh-chaudhary-369429278/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm font-mono text-text-muted hover:text-primary transition-colors"
              >
                <span>👔</span> linkedin.com/in/adarsh-chaudhary
              </a>
              <a
                href="https://adarshchaudhary.in"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm font-mono text-text-muted hover:text-primary transition-colors"
              >
                <span>🌐</span> adarshchaudhary.in
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
