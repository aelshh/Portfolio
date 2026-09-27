"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  date?: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-4xl pb-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-24"
          >
            <div className="sticky z-40 flex w-full max-w-xs self-start items-center top-32 md:flex-col md:top-28 md:max-w-none">
              <div className="absolute left-3 z-40 flex h-10 w-10 items-center justify-center rounded-full glass-card border-primary/40">
                <div className="h-4 w-4 rounded-full border border-primary/50 bg-primary/30 p-2 shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
              </div>
              <h3 className="hidden text-xl font-display font-bold text-text-secondary md:block md:pl-20 md:text-3xl">
                {item.title}
              </h3>
              <p className="hidden text-xs font-mono text-text-muted md:block md:pl-20 md:text-sm">
                {item.date}
              </p>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-1 block text-2xl font-display font-bold text-text-secondary md:hidden">
                {item.title}
              </h3>
              <p className="mb-4 block font-mono text-xs text-text-muted md:hidden">
                {item.date}
              </p>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] [background-image:linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.12)_10%,rgba(255,255,255,0.12)_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-primary via-accent to-transparent"
          />
        </div>
      </div>
    </div>
  );
};