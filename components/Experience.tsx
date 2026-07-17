"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import RevealSection from "@/components/ui/RevealSection";
import SectionHeading from "@/components/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

function TimelineItem({
  experience,
}: {
  experience: (typeof experiencesData)[0];
}) {
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
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className="relative pl-10 pb-14 last:pb-0" style={{ opacity: 0 }}>
      {/* Timeline line */}
      <div className="absolute left-[3px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-[7px] h-[7px] rounded-full bg-primary shadow-[0_0_12px_rgba(139,92,246,0.5)]" />

      <div className="p-6 rounded-2xl glass-card hover:border-primary/20 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <h3 className="text-xl font-display font-bold text-text-primary">
              {experience.title}
            </h3>
            <p className="text-sm text-text-secondary mt-1">
              {experience.location}
            </p>
          </div>
          <span className="shrink-0 font-mono text-xs text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/15 self-start">
            {experience.date}
          </span>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">
          {experience.description}
        </p>
      </div>
    </div>
  );
}

const openToRoles = [
  { label: "Full-Time", description: "Full-stack / Frontend roles" },
  { label: "Freelance", description: "Project-based collaborations" },
  { label: "Contract", description: "Short-term engagements" },
];

export function Experience() {
  const { ref } = useSectionInView("Experience");
  const lineRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    const line = lineRef.current;
    const timeline = timelineRef.current;
    if (!line || !timeline) return;

    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timeline,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <section
      ref={ref}
      id="experience"
      className="relative py-24 sm:py-32 overflow-hidden scroll-mt-24"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          number="04"
          title="Experience"
          monoLabel="Career Timeline"
        />

        <div ref={timelineRef} className="mt-16 experience-timeline relative">
          <div ref={lineRef} className="experience-line-progress absolute left-[3px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent origin-top" />
          {experiencesData.map((exp, index) => (
            <TimelineItem key={index} experience={exp} />
          ))}
        </div>

        <RevealSection delay={0.2} className="mt-12">
          <div className="p-6 rounded-2xl glass-card">
            <span className="block font-mono text-xs tracking-[0.3em] uppercase text-primary-light mb-4">
              Currently Open To
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {openToRoles.map((role) => (
                <div
                  key={role.label}
                  className="p-4 rounded-xl bg-primary/5 border border-primary/10 text-center"
                >
                  <div className="text-sm font-medium text-text-primary">
                    {role.label}
                  </div>
                  <div className="text-xs text-text-muted mt-1 font-mono">
                    {role.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
