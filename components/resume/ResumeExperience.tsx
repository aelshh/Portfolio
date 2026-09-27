"use client";

import React from "react";
import { motion } from "motion/react";
import { experiencesData } from "@/lib/data";
import { Timeline } from "@/components/ui/timeline";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export default function ResumeExperience() {
  const timelineData = experiencesData.map((experience) => ({
    title: experience.title,
    date: experience.date,
    content: (
      <CardSpotlight
        className="!p-5 sm:!p-6 print:bg-white print:border-neutral-200 print:shadow-none"
        color="rgba(139, 92, 246, 0.1)"
      >
        <div className="text-sm font-medium text-primary mb-2 print:text-violet-700">
          {experience.location}
        </div>
        <p className="text-sm leading-relaxed text-text-secondary print:text-neutral-700">
          {experience.description}
        </p>
      </CardSpotlight>
    ),
  }));

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="mb-8">
        <span className="font-mono text-xs text-primary uppercase tracking-[0.25em]">
          Career
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary print:text-neutral-900 mt-2">
          Experience
        </h2>
      </div>

      <Timeline data={timelineData} />
    </motion.section>
  );
}
