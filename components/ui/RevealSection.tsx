"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export default function RevealSection({
  children,
  className = "",
  delay = 0,
  y = 40,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      }
    );
  }, [delay, y]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
