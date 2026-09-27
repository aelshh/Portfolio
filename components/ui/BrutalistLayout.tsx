"use client";

import React, { useRef, useCallback } from "react";

/**
 * Centered column bounded by hairline borders (matching animeshh.me architecture)
 */
export function Container({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[780px] border-x border-[var(--line)] border-dashed ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Full-width striped divider with 4 corner cross-hair nodes and centered serif title
 */
export function SectionDivider({
  title,
  aside,
  id,
  number,
}: {
  title: string;
  aside?: React.ReactNode;
  id?: string;
  number?: string;
}) {
  return (
    <div id={id} className="relative w-full border-y border-[var(--line)] bg-stripes scroll-mt-20">
      {/* 4 Corner Crosshairs */}
      <span className="absolute top-0 left-0 h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 bg-[var(--fg)] opacity-40 z-20 pointer-events-none" />
      <span className="absolute top-0 right-0 h-[3px] w-[3px] translate-x-1/2 -translate-y-1/2 bg-[var(--fg)] opacity-40 z-20 pointer-events-none" />
      <span className="absolute bottom-0 left-0 h-[3px] w-[3px] -translate-x-1/2 translate-y-1/2 bg-[var(--fg)] opacity-40 z-20 pointer-events-none" />
      <span className="absolute bottom-0 right-0 h-[3px] w-[3px] translate-x-1/2 translate-y-1/2 bg-[var(--fg)] opacity-40 z-20 pointer-events-none" />

      <Container className="flex items-center justify-between gap-4 bg-[var(--bg)] px-6 py-3 sm:px-8">
        <div className="flex items-baseline gap-3">
          {number && (
            <span className="font-mono text-xs text-[var(--soft)] tracking-wider">
              {number}
            </span>
          )}
          <h2 className="font-serif text-2xl tracking-wide text-[var(--fg)]">
            {title}
          </h2>
        </div>
        {aside && <div className="shrink-0">{aside}</div>}
      </Container>
    </div>
  );
}

/**
 * Striped gap separator between sections
 */
export function StripedSpacer({
  h = "h-7",
  className = "",
}: {
  h?: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full bg-stripes ${h} ${className}`}>
      <Container className="h-full" />
    </div>
  );
}

/**
 * Mechanical UI click audio synthesizer using Web Audio API
 */
export function useMechanicalSound() {
  const audioCtxRef = useRef<AudioContext | null>(null);

  return useCallback(() => {
    try {
      if (typeof window === "undefined") return;
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      let ctx = audioCtxRef.current;
      if (!ctx || ctx.state === "closed") {
        ctx = new AudioCtx();
        audioCtxRef.current = ctx;
      }
      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }

      const now = ctx.currentTime;
      const dur = 0.04;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.025);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + dur);
    } catch {
      // AudioContext not allowed or unsupported
    }
  }, []);
}
