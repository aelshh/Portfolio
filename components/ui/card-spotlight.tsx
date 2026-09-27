"use client";

import React, { useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

export interface CardSpotlightProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  radius?: number;
  color?: string;
  className?: string;
}

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "rgba(139, 92, 246, 0.15)",
  className,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
  ...props
}: CardSpotlightProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    onMouseMove?.(e);
  }

  function handleMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
    setIsHovered(true);
    onMouseEnter?.(e);
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
    setIsHovered(false);
    onMouseLeave?.(e);
  }

  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, ${color}, transparent 80%)`;

  return (
    <div
      className={cn(
        "group/spotlight relative rounded-2xl glass-card p-6 overflow-hidden",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl"
        style={{
          background,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default CardSpotlight;
