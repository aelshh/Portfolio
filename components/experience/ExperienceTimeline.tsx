"use client";

import { motion } from "framer-motion";
import { Container, SectionDivider } from "@/components/ui/BrutalistLayout";
import { achievementsData } from "@/lib/data";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  blurb: string;
  bullets: string[];
  stack: string[];
}

const detailedExperiences: ExperienceItem[] = [
  {
    company: "Gopluto.ai",
    role: "Full Stack Developer",
    period: "Sep 2025 – Present",
    location: "Gurgaon, Haryana",
    blurb:
      "Engineering full-stack systems and scalable AI pipelines for intelligent automation.",
    bullets: [
      "Engineered responsive user interfaces and optimized page load performance across core customer-facing products.",
      "Architected backend APIs and synchronized data models with frontend state systems.",
      "Integrated third-party services including Fireflies AI for automated meeting audio transcription and dynamic summary generation.",
      "Implemented graph schema models in ArangoDB to manage high-dimensional connected relational structures.",
    ],
    stack: ["Next.js", "React", "Node.js", "TypeScript", "ArangoDB", "Fireflies AI", "REST APIs"],
  },
  {
    company: "DCverse",
    role: "Freelance Full Stack Developer",
    period: "Jan 2026 – Apr 2026",
    location: "Remote",
    blurb:
      "Delivered end-to-end web applications for international clients and high-growth startups.",
    bullets: [
      "Designed and deployed production-ready web apps from Figma prototypes to live cloud environments.",
      "Constructed secure backend endpoints, payment provider integrations, and authentication flows.",
      "Maintained and refactored client codebases, resolving edge-case bugs and improving responsiveness.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase"],
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative w-full">
      <SectionDivider number="04" title="Experience" />

      <Container>
        {/* Timeline Items */}
        <div className="divide-y divide-[var(--line)]">
          {detailedExperiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="px-6 py-6 sm:px-8 space-y-4"
            >
              {/* Header: Role · Company & Period */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-[15.5px] font-semibold text-[var(--fg)]">
                    {exp.role}
                  </h3>
                  <span className="text-[var(--soft)] font-mono">·</span>
                  <span className="text-[14px] text-[var(--muted)] font-medium">
                    {exp.company}
                  </span>
                  <span className="font-mono text-[10.5px] text-[var(--soft)]">
                    ({exp.location})
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[var(--soft)]">
                  {exp.period}
                </span>
              </div>

              {/* Blurb */}
              <p className="text-[13.5px] leading-relaxed text-[var(--muted)]">
                {exp.blurb}
              </p>

              {/* Milestone bullets */}
              <div className="space-y-2 pt-1">
                {exp.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="relative flex items-start gap-3">
                    <span className="mt-[7px] size-1.5 rounded-full bg-[var(--soft)] shrink-0 ring-2 ring-[var(--line)]" />
                    <p className="text-[12.5px] leading-relaxed text-[var(--muted)]">
                      {b}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-[var(--chip)] px-2 py-0.5 font-mono text-[10.5px] text-[var(--soft)] border border-[var(--line)]/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid Summary Box */}
        <div className="border-t border-[var(--line)] px-6 py-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 rounded-xl border border-[var(--line)] bg-[var(--card)] p-4 text-center divide-x divide-[var(--line)] shadow-xs">
            {achievementsData.map((stat) => (
              <div key={stat.label} className="px-2">
                <p className="font-serif text-2xl font-bold text-[var(--fg)]">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--soft)] mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
