"use client";

import { useEffect, useState, useRef } from "react";
import { useMechanicalSound } from "@/components/ui/BrutalistLayout";

const indexSections = [
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "github", label: "GitHub" },
];

export function FloatingIndex() {
  const [activeId, setActiveId] = useState<string>("about");
  const [mascotMood, setMascotMood] = useState<"idle" | "happy" | "purr">("idle");
  const intersectingRef = useRef<Set<string>>(new Set());
  const playClick = useMechanicalSound();

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intersectingRef.current.add(entry.target.id);
        } else {
          intersectingRef.current.delete(entry.target.id);
        }
      });

      const visible = Array.from(intersectingRef.current);
      if (visible.length === 0) return;

      let topElementId = visible[0];
      let minTop = Math.abs(document.getElementById(visible[0])?.getBoundingClientRect().top ?? 0);

      for (const id of visible.slice(1)) {
        const top = Math.abs(document.getElementById(id)?.getBoundingClientRect().top ?? 0);
        if (top < minTop) {
          minTop = top;
          topElementId = id;
        }
      }

      setActiveId(topElementId);
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });

    indexSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
        setActiveId(indexSections[indexSections.length - 1].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMascotClick = () => {
    playClick();
    setMascotMood((prev) => (prev === "idle" ? "happy" : prev === "happy" ? "purr" : "idle"));

    // Spawn oneko script if available
    if (typeof window !== "undefined" && !document.getElementById("oneko-script")) {
      const script = document.createElement("script");
      script.id = "oneko-script";
      script.src = "/oneko.js";
      script.async = true;
      document.body.appendChild(script);
    }
  };

  return (
    <aside className="fixed top-[26vh] left-[calc(50%+410px)] pointer-events-auto hidden xl:flex flex-col gap-3.5 z-30 select-none">
      <div className="flex items-center gap-2">
        <h3 className="font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--soft)] uppercase">
          INDEX
        </h3>
        <span className="h-px w-3 bg-[var(--line)]" />
      </div>

      {/* Navigation anchors with hairline indicator */}
      <div className="flex flex-col gap-2.5">
        {indexSections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={playClick}
              className={`group flex items-center gap-2.5 font-mono text-[12px] font-medium tracking-[0.05em] transition-all duration-300 ${
                isActive
                  ? "text-[var(--fg)] font-semibold"
                  : "text-[var(--soft)] hover:text-[var(--muted)]"
              }`}
            >
              <span
                className={`h-[1px] bg-current transition-all duration-300 ${
                  isActive ? "w-4" : "w-0 group-hover:w-2"
                }`}
              />
              {section.label}
            </a>
          );
        })}
      </div>

      {/* Retro Pixel Mascot Illustration */}
      <div className="mt-4 pt-3 border-t border-[var(--line)]/50">
        <button
          type="button"
          onClick={handleMascotClick}
          className="group flex flex-col items-start gap-1.5 p-2 rounded-lg border border-[var(--line)] bg-[var(--chip)]/60 hover:bg-[var(--chip)] transition-all cursor-pointer text-left"
          title="Click to summon retro desktop pet!"
        >
          <div className="flex items-center gap-2">
            {/* 8-Bit Pixel Cat Mascot SVG */}
            <svg
              className="w-5 h-5 text-[var(--fg)] transition-transform duration-200 group-hover:scale-110"
              viewBox="0 0 16 16"
              fill="currentColor"
              shapeRendering="crispEdges"
            >
              {/* Ears */}
              <rect x="2" y="2" width="2" height="2" />
              <rect x="12" y="2" width="2" height="2" />
              {/* Head */}
              <rect x="3" y="4" width="10" height="2" />
              <rect x="2" y="6" width="12" height="4" />
              {/* Eyes */}
              <rect
                x={mascotMood === "purr" ? "4" : "5"}
                y="7"
                width="2"
                height="1"
                fill={mascotMood === "happy" ? "#10b981" : "var(--bg)"}
              />
              <rect
                x={mascotMood === "purr" ? "10" : "9"}
                y="7"
                width="2"
                height="1"
                fill={mascotMood === "happy" ? "#10b981" : "var(--bg)"}
              />
              {/* Nose & Mouth */}
              <rect x="7" y="8" width="2" height="1" fill="#f43f5e" />
              <rect x="6" y="9" width="4" height="1" />
              {/* Body */}
              <rect x="3" y="10" width="10" height="4" />
              {/* Paws */}
              <rect x="3" y="14" width="3" height="1" />
              <rect x="10" y="14" width="3" height="1" />
              {/* Tail */}
              <rect x="13" y="11" width="1" height="3" />
            </svg>

            <span className="font-mono text-[10px] text-[var(--soft)] group-hover:text-[var(--fg)] transition-colors">
              {mascotMood === "happy"
                ? "meow! ^-^"
                : mascotMood === "purr"
                ? "purr... :3"
                : "neko.sys"}
            </span>
          </div>
          <span className="font-mono text-[8px] text-[var(--soft)]/70">
            [click for pet]
          </span>
        </button>
      </div>
    </aside>
  );
}
