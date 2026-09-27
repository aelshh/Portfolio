"use client";

import SectionHeading from "@/components/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import RevealSection from "@/components/ui/RevealSection";
import { educationData, certificationsData } from "@/lib/data";
import { HiOutlineAcademicCap, HiOutlineCheckCircle } from "react-icons/hi2";

export function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <section
      ref={ref}
      id="education"
      className="relative py-24 sm:py-32 overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,70,239,0.05),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          number="04"
          title="Education & Certifications"
          monoLabel="Credentials"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Education */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary-light">
              Education
            </span>
            <div className="mt-6 space-y-5 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary/60 before:via-border before:to-transparent">
              {educationData.map((edu, i) => (
                <RevealSection key={edu.degree} delay={0.1 + i * 0.1}>
                  <div className="relative pl-10">
                    <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full border border-primary/50 bg-primary/20 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                    <div className="p-6 rounded-2xl glass-card hover:border-primary/25 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-display font-bold text-text-primary">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-text-secondary mt-0.5">
                            {edu.institution} · {edu.location}
                          </p>
                        </div>
                        <span className="shrink-0 self-start font-mono text-xs text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/15">
                          {edu.duration}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary-light">
              Certifications
            </span>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert, i) => (
                <RevealSection key={cert.title} delay={0.1 + i * 0.08}>
                  <div className="h-full p-5 rounded-2xl glass-card border-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group">
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                        <HiOutlineAcademicCap className="w-5 h-5 text-primary-light" />
                      </div>
                      <HiOutlineCheckCircle className="w-5 h-5 text-accent shrink-0" />
                    </div>
                    <h4 className="mt-4 text-sm font-display font-bold text-text-primary leading-snug">
                      {cert.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-text-secondary">
                      {cert.issuer}
                    </p>
                    <span className="mt-3 inline-block font-mono text-[10px] text-text-muted">
                      {cert.year}
                    </span>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}