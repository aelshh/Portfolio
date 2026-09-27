"use client";

import { Container, SectionDivider, useMechanicalSound } from "@/components/ui/BrutalistLayout";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiGit,
  SiDocker,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const skillsByCategory: {
  category: string;
  items: SkillItem[];
}[] = [
  {
    category: "Frontend Architecture",
    items: [
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Framer Motion", Icon: SiFramer },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss3 },
    ],
  },
  {
    category: "Backend & Systems",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "Python", Icon: SiPython },
      { name: "Java", Icon: FaJava },
      { name: "REST APIs", Icon: TbApi },
    ],
  },
  {
    category: "Data & Storage",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Supabase", Icon: SiSupabase },
      { name: "ArangoDB", Icon: FaDatabase },
    ],
  },
  {
    category: "DevOps & Tooling",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "Docker", Icon: SiDocker },
    ],
  },
];

export function SkillsMatrix() {
  const playClick = useMechanicalSound();

  return (
    <section id="skills" className="relative w-full">
      <SectionDivider number="05" title="Skills & Technologies" />

      <Container className="px-6 py-6 sm:px-8 space-y-7">
        {skillsByCategory.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: groupIdx * 0.05 }}
            className="space-y-3"
          >
            <h3 className="font-mono text-[11px] font-bold tracking-[0.15em] text-[var(--soft)] uppercase">
              {"// "}{group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => {
                const Icon = skill.Icon;
                return (
                  <div
                    key={skill.name}
                    onClick={playClick}
                    className="group flex cursor-default items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 font-mono text-[12px] text-[var(--muted)] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--fg)] hover:bg-[var(--fg)] hover:text-[var(--bg)] cursor-pointer"
                  >
                    <Icon className="size-3.5 transition-colors group-hover:text-[var(--bg)] text-[var(--soft)]" />
                    <span className="font-medium tracking-tight">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </Container>
    </section>
  );
}
