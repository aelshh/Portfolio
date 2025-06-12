"use client";

import React from "react";
import { SectionHeading } from "./SectionHeading";
import { skills } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const variant = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.05 },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.7);
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800  ">
        {skills.map((skill, index) => (
          <motion.li
            variants={variant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="border border-black/[0.1] bg-white  px-5 py-3 rounded-xl"
            key={index}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
