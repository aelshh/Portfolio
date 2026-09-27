"use client";

import { motion } from "motion/react";
import { educationData, certificationsData } from "@/lib/data";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ResumeEducation() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 lg:grid-cols-5 gap-8"
    >
      {/* Education Column */}
      <div className="lg:col-span-3 space-y-6">
        <div>
          <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
            Education
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary print:text-neutral-900 mt-1">
            Education
          </h2>
        </div>

        <div className="space-y-4">
          {educationData.map((edu, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <CardSpotlight className="print:bg-white print:border-neutral-300 print:shadow-none p-6 block">
                <h3 className="text-base font-display font-bold text-text-primary print:text-neutral-900">
                  {edu.degree}
                </h3>
                <div className="text-sm text-primary mt-1">
                  {edu.institution}
                  {edu.location ? `, ${edu.location}` : ""}
                </div>
                <div className="text-xs font-mono text-text-muted mt-1 print:text-neutral-600">
                  {edu.duration}
                </div>
                <p className="text-sm leading-relaxed text-text-secondary mt-2 print:text-neutral-700">
                  {edu.description}
                </p>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications Column */}
      <div className="lg:col-span-2 space-y-6">
        <div>
          <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
            Credentials
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary print:text-neutral-900 mt-1">
            Certifications
          </h2>
        </div>

        <div className="space-y-3">
          {certificationsData.map((cert, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <div className="glass-card rounded-xl p-4 relative pl-5 overflow-hidden print:bg-white print:border-neutral-300 print:shadow-none">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/50 print:bg-violet-600" />
                <h3 className="text-sm font-bold text-text-primary print:text-neutral-900">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono text-text-muted mt-1 print:text-neutral-600">
                  {cert.issuer} &middot; {cert.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
