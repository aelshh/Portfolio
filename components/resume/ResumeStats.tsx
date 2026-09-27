"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { Meteors } from "@/components/ui/meteors";
import { achievementsData } from "@/lib/data";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <span
      ref={ref}
      className="font-display text-4xl sm:text-5xl font-extrabold text-gradient-violet print:bg-none print:text-neutral-900 print:[background-clip:unset] print:[-webkit-background-clip:unset] print:[-webkit-text-fill-color:currentColor]"
    >
      0{suffix}
    </span>
  );
}

export default function ResumeStats() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {achievementsData.map((stat, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="glass-card rounded-2xl p-6 relative overflow-hidden hover:border-primary/25 hover:shadow-[0_0_40px_rgba(139,92,246,0.12)] transition-all duration-300 print:shadow-none print:border-neutral-300 print:bg-white"
        >
          <div className="relative z-10">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <p className="text-sm font-mono text-text-muted mt-2">{stat.label}</p>
          </div>
          <div className="absolute inset-0 pointer-events-none print:hidden">
            <Meteors number={4} />
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}
