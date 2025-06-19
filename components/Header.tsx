"use client";
import { links } from "@/lib/data";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import useActiveSectionContext from "@/context/ActiveSectionContext";

export const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="z-[999] relative flex   ">
      <motion.div
        className=" w-full h-[4.5rem] fixed top-0 bg-white/80 rounded-none left-1/2  border border-white/40   shadow-lg shadow-black/[0.03]  backdrop-blur-[0.5rem]  sm:top-6 sm:w-[36rem] sm:h-[2.5rem] sm:rounded-full dark:bg-gray-950/75 dark:border-black/70  "
        initial={{ y: -20, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed top-[0.15rem] py-2  flex h-12 sm:h-[initial] left-1/2 transform -translate-x-1/2  sm:py-0 sm:top-[1.7rem]">
        <ul className="flex items-center justify-center  w-[22rem] flex-wrap sm:flex-nowrap gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:gap-5 ">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ opacity: 0, y: -20 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  "w-full flex items-center justify-center hover:text-gray-950  transition px-3 py-1.5 dark:text-gray-500 hover:dark:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200! ":
                      activeSection === link.name,
                  }
                )}
              >
                {link.name}
              </Link>
              {activeSection === link.name && (
                <motion.span
                  className="absolute inset-0 bg-gray-100 -z-1 rounded-full dark:bg-gray-800  "
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
