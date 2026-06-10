"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { HiExternalLink } from "react-icons/hi";

function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  index,
}: {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: string | StaticImageData;
  projectUrl: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const xProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -100 : 100, 0]
  );

  return (
    <motion.article
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress, x: xProgress }}
      className="group mb-16 sm:mb-24 last:mb-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
            <Image
              src={imageUrl}
              alt={`${title} - web application built by Adarsh Chaudhary using ${tags.slice(0, 3).join(", ")}`}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>

        <div className={index % 2 === 1 ? "lg:order-1" : ""}>
          <span className="font-mono text-xs tracking-widest uppercase text-accent dark:text-accent-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-4 tracking-tight">
            {title}
          </h3>
          <p className="text-muted-light dark:text-muted-dark leading-relaxed mb-6">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-md bg-accent/10 text-accent dark:text-accent-muted font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border-light dark:border-border-dark text-sm font-medium hover:border-accent hover:text-accent transition-all duration-300"
            aria-label={`View ${title} live project`}
          >
            Live Demo
            <HiExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-24 sm:py-32"
      aria-label="Featured projects by Adarsh Chaudhary"
    >
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading number="03" title="Featured Projects" sectionName="Projects" />

        <div className="mt-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
