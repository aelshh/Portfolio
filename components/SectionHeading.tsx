"use client";

import RevealText from "@/components/ui/RevealText";

interface SectionHeadingProps {
  number: string;
  title: string;
  monoLabel?: string;
}

export default function SectionHeading({
  number,
  title,
  monoLabel,
}: SectionHeadingProps) {
  return (
    <div className="relative">
      <span className="section-number font-display" aria-hidden="true">
        {number}
      </span>
      <RevealText as="h2" size="xl" className="relative z-10 pt-8 mb-4">
        {title}
      </RevealText>
      {monoLabel && (
        <span className="relative z-10 font-mono text-xs tracking-[0.3em] uppercase text-primary-light">
          {monoLabel}
        </span>
      )}
    </div>
  );
}
