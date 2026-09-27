"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { achievementsData } from "@/lib/data";
import {
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlineCodeBracket,
  HiOutlineMusicalNote,
} from "react-icons/hi2";

function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-3xl sm:text-4xl font-bold text-gradient-violet">
      {display}
      {suffix}
    </span>
  );
}

const quickFacts = [
  {
    icon: HiOutlineMapPin,
    label: "Location",
    value: "Lucknow, UP, India",
  },
  {
    icon: HiOutlineEnvelope,
    label: "Email",
    value: "hello@adarshchaudhary.in",
  },
  {
    icon: HiOutlineMusicalNote,
    label: "Interests",
    value: "Singing · Gym · Always learning",
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,70,239,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading number="01" title="About Me" monoLabel="Quick Facts" />

        <div className="mt-16">
          <BentoGrid>
            {/* Portrait */}
            <BentoGridItem
              className="md:col-span-1 md:row-span-2 overflow-hidden relative"
              header={
                <div className="relative w-full h-full min-h-[15rem] rounded-xl overflow-hidden border border-border/60">
                  <Image
                    src="/picofme.png"
                    alt="Portrait of Adarsh Chaudhary"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-sm font-display font-bold text-white">
                      Adarsh Chaudhary
                    </div>
                    <div className="text-xs font-mono text-white/80">
                      adarsh@dev
                    </div>
                  </div>
                </div>
              }
            />

            {/* Bio */}
            <BentoGridItem
              title="Full-Stack Engineer with a founder mindset"
              description={
                <span className="inline-flex items-start gap-2 flex-wrap">
                  I founded my first startup at 19 and shipped production-grade
                  web apps ever since — AI products, e-commerce, and SaaS. I
                  specialize in React, Next.js, Node.js, TypeScript, and
                  PostgreSQL, delivering polished products for clients
                  worldwide.
                </span>
              }
              className="md:col-span-2"
              icon={
                <HiOutlineCodeBracket className="h-6 w-6 text-primary-light" />
              }
            />

            {/* Status */}
            <BentoGridItem
              title="Currently available"
              description="Open to full-time, freelance and contract engagements — worldwide, remote-first."
              className="md:col-span-2"
              icon={
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  status: open_to_work
                </span>
              }
            />

            {/* Quick facts */}
            {quickFacts.map((fact) => (
              <BentoGridItem
                key={fact.label}
                title={fact.label}
                description={fact.value}
                className="md:col-span-1"
                icon={<fact.icon className="h-5 w-5 text-primary-light" />}
              />
            ))}

            {/* Achievements */}
            <div className="md:col-span-3 flex flex-col justify-center gap-6 rounded-2xl glass-card p-6 transition-all duration-300 hover:border-primary/25">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-text-muted">
                Impact in numbers
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {achievementsData.map((item) => (
                  <div key={item.label} className="text-center">
                    <Counter value={item.value} suffix={item.suffix} />
                    <div className="mt-1 text-xs font-mono text-text-secondary">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}