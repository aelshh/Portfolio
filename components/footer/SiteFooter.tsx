"use client";

import { useState, useEffect } from "react";
import { Container, StripedSpacer } from "@/components/ui/BrutalistLayout";
import { ArrowUp } from "lucide-react";

export function SiteFooter() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTimeString(formatter.format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full relative z-20">
      <StripedSpacer h="h-6" />

      <div className="w-full border-t border-[var(--line)]">
        <Container className="border-b-0 px-6 py-8 text-center sm:px-8">
          <p className="text-[14px] text-[var(--muted)]">
            Designed &amp; Developed by{" "}
            <span className="font-semibold text-[var(--fg)]">
              Adarsh Chaudhary
            </span>
          </p>

          <p className="mt-1.5 font-mono text-[12px] text-[var(--soft)]">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <div className="mt-3 flex items-center justify-center gap-2 font-mono text-[12px] text-[var(--soft)]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span>Lucknow, India · {timeString || "IST"}</span>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--chip)] px-3 py-1 font-mono text-[11px] text-[var(--soft)] hover:text-[var(--fg)] hover:border-[var(--soft)] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="size-3" />
            </button>
          </div>
        </Container>
      </div>
    </footer>
  );
}
