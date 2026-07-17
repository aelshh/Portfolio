"use client";

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
  },
  {
    name: "Backend",
    count: backendSkills.length,
    gradient: "from-accent/10 to-accent/5",
    borderColor: "border-accent/20",
  },
  {
    name: "Database",
    count: databaseSkills.length,
    gradient: "from-purple-500/10 to-purple-500/5",
    borderColor: "border-purple-500/20",
  },
  {
    name: "DevOps",
    count: devopsSkills.length,
    gradient: "from-blue-500/10 to-blue-500/5",
    borderColor: "border-blue-500/20",
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
              Backend & Tools
            </span>
            <SkillMarquee
              skills={[...backendSkills, ...databaseSkills, ...devopsSkills]}
              direction="right"
              duration={35}
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => (
            <RevealSection key={cat.name} delay={0.1 + i * 0.1}>
              <div
                className={`p-6 rounded-2xl glass-card hover:border-primary/20 transition-all duration-300 group text-center`}
              >
                <div className="text-4xl font-display font-bold text-gradient-violet group-hover:scale-110 transition-transform duration-300">
                  {cat.count}
                </div>
                <div className="mt-2 text-sm text-text-secondary font-mono">
                  {cat.name}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
