"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container, useMechanicalSound } from "@/components/ui/BrutalistLayout";
import { MapPin, Search, Star, FileText } from "lucide-react";

interface HeroHeaderProps {
  onOpenCommandPalette?: () => void;
}

const rotatingRoles = [
  "Full Stack Developer",
  "React (Next.js) Developer",
  "AI Products Builder",
  "Open Source Contributor",
];

export function HeroHeader({ onOpenCommandPalette }: HeroHeaderProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const playClick = useMechanicalSound();

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const triggerAvatarGlitch = () => {
    playClick();
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 500);
  };

  return (
    <section id="home" className="relative w-full pt-2 sm:pt-4">
      {/* 1. Retro Monochrome Cover Banner */}
      <Container className="px-2 pt-2 sm:px-3 sm:pt-3">
        <div className="relative h-36 sm:h-48 overflow-hidden rounded-xl bg-neutral-950 border border-[var(--line)]">
          {/* Banner Photo: Vintage workstation / Steve Jobs mac aesthetic */}
          <Image
            src="/banner.jpg"
            alt="Vintage workstation cover"
            fill
            priority
            className="object-cover object-[center_25%] opacity-65 grayscale contrast-125"
          />

          {/* CRT scanline raster layers */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)] pointer-events-none" />
          <div className="absolute inset-0 [background-image:repeating-linear-gradient(90deg,rgba(0,0,0,0.15)_0,rgba(0,0,0,0.15)_1px,transparent_1px,transparent_24px)] opacity-30 pointer-events-none" />

          {/* Retro corner watermark */}
          <div className="absolute top-2.5 right-3 font-mono text-[9px] uppercase tracking-widest text-white/50 pointer-events-none">
            DEV_WS // 01
          </div>
        </div>
      </Container>

      {/* 2. Hero Identity Block */}
      <Container className="px-6 py-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-6 justify-between"
        >
          {/* Left: Avatar + Names + Metadata */}
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-5">
            {/* CRT Scanline Avatar Frame */}
            <div
              onClick={triggerAvatarGlitch}
              className={`relative size-20 sm:size-24 shrink-0 place-items-center overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--chip)] shadow-md group cursor-pointer select-none transition-all ${
                isGlitching ? "scale-95 brightness-150" : ""
              }`}
              title="Click for retro CRT scanline effect"
            >
              <Image
                src="/picofme.png"
                alt="Adarsh Chaudhary"
                fill
                priority
                className="object-cover object-center grayscale contrast-110 group-hover:grayscale-0 transition-all duration-300"
              />

              {/* CRT Scanline line */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 group-hover:opacity-40 transition-opacity bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px]">
                <div className="absolute inset-0 h-1 bg-white/30 blur-[1px] animate-scanline" />
              </div>

              {/* Corner retro bracket badge */}
              <div className="absolute bottom-1 right-1 px-1 py-0.2 rounded bg-black/80 font-mono text-[8px] text-white/80 border border-white/20">
                REC
              </div>
            </div>

            {/* Typography & Identity */}
            <div>
              <div className="flex flex-wrap items-baseline justify-center sm:justify-start gap-2">
                <h1 className="font-serif text-3xl sm:text-[40px] leading-none tracking-tight text-[var(--fg)] text-glitch">
                  Adarsh Chaudhary
                </h1>
                <span className="font-mono text-[11px] text-[var(--soft)] tracking-wider">
                  /a · darsh/
                </span>
              </div>

              {/* Role Title Slider */}
              <div className="h-[22px] overflow-hidden mt-1.5 flex items-center justify-center sm:justify-start">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roleIndex}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="font-mono text-[13px] text-[var(--muted)] flex items-center gap-1.5"
                  >
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {rotatingRoles[roleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Location pin tag */}
              <p className="mt-1 flex items-center justify-center sm:justify-start gap-1 font-mono text-[11px] text-[var(--soft)]">
                <MapPin className="size-3 shrink-0" />
                <span>Lucknow, India</span>
                <span className="mx-1.5 text-[var(--line)]">|</span>
                <span className="text-emerald-500 font-medium">available for work</span>
              </p>
            </div>
          </div>

          {/* Right: Quick Action Controls */}
          <div className="flex items-center gap-2.5">
            {/* Star button */}
            <a
              href="https://github.com/aelshh"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="relative group grid size-8 place-items-center rounded-lg border border-[var(--line)] bg-[var(--chip)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--soft)] transition-colors cursor-pointer"
              title="View GitHub profile"
            >
              <Star className="size-4" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 w-max px-2 py-0.5 bg-neutral-900 border border-neutral-700 text-neutral-200 font-mono text-[10px] rounded opacity-0 transition-opacity duration-150 group-hover:opacity-100 pointer-events-none z-50">
                github @aelshh
              </span>
            </a>

            {/* Resume button */}
            <a
              href="/resume"
              onClick={playClick}
              className="flex items-center gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--chip)] px-3 py-1.5 font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--soft)] transition-colors shadow-xs cursor-pointer"
              title="View Resume"
            >
              <FileText className="size-3.5" />
              <span>Resume</span>
            </a>

            {/* Command Palette Trigger ⌘K */}
            {onOpenCommandPalette && (
              <button
                type="button"
                onClick={() => {
                  playClick();
                  onOpenCommandPalette();
                }}
                className="flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--chip)] px-3 py-1.5 font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--soft)] transition-colors shadow-xs cursor-pointer"
                title="Open Command Palette (Ctrl+K)"
              >
                <Search className="size-3.5" />
                <span className="font-semibold">⌘K</span>
              </button>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
