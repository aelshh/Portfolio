"use client";

import { motion } from "motion/react";
import { projectsData } from "@/lib/data";

export default function ResumeProjects() {
  return (
    <section className="w-full">
      <div className="mb-8">
        <span className="font-mono text-sm tracking-wider text-primary mb-2 block uppercase">
          PORTFOLIO
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary print:text-neutral-900">
          Featured Projects
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {projectsData.map((project, index) => {
          const displayTags = project.tags.slice(0, 4);
          const remainingTags = project.tags.length - 4;
          const displayUrl = project.projectUrl.replace(/^https?:\/\//, "");

          return (
            <motion.a
              key={index}
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass-card rounded-2xl p-6 hover:border-primary/25 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-300 print:bg-white print:border-neutral-300 print:shadow-none print:break-inside-avoid"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <h3 className="text-lg font-display font-bold text-text-primary group-hover:text-primary transition-colors print:text-neutral-900">
                {project.title}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-block ml-2 text-sm print:hidden">
                  ↗
                </span>
              </h3>

              <div className="text-xs font-mono text-text-muted mt-1 print:text-neutral-500">
                {displayUrl}
              </div>

              <p className="text-sm leading-relaxed text-text-secondary mt-3 line-clamp-2 print:text-neutral-700">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {displayTags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-2 py-0.5 text-[11px] font-mono rounded-md border border-border text-text-muted print:border-neutral-300 print:text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
                {remainingTags > 0 && (
                  <span className="px-2 py-0.5 text-[11px] font-mono rounded-md border border-border text-text-muted print:border-neutral-300 print:text-neutral-600">
                    +{remainingTags} more
                  </span>
                )}
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}
