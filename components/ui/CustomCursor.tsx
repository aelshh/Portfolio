"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouchDevice || reducedMotion) return;

    let mounted = false;

    const handleFirstMove = (e: MouseEvent) => {
      if (mounted) return;
      mounted = true;

      window.removeEventListener("mousemove", handleFirstMove);

      const container = containerRef.current;
      if (!container) return;

      container.style.opacity = "1";

      const cursor = cursorRef.current;
      const ring = ringRef.current;
      if (!cursor || !ring) return;

      gsap.set(cursor, { x: e.clientX, y: e.clientY });
      gsap.set(ring, { x: e.clientX, y: e.clientY });

      const xTo = gsap.quickTo(cursor, "x", {
        duration: 0.15,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(cursor, "y", {
        duration: 0.15,
        ease: "power3.out",
      });
      const ringXTo = gsap.quickTo(ring, "x", {
        duration: 0.35,
        ease: "power3.out",
      });
      const ringYTo = gsap.quickTo(ring, "y", {
        duration: 0.35,
        ease: "power3.out",
      });

      const handleMouseMove = (ev: MouseEvent) => {
        xTo(ev.clientX);
        yTo(ev.clientY);
        ringXTo(ev.clientX);
        ringYTo(ev.clientY);
      };

      const handleMouseEnter = () => {
        ring.style.width = "56px";
        ring.style.height = "56px";
        ring.style.borderColor = "#e879f9";
        ring.style.background = "rgba(232, 121, 249, 0.06)";
      };

      const handleMouseLeave = () => {
        ring.style.width = "36px";
        ring.style.height = "36px";
        ring.style.borderColor = "#fff";
        ring.style.background = "transparent";
      };

      window.addEventListener("mousemove", handleMouseMove);

      const bindInteractives = () => {
        document
          .querySelectorAll("a, button, [data-cursor-hover]")
          .forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
          });
      };

      bindInteractives();

      const observer = new MutationObserver(bindInteractives);
      observer.observe(document.body, { childList: true, subtree: true });
    };

    window.addEventListener("mousemove", handleFirstMove);

    return () => {
      window.removeEventListener("mousemove", handleFirstMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] pointer-events-none"
      style={{ opacity: 0 }}
    >
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 mix-blend-difference"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#fff",
          translate: "-50% -50%",
        }}
      />
      <div
        ref={ringRef}
        className="absolute top-0 left-0 mix-blend-difference"
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid #fff",
          translate: "-50% -50%",
          transition:
            "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background 0.3s ease",
        }}
      />
    </div>
  );
}
