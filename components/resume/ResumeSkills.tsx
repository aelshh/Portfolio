"use client";

import { motion } from "motion/react";
import { skillCategories } from "@/lib/data";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, string> = {
  Frontend: "🎨",
  Backend: "⚙️",
  Database: "🗄️",
  "DevOps & Tools": "🛠️",
};

export default function ResumeSkills() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className="space-y-8"
    >
      <div>
        <p className="font-mono text-sm text-primary mb-2">EXPERTISE</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary">Skills & Tools</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <motion.div
            key={category}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className={cn(
              "glass-card rounded-2xl p-6",
              "hover:border-primary/20 transition-all duration-300",
              "print:bg-white print:border-neutral-300 print:shadow-none"
            )}
          >
            <h3 className="text-lg font-display font-bold text-text-primary mb-4 print:text-neutral-900 flex items-center gap-2">
              <span aria-hidden="true">{categoryIcons[category] || "🔹"}</span>
              {category}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <HoverBorderGradient
                  key={skill}
                  containerClassName="rounded-full"
                  className="text-xs font-mono px-3 py-1.5 bg-surface rounded-full print:text-neutral-700"
                  as="span"
                  duration={1.5}
                >
                  {skill}
                </HoverBorderGradient>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
