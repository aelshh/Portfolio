"use client";

import Image, { StaticImageData } from "next/image";
import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";
import { HiExternalLink } from "react-icons/hi";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionHeading from "@/components/SectionHeading";
import RevealSection from "@/components/ui/RevealSection";

function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  featured,
  className,
}: {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: string | StaticImageData;
  projectUrl: string;
  featured?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <RevealSection delay={0.1}>
        <div className="group relative overflow-hidden rounded-2xl glass-card border-border hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]">
          <div className={`relative ${featured ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[16/11]"}`}>
            <Image
              src={imageUrl}
              alt={`${title} project screenshot`}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">
                {featured ? "★ Featured Project" : "Project"}
              </span>
              <MagneticButton
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs font-medium text-text-primary hover:border-accent hover:text-accent transition-all duration-300"
                aria-label={`View ${title} live project`}
              >
                Live Demo
                <HiExternalLink className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>

            <h3 className={`font-display font-bold tracking-tight text-text-primary ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
              {title}
            </h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-2 max-w-2xl">
              {description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.slice(0, featured ? 5 : 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-[11px] rounded-full border border-primary/20 bg-primary/10 text-primary-light font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}

export function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-24 sm:py-32 overflow-hidden scroll-mt-24"
      aria-label="Featured projects by Adarsh Chaudhary"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          number="02"
          title="Featured Projects"
          monoLabel="Selected Work"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              featured={index === 0}
              className={index === 0 ? "md:col-span-2" : "md:col-span-1"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}