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
        I founded my first startup at 19; it ran for about a year before closing.
        That experience taught me{" "}
        <span className="font-medium">entrepreneurship, resilience</span>, and
        building real-world products. Afterward, I focused on{" "}
        <span className="font-medium">modern web development</span> and now work
        with <span className="font-medium">React, Next.js, Express, TypeScript, Node.js, PostgreSQL, MongoDB, and Supabase</span>.
        I also freelance, building and delivering full-stack web applications.{" "}
        <span className="italic">My favorite project</span> is{" "}
        <span className="font-medium">PicMe AI</span>—an AI image generation
        platform where users can create and train models on their own images.{" "}
        <span className="italic">What excites me most</span> is building
        powerful products from code. I&apos;m open to a{" "}
        <span className="font-medium">full-stack developer role</span> where I
        can keep growing and shipping.
      </p>
      <p className="md:text-lg leading-8 md:!leading-9 ">
        <span className="italic">Outside tech</span>, I enjoy{" "}
        <span className="font-medium">singing</span> and the{" "}
        <span className="font-medium">gym</span>. I&apos;m always curious and
        like learning new things.
      </p>
    </motion.section>
  );
};
