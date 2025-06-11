"use client";

import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

type ProjectCardProps = (typeof projectsData)[0];

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      id="projects"
      ref={ref}
      className="mb-3 sm:mb-8 group scroll-mt-70"
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section className=" rounded-lg group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 even:sm:pr-6 relative  sm:h-[20rem]  group-even:pl-11 hover:bg-gray-200 transition ">
        <div className="sm:max-w-1/2 px-7 pt-2 pb-8 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full group-even:ml-[18rem]    ">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="mt-2 leading-relaxed text-gray-700 ">{description}</p>
          <ul className="flex gap-2 flex-wrap mt-4 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="p-x-2 bg-black/[0.7] rounded-full px-3 py-1 text-[0.7rem] tracking-wider uppercase text-white"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on."
          quality={95}
          className=" group-even:right-[initial] group-even:-left-40 absolute top-8 -right-40 rounded-t-xl w-[28.5rem] shadow-2xl group-hover:-translate-x-3   group-hover:scale-[1.04] group-hover:translate-y-3 group-hover:-rotate-2 transition
        group-even:group-hover:translate-x-3 group-even:group-hover:rotate-3
        "
        />
      </section>
    </motion.div>
  );
}
