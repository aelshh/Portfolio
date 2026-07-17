"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image, { StaticImageData } from "next/image";
import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";
import { HiExternalLink } from "react-icons/hi";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionHeading from "@/components/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

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
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    const card = cardRef.current;
    const image = imageRef.current;
    if (!card || !image) return;

    gsap.fromTo(
      card,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      image,
      { scale: 1.15 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div ref={cardRef} className="group" style={{ opacity: 0 }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Image */}
        <div
          className={`relative ${isEven ? "lg:col-span-5" : "lg:col-span-5 lg:order-2"}`}
        >
          <div
            ref={imageRef}
            className="relative overflow-hidden rounded-2xl border border-border"
          >
            <div className="aspect-[16/10] relative">
              <Image
                src={imageUrl}
                alt={`${title} project screenshot`}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/50 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className={`${isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-1"} space-y-5`}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-text-primary">
            {title}
          </h3>
          <p className="text-text-secondary leading-relaxed text-sm">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs rounded-full border border-primary/15 bg-primary/5 text-primary-light font-mono"
              >
                {tag}
              </span>
            ))}
            {tags.length > 5 && (
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-border text-text-muted font-mono">
                +{tags.length - 5}
              </span>
            )}
          </div>
          <MagneticButton
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-text-primary hover:border-accent hover:text-accent transition-all duration-300"
            aria-label={`View ${title} live project`}
          >
            Live Demo
            <HiExternalLink className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          number="02"
          title="Featured Projects"
          monoLabel="Selected Work"
        />

        <div className="mt-16 space-y-24">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
