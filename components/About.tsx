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
        After discovering web development in{" "}
        <span className="font-medium">9th grade</span>, I became hooked on
        creating websites with <span className="font-medium">HTML and CSS</span>
        . Later, I turned my interest in computers into a focused coding
        journey—learning from
        <span className="font-medium">YouTube, Udemy (Angela Yu)</span>, and
        <span className="font-medium">Harkirat Singh&apos;s Cohort 3.0</span>. I
        enjoy working with
        <span className="font-medium">
          React, Next.js, Express, TypeScript, Prisma, MongoDB, Turborepo, and
          Supabase
        </span>
        . <span className="italic">My favorite project so far</span> is an{" "}
        <span className="font-medium"> AI image generator</span> that lets users
        create and train models on their own images.{" "}
        <span className="italic">What excites me most</span> is building
        powerful things from just code. Right now, I&apos;m looking for a{" "}
        <span className="font-medium">full-stack web developer role</span> at a
        fast-paced startup, where I can keep growing and building cool products.
      </p>
      <p className="md:text-lg leading-8 md:!leading-9 ">
        <span className="italic">Outside tech</span>, I love{" "}
        <span className="font-medium">singing</span> and going to the{" "}
        <span className="font-medium">gym</span>. I&apos;m always curious and
        enjoy learning new things.
      </p>
    </motion.section>
  );
};
