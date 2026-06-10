"use client";

import useActiveSectionContext from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/lib/types";
import { useEffect, useState, useCallback } from "react";

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  return { ref };
}

export function useTextScramble(
  texts: string[],
  scrambleSpeed = 50
) {
  const [displayText, setDisplayText] = useState(texts[0]);
  const [isScrambling, setIsScrambling] = useState(false);

  const scramble = useCallback(
    (from: string, to: string) => {
      setIsScrambling(true);
      const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
      const fromLen = from.length;
      const toLen = to.length;
      const maxLen = Math.max(fromLen, toLen);
      let iterations = 0;

      const interval = setInterval(() => {
        iterations++;
        let result = "";

        for (let i = 0; i < maxLen; i++) {
          if (i < toLen && iterations > i) {
            result += to[i];
          } else if (i < fromLen) {
            result += chars[Math.floor(Math.random() * chars.length)];
          } else {
            result += " ";
          }
        }

        setDisplayText(result);

        if (iterations >= maxLen + 2) {
          clearInterval(interval);
          setDisplayText(to);
          setIsScrambling(false);
        }
      }, scrambleSpeed);
    },
    [scrambleSpeed]
  );

  const next = useCallback(() => {
    const currentIndex = texts.indexOf(displayText);
    const nextIndex = (currentIndex + 1) % texts.length;
    const fromText = texts.some((t) => t === displayText)
      ? displayText
      : texts[0];
    scramble(fromText, texts[nextIndex]);
  }, [texts, displayText, scramble]);

  return { displayText, isScrambling, next };
}

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}
