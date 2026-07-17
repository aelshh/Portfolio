"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    gsap.to(bar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    gsap.set(bar, { scaleX: 0, transformOrigin: "left" });
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary-light to-accent z-[9999]"
      aria-hidden="true"
    />
  );
}
