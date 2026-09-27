"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronDown, ChevronUp, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useMechanicalSound } from "@/components/ui/BrutalistLayout";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectItem {
  title: string;
  description: string;
  engineeringDetails?: string;
  tags: readonly string[];
  projectUrl: string;
  githubUrl?: string;
  imageUrl: string | StaticImageData;
  year?: string;
  category?: "Frontend" | "Backend" | "Fullstack";
}

export function ProjectCard({
  project,
}: {
  project: ProjectItem;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [imgError, setImgError] = useState(false);
  const playClick = useMechanicalSound();

  return (
    <div className="group flex flex-col justify-between rounded-xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[var(--soft)] hover:shadow-md h-full">
      <div>
        {/* Preview Container with Retro Camera Viewfinder HUD */}
        <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--chip)]">
          {!imgError ? (
            <Image
              src={project.imageUrl}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-serif text-2xl text-[var(--fg)] opacity-50">
              {project.title}
            </div>
          )}

          {/* Retro Viewfinder HUD Overlay on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 font-mono text-[9px] text-white">
            {/* 4 Corner Viewfinder Brackets */}
            <div className="absolute top-2.5 left-2.5 size-2.5 border-t border-l border-white/70" />
            <div className="absolute top-2.5 right-2.5 size-2.5 border-t border-r border-white/70" />
            <div className="absolute bottom-2.5 left-2.5 size-2.5 border-b border-l border-white/70" />
            <div className="absolute bottom-2.5 right-2.5 size-2.5 border-b border-r border-white/70" />

            {/* Camera Metrics */}
            <div className="absolute top-2.5 left-7 flex items-center gap-1.5 text-[8.5px] font-semibold text-white/90">
              <span className="size-1.5 rounded-full bg-rose-500 animate-pulse" />
              REC
            </div>
            <div className="absolute top-2.5 right-7 text-[8.5px] text-white/80 font-mono">
              ISO 400 // F2.8
            </div>
            <div className="absolute bottom-2.5 left-7 text-[8px] text-white/60 font-mono">
              PREVIEW // PROD
            </div>
          </div>
        </div>

        {/* Title & Metadata */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[16px] font-semibold tracking-wide text-[var(--fg)] group-hover:text-[var(--fg)]">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-[var(--soft)] shrink-0">
            {project.year || "2026"}
          </span>
        </div>

        {/* Description */}
        <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)] line-clamp-3">
          {project.description}
        </p>

        {/* Optional Collapsible Engineering Details */}
        {project.engineeringDetails && (
          <div className="mt-3">
            <button
              type="button"
              onClick={() => {
                playClick();
                setShowDetails(!showDetails);
              }}
              className="flex items-center gap-1 font-mono text-[10.5px] text-[var(--soft)] hover:text-[var(--fg)] cursor-pointer outline-none transition-colors"
            >
              <span>{showDetails ? "Hide architecture" : "Engineering architecture"}</span>
              {showDetails ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}
            </button>

            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-2.5 rounded-lg border border-[var(--line)]/50 bg-[var(--chip)]/60 p-3 font-mono text-[11.5px] leading-relaxed text-[var(--muted)] border-l-2 border-l-[var(--soft)]">
                    {project.engineeringDetails}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Footer: Tech Stack Badges & Links */}
      <div className="mt-4 flex items-center justify-between gap-3 pt-3 border-t border-[var(--line)]/50">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded bg-[var(--chip)] px-2 py-0.5 font-mono text-[10.5px] text-[var(--muted)] border border-[var(--line)]/40"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="font-mono text-[10px] text-[var(--soft)] self-center">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Live and Source Outbound Actions */}
        <div className="flex shrink-0 items-center gap-2 text-[var(--soft)]">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              aria-label={`${project.title} live demo`}
              title="Open Live Demo"
              className="p-1 rounded hover:text-[var(--fg)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <Globe className="size-4" />
            </a>
          )}

          <a
            href={project.githubUrl || "https://github.com/aelshh"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            aria-label={`${project.title} repository`}
            title="Open Repository"
            className="p-1 rounded hover:text-[var(--fg)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <FaGithub className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
