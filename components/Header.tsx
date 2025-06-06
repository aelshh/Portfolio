"use client";
import { links } from "@/lib/data";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="z-[999] relative flex   ">
      <motion.div
        className=" w-full h-[4.5rem] fixed top-0 bg-white/80 rounded-none left-1/2  border border-white/40   shadow-lg shadow-black/[0.03]  backdrop-blur-[0.5rem]  sm:top-6 sm:w-[36rem] sm:h-[2.5rem] sm:rounded-full "
        initial={{ y: -20, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed top-[0.15rem] py-2  flex h-12 sm:h-[initial] left-1/2 transform -translate-x-1/2  sm:py-0 sm:top-[1.7rem]">
        <ul className="flex items-center justify-center  w-[22rem] flex-wrap sm:flex-nowrap gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center"
              key={link.hash}
              initial={{ opacity: 0, y: -20 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className="w-full flex items-center justify-center hover:text-gray-950 transition px-3 py-1.5"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
