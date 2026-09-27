"use client";

import { useSectionInView } from "@/lib/hooks";
import RevealSection from "@/components/ui/RevealSection";
import SectionHeading from "@/components/SectionHeading";
import { Timeline } from "@/components/ui/timeline";
import { experiencesData } from "@/lib/data";

const openToRoles = [
  { label: "Full-Time", description: "Full-stack / Frontend roles" },
  { label: "Freelance", description: "Project-based collaborations" },
  { label: "Contract", description: "Short-term engagements" },
];

export function Experience() {
  const { ref } = useSectionInView("Experience");

  const timelineData = experiencesData.map((exp) => ({
    title: exp.title,
    date: exp.date,
    content: (
      <div className="rounded-2xl glass-card border-border hover:border-primary/25 transition-all duration-300 p-6">
        <div className="flex items-center gap-2 text-accent font-mono text-xs mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {exp.location}
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">
          {exp.description}
        </p>
      </div>
    ),
  }));

  return (
    <section
      ref={ref}
      id="experience"
      className="relative py-24 sm:py-32 overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          number="05"
          title="Experience"
          monoLabel="Career Timeline"
        />

        <div className="mt-8">
          <Timeline data={timelineData} />
        </div>

        <RevealSection delay={0.2}>
          <div className="p-6 rounded-2xl glass-card">
            <span className="block font-mono text-xs tracking-[0.3em] uppercase text-primary-light mb-4">
              Currently Open To
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {openToRoles.map((role) => (
                <div
                  key={role.label}
                  className="p-4 rounded-xl bg-primary/5 border border-primary/10 text-center hover:bg-primary/10 transition-colors duration-300"
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