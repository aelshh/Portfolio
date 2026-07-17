"use client";

import SectionHeading from "@/components/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import RevealSection from "@/components/ui/RevealSection";
import {
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlineCodeBracket,
  HiOutlineMusicalNote,
} from "react-icons/hi2";

const quickFacts = [
  {
    icon: HiOutlineMapPin,
    label: "Location",
    value: "Lucknow, Uttar Pradesh, India",
  },
  {
    icon: HiOutlineEnvelope,
    label: "Email",
    value: "hello@adarshchaudhary.in",
  },
  {
    icon: HiOutlineCodeBracket,
    label: "Status",
    value: "Available for freelance & full-time roles",
  },
  {
    icon: HiOutlineMusicalNote,
    label: "Interests",
    value: "Singing, Gym, Always learning",
  },
];

export function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-24 sm:py-32 overflow-hidden scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading number="01" title="About Me" monoLabel="Quick Facts" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-16">
          {/* Bio */}
          <RevealSection className="lg:col-span-7 space-y-6" delay={0.1}>
            <div className="space-y-5 text-text-secondary leading-[1.8] text-base">
              <p>
                I founded my first startup at 19; it ran for about a year before
                closing. That experience taught me{" "}
                <span className="text-text-primary font-medium">
                  entrepreneurship, resilience
                </span>
                , and building real-world products.
              </p>
              <p>
                Afterward, I focused on{" "}
                <span className="text-text-primary font-medium">
                  modern web development
                </span>{" "}
                and now work with React, Next.js, Express, TypeScript, Node.js,
                PostgreSQL, MongoDB, and Supabase. As a freelance full-stack
                developer based in Lucknow, India, I build and deliver
                production-grade web applications for clients worldwide.
              </p>
              <p>
                My favorite project is{" "}
                <span className="text-text-primary font-medium">PicMe AI</span>{" "}
                — an AI image generation platform where users can create and
                train models on their own images. What excites me most is
                building powerful products from code. I&apos;m open to a{" "}
                <span className="text-text-primary font-medium">
                  full-stack developer role or freelance projects
                </span>{" "}
                where I can keep growing and shipping.
              </p>
            </div>
          </RevealSection>

          {/* Quick Facts */}
          <RevealSection className="lg:col-span-5" delay={0.3}>
            <div className="sticky top-32">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary-light">
                Quick Facts
              </span>
              <div className="mt-5 space-y-3">
                {quickFacts.map((fact, i) => (
                  <RevealSection key={fact.label} delay={0.3 + i * 0.08}>
                    <div className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:border-primary/20 transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <fact.icon className="w-5 h-5 text-primary-light" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs text-text-muted font-mono block mb-0.5">
                          {fact.label}
                        </span>
                        <span className="text-sm text-text-primary font-medium block truncate">
                          {fact.value}
                        </span>
                      </div>
                    </div>
                  </RevealSection>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
