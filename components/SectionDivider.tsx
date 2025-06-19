"use client";

import React from "react";
import { motion } from "framer-motion";

export const SecitonDivider = () => {
  return (
    <motion.div
      className="w-1 h-24 bg-gray-300 dark:bg-gray-300/20 my-24 rounded-full hidden sm:block"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.125,
      }}
    ></motion.div>
  );
};
