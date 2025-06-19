"use client";

import Image from "next/image";
import picofme from "@/public/picofme.png";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

import { useSectionInView } from "@/lib/hooks";
import useActiveSectionContext from "@/context/ActiveSectionContext";

export const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className=" mb-28 text-center  max-w-[50rem] sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              className="rounded-full h-25 w-24 object-cover object-top border-white border-[0.35rem] shadow-xl"
              src={picofme}
              width="192"
              height="192"
              priority={true}
              quality={90}
              alt="Portrait of Adarsh"
            ></Image>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.7,
              stiffness: 125,
              delay: 0.1,
            }}
            className="text-4xl absolute bottom-0  right-0"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        className="mb-10 text-2xl sm:text-4xl !leading-[1.5] mt-5   px-4"
      >
        <span className="font-bold"> Hello I'm Adarsh. </span> I'm a{" "}
        <span className="font-bold"> full-stack web developer </span> with{" "}
        <span className="font-bold"> 1 year </span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is
        {"  "}
        <span className="underline">React (Next.js)</span>
      </motion.h1>
      <motion.div
        className="flex justify-center gap-2 px-4 items-center flex-col sm:flex-row text-lg font-medium"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          href="#contact"
          className=" group flex items-center  bg-gray-900 px-7 py-3  text-white rounded-full gap-2   hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition  translate-y-0.5" />{" "}
        </Link>
        <a
          href="/CV.pdf"
          download
          className=" group flex items-center  bg-white px-7 py-3   rounded-full gap-2 hover:scale-110 focus:scale-110 active:scale-105 transition border borderBlack dark:bg-white/10 dark:text-white/80  "
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/adarsh-chaudhary-369429278/"
          target="_blank"
          className=" flex items-center  bg-white p-4 text-gray-700 rounded-full gap-2 hover:text-gray-950 hover:scale-[1.15] focus:scale-110 active:scale-105 transition  dark:bg-white/10 dark:text-white/80"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/aelshh"
          target="_blank"
          className=" flex items-center  bg-white p-4 text-gray-700 
          text-[1.1rem] rounded-full gap-2  hover:text-gray-950 hover:scale-[1.15] focus:scale-110 active:scale-105 transition  dark:bg-white/10 dark:text-white/80"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
};
