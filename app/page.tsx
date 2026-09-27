"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { FloatingIndex } from "@/components/sidebar/FloatingIndex";
import { HeroHeader } from "@/components/hero/HeroHeader";
import { AboutSection } from "@/components/about/AboutSection";
import { ContactBar } from "@/components/contact/ContactBar";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { SkillsMatrix } from "@/components/skills/SkillsMatrix";
import { GitHubActivity } from "@/components/github/GitHubActivity";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { CommandPalette } from "@/components/command-palette/CommandPalette";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global Cmd+K / Ctrl+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] font-sans text-[var(--fg)] antialiased transition-colors duration-250 relative">
      {/* 1. Sticky Brutalist Header */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* 2. Fixed Right Floating INDEX Sidebar with Retro Mascot */}
      <FloatingIndex />

      {/* 3. Main Centered Canvas Column */}
      <main className="relative z-10">
        <HeroHeader onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
        <AboutSection />
        <ContactBar />
        <ProjectsSection />
        <ExperienceTimeline />
        <SkillsMatrix />
        <GitHubActivity />
      </main>

      {/* 4. Editorial Site Footer */}
      <SiteFooter />

      {/* 5. Global Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}
