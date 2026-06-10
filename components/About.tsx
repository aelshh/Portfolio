"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { HiLocationMarker, HiMail, HiCode, HiMusicNote, HiHeart } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";

const quickFacts = [
  { icon: HiLocationMarker, label: "Location", value: "Lucknow, Uttar Pradesh, India" },
  { icon: HiMail, label: "Email", value: "hello@adarshchaudhary.in" },
  { icon: HiCode, label: "Status", value: "Available for freelance & full-time roles" },
  { icon: HiMusicNote, label: "Hobby", value: "Singing" },
  { icon: HiHeart, label: "Vibe", value: "Gym & learning" },
];

export function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading number="01" title="About Me" sectionName="About" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-3 space-y-4 text-muted-light dark:text-muted-dark leading-relaxed"
          >
            <p>
              I founded my first startup at 19; it ran for about a year before
              closing. That experience taught me{" "}
              <span className="text-text-light dark:text-text-dark font-medium">
                entrepreneurship, resilience
              </span>
              , and building real-world products.
            </p>
            <p>
              Afterward, I focused on{" "}
              <span className="text-text-light dark:text-text-dark font-medium">
                modern web development
              </span>{" "}
              and now work with React, Next.js, Express, TypeScript, Node.js,
              PostgreSQL, MongoDB, and Supabase. As a freelance full-stack developer
              based in Lucknow, India, I build and deliver production-grade web applications
              for clients worldwide.
            </p>
            <p>
              My favorite project is{" "}
              <span className="text-text-light dark:text-text-dark font-medium">
                PicMe AI
              </span>{" "}
              — an AI image generation platform where users can create and train
              models on their own images.
            </p>
            <p>
              What excites me most is building powerful products from code. I&apos;m
              open to a{" "}
              <span className="text-text-light dark:text-text-dark font-medium">
                full-stack developer role or freelance projects
              </span>{" "}
              where I can keep growing and shipping.
            </p>
            <p className="text-sm italic">
              Outside tech, I enjoy singing and the gym. Always curious, always
              learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-2 space-y-3"
          >
            <span className="font-mono text-xs tracking-widest uppercase text-accent dark:text-accent-muted">
              Quick Facts
            </span>
            <div className="space-y-2">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark"
                >
                  <fact.icon className="w-4 h-4 text-accent shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-muted-light dark:text-muted-dark block">
                      {fact.label}
                    </span>
                    <span className="text-sm text-text-light dark:text-text-dark font-medium block truncate">
                      {fact.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
