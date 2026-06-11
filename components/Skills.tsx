"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const skillCategories = [
  { name: "Frontend", skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "TailwindCSS", "Framer Motion"] },
  { name: "Backend", skills: ["Node.js", "Express.js", "Python", "Java", "REST APIs"] },
  { name: "Database", skills: ["PostgreSQL", "MongoDB", "Supabase", "ArangoDB"] },
  { name: "Tools", skills: ["Git", "Docker"] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 200, damping: 15 },
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section ref={ref} id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading number="02" title="Skills & Technologies" sectionName="Skills" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark"
            >
              <span className="font-mono text-xs tracking-widest uppercase text-accent dark:text-accent-muted">
                {category.name}
              </span>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-4 flex flex-wrap gap-2"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="px-3 py-1.5 text-sm rounded-lg bg-accent/10 text-accent dark:text-accent-muted font-medium border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <span className="text-sm text-muted-light dark:text-muted-dark font-mono">
            {skills.length} technologies and counting
          </span>
        </motion.div>
      </div>
    </section>
  );
}
