"use client";

import { useRef } from "react";
import { gsap } from "gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  download?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  download,
  target,
  rel,
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const Tag = href ? "a" : "button";
  const props: Record<string, unknown> = {
    ref,
    className,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
    "aria-label": ariaLabel,
  };

  if (href) {
    props.href = href;
    props.target = target;
    props.rel = rel;
  }
  if (download !== undefined) props.download = download;

  return <Tag {...props}>{children}</Tag>;
}
