"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

export const Intro = () => {
  return (
    <section className=" mb-28 text-center  max-w-[50rem] sm:mb-0">
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
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
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
      <motion.p
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        className="mb-10 text-2xl sm:text-4xl !leading-[1.5] mt-5 font-medium  px-4"
      >
        <span className="font-bold"> Hello I'm Adarsh. </span> I'm a{" "}
        <span className="font-bold"> full-stack web developer </span> with{" "}
        <span className="font-bold"> 1 year </span> of experience. I enjoy
        building <span className="italic">sites & apps</span> . My focus is
        {"  "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>
      <div className="flex justify-center gap-2 px-4 items-center flex-col sm:flex-row text-lg font-medium">
        <Link
          href="#contact"
          className="flex items-center  bg-gray-900 px-7 py-3  text-white rounded-full gap-2"
        >
          Contact me here <BsArrowRight />{" "}
        </Link>
        <a
          href="#"
          className=" flex items-center  bg-white px-7 py-3   rounded-full gap-2"
        >
          Download CV <HiDownload />{" "}
        </a>
        <a
          href="#"
          className=" flex items-center  bg-white p-4 text-gray-700 rounded-full gap-2"
        >
          <BsLinkedin />
        </a>
        <a
          href="#"
          className=" flex items-center  bg-white p-4 text-gray-700 
          text-[1.1rem] rounded-full gap-2"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};
