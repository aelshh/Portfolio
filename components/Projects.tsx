"use client";

import ProjectCard from "./ProjectCard";
import React from "react";
import { SectionHeading } from "./SectionHeading";
import { projectsData } from "@/lib/data";

import { useSectionInView } from "@/lib/hooks";

export const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section className="mb-28" ref={ref}>
      <SectionHeading> My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project}></ProjectCard>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
