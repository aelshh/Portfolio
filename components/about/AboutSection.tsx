"use client";

import { motion } from "framer-motion";
import { Container, SectionDivider } from "@/components/ui/BrutalistLayout";
import { VinylPlayer } from "@/components/about/VinylPlayer";

const bioBullets = [
  "Full-stack engineer with a founder mindset — founded my first startup at 19 and shipped production-grade software ever since, spanning AI products, SaaS, and performant web apps.",
  "Deep in modern web architecture and real-time backend systems: React, Next.js (App Router), Node.js, TypeScript, Supabase, PostgreSQL, and Docker.",
  "Creator of platforms like Deowi (AI-powered content repurposing with Deepgram & BullMQ workers), Aura (gamified habit leveling system), PicMe AI (custom LoRA model trainer), and Clone OS.",
  "Currently engineering frontend interfaces and backend graph pipelines with ArangoDB and automated AI meeting intelligence at Gopluto.ai.",
  "Available for ambitious freelance builds, contract collaborations, and full-time software engineering roles worldwide.",
];

export function AboutSection() {
  return (
    <section id="about" className="relative w-full">
      <SectionDivider number="01" title="About" />

      <Container className="px-6 py-7 sm:px-8 space-y-6">
        {/* Bio Bullets */}
        <div className="space-y-3.5">
          {bioBullets.map((bullet, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="flex items-start gap-3 text-[14.5px] leading-relaxed text-[var(--muted)]"
            >
              <span className="text-[var(--soft)] font-mono text-sm select-none mt-0.5">
                •
              </span>
              <p>{bullet}</p>
            </motion.div>
          ))}
        </div>

        {/* Embedded Interactive Vinyl Player */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="pt-2"
        >
          <VinylPlayer />
        </motion.div>
      </Container>
    </section>
  );
}
