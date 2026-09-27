"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import RevealSection from "@/components/ui/RevealSection";
import SectionHeading from "@/components/SectionHeading";
import SkillMarquee from "@/components/ui/SkillMarquee";

const frontendSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "TailwindCSS",
  "Framer Motion",
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "Python",
  "Java",
  "REST APIs",
];

const databaseSkills = ["PostgreSQL", "MongoDB", "Supabase", "ArangoDB"];

const devopsSkills = ["Git", "Docker"];

const skillCategories = [
  {
    name: "Frontend",
    count: frontendSkills.length,
    gradient: "from-primary/20 to-primary/5",
    borderColor: "border-primary/20",
    glow: "shadow-primary/10",
    level: 92,
    tools: ["React", "Next.js", "Tailwind", "Framer Motion"],
  },
  {
    name: "Backend",
    count: backendSkills.length,
    gradient: "from-accent/10 to-accent/5",
    borderColor: "border-accent/20",
    glow: "shadow-accent/10",
    level: 84,
    tools: ["Node.js", "Express", "REST APIs"],
  },
  {
    name: "Database",
    count: databaseSkills.length,
    gradient: "from-purple-500/10 to-purple-500/5",
    borderColor: "border-purple-500/20",
    glow: "shadow-purple-500/10",
    level: 80,
    tools: ["PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    name: "DevOps",
    count: devopsSkills.length,
    gradient: "from-blue-500/10 to-blue-500/5",
    borderColor: "border-blue-500/20",
    glow: "shadow-blue-500/10",
    level: 70,
    tools: ["Git", "Docker"],
  },
];

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      id="skills"
      className="relative py-24 sm:py-32 overflow-hidden scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          number="03"
          title="Skills & Technologies"
          monoLabel={`${skills.length} technologies and counting`}
        />

        <div className="mt-16 space-y-6">
          <div>
            <span className="block font-mono text-[10px] tracking-[0.3em] uppercase text-text-muted mb-3">
              Frontend
            </span>
            <SkillMarquee
              skills={frontendSkills}
              direction="left"
              duration={25}
            />
          </div>
          <div>
            <span className="block font-mono text-[10px] tracking-[0.3em] uppercase text-text-muted mb-3">
              Backend &amp; Tools
            </span>
            <SkillMarquee
              skills={[...backendSkills, ...databaseSkills, ...devopsSkills]}
              direction="right"
              duration={35}
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => (
            <RevealSection key={cat.name} delay={0.1 + i * 0.1}>
              <div
                className={`h-full p-6 rounded-2xl glass-card bg-gradient-to-br ${cat.gradient} border ${cat.borderColor} hover:shadow-lg ${cat.glow} transition-all duration-300 group`}
              >
                <div className="flex items-baseline justify-between">
                  <div className="text-4xl font-display font-bold text-gradient-violet group-hover:scale-110 transition-transform duration-300 origin-left">
                    {cat.count}
                  </div>
                  <span className="font-mono text-[10px] text-text-muted">
                    {cat.name.toUpperCase()}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-text-muted">Proficiency</span>
                    <span className="text-primary-light">{cat.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cat.level}%` }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {cat.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 text-[11px] rounded-md border border-border text-text-secondary font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}