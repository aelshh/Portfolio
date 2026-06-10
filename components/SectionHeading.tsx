"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

type SectionHeadingProps = {
  number: string;
  title: string;
  sectionName: string;
};

export default function SectionHeading({
  number,
  title,
  sectionName,
}: SectionHeadingProps) {
  const { ref } = useSectionInView(sectionName as "About" | "Skills" | "Projects" | "Experience" | "Contact");

  return (
    <div ref={ref} className="relative mb-16 sm:mb-20">
      <span className="section-number">{number}</span>
      <div className="relative z-10">
        <span className="font-mono text-xs tracking-widest uppercase text-accent dark:text-accent-muted">
          {number.padStart(2, "0")}
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold tracking-tight mt-2"
        >
          {title}
        </motion.h2>
      </div>
    </div>
  );
}
