"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "./SectionHeading";
import { motion } from "framer-motion";
import useActiveSectionContext from "@/context/ActiveSectionContext";
import { useSectionInView } from "@/lib/hooks";

export const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      id="about"
      className="text-center mb-28 max-w-[45rem] sm:mb-40 scroll-mt-50"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 md:text-lg leading-8 md:!leading-9 ">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p className="md:text-lg leading-8 md:!leading-9 ">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
};
