"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export interface HoverBorderGradientProps
  extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
  children: React.ReactNode;
  [key: string]: unknown;
}

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  onMouseEnter,
  onMouseLeave,
  ...props
}: HoverBorderGradientProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = useCallback(
    (currentDirection: Direction): Direction => {
      const directions: Direction[] = ["TOP", "RIGHT", "BOTTOM", "LEFT"];
      const currentIndex = directions.indexOf(currentDirection);
      const nextIndex = clockwise
        ? (currentIndex + 1) % directions.length
        : (currentIndex - 1 + directions.length) % directions.length;
      return directions[nextIndex];
    },
    [clockwise],
  );

  const transitionDuration =
    duration && duration > 10 ? duration / 1000 : (duration ?? 1);
  const intervalMs = transitionDuration * 1000;

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, intervalMs);
      return () => clearInterval(interval);
    }
  }, [hovered, intervalMs, rotateDirection]);

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, var(--color-primary) 0%, rgba(139, 92, 246, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, var(--color-primary) 0%, rgba(139, 92, 246, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, var(--color-primary) 0%, rgba(139, 92, 246, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, var(--color-primary) 0%, rgba(139, 92, 246, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.16% at 50% 50%, var(--color-primary) 0%, rgba(139, 92, 246, 0) 100%)";

  return (
    <Tag
      onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
        setHovered(true);
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event: React.MouseEvent<HTMLElement>) => {
        setHovered(false);
        onMouseLeave?.(event);
      }}
      className={cn(
        "relative flex rounded-full content-center bg-surface/20 hover:bg-surface/10 transition duration-500 overflow-visible p-px items-center justify-center text-center",
        containerClassName,
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto relative bg-surface px-4 py-2 rounded-[inherit] text-text-primary z-10",
          className,
        )}
      >
        {children}
      </div>
      <motion.div
        className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: transitionDuration }}
      />
      <div className="bg-surface absolute z-1 inset-[2px] rounded-[100px]" />
    </Tag>
  );
}

export default HoverBorderGradient;
