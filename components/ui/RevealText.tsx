"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sizeClasses = {
  lg: "text-3xl sm:text-4xl",
  xl: "text-4xl sm:text-5xl",
  "2xl": "text-5xl sm:text-6xl",
} as const;

interface RevealTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  size?: keyof typeof sizeClasses;
}

export default function RevealText({
  children,
  className = "",
  as: Tag = "h2",
  delay = 0,
  size = "xl",
}: RevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll(".word");

    gsap.set(words, { y: "100%", opacity: 0 });

    gsap.to(words, {
      y: "0%",
      opacity: 1,
      duration: 0.8,
      stagger: 0.04,
      ease: "power3.out",
      delay,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });
  }, [delay]);

  const words = children.split(" ");

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <Tag className={`flex flex-wrap font-display font-bold tracking-tight ${sizeClasses[size]}`}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
            <span className="word inline-block">{word}</span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
