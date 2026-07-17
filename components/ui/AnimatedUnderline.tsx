"use client";

import { useState } from "react";

interface AnimatedUnderlineProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function AnimatedUnderline({
  children,
  className = "",
  href,
  onClick,
  isActive,
}: AnimatedUnderlineProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ease-out"
        style={{
          width: hovered || isActive ? "100%" : "0%",
        }}
      />
    </a>
  );
}
