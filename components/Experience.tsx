"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

function TimelineItem({
  experience,
}: {
  experience: (typeof experiencesData)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border-light dark:bg-border-dark" />
      <div className="absolute left-[-4px] top-1 w-[9px] h-[9px] rounded-full bg-accent border-2 border-bg-light dark:border-bg-dark" />

      <div className="p-5 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-lg font-semibold">{experience.title}</h3>
            <p className="text-sm text-muted-light dark:text-muted-dark">
              {experience.location}
            </p>
          </div>
          <span className="shrink-0 font-mono text-xs text-accent dark:text-accent-muted px-2 py-1 rounded-md bg-accent/10">
            {experience.date}
          </span>
        </div>
        <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
          {experience.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section ref={ref} id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading number="04" title="Experience" sectionName="Experience" />

        <div className="mt-12">
          {experiencesData.map((exp, index) => (
            <TimelineItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
