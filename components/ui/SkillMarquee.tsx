"use client";

interface SkillMarqueeProps {
  skills: readonly string[];
  direction?: "left" | "right";
  duration?: number;
}

export default function SkillMarquee({
  skills,
  direction = "left",
  duration = 30,
}: SkillMarqueeProps) {
  const doubled = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden py-3">
      <div
        className={`flex whitespace-nowrap gap-3 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ "--duration": `${duration}s` } as React.CSSProperties}
      >
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium border border-primary/15 bg-primary/5 text-primary-light dark:text-primary-light whitespace-nowrap transition-all duration-300 hover:bg-primary/10 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-[0_0_16px_rgba(139,92,246,0.25)] cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
