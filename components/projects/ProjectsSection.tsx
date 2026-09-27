"use client";

import { useState } from "react";
import { Container, SectionDivider, useMechanicalSound } from "@/components/ui/BrutalistLayout";
import { ProjectCard, ProjectItem } from "@/components/projects/ProjectCard";
import { Search, X, Layers, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const enrichedProjects: ProjectItem[] = [
  {
    title: "Deowi",
    description:
      "AI-powered content repurposing platform. Upload any podcast or lecture to automatically generate a complete marketing kit — blog post, newsletter, Twitter hooks, and chaptered timeline.",
    engineeringDetails:
      "Three-stage pipeline: automated audio transcription via Deepgram Nova-3, generation via OpenRouter/Nvidia Nemotron Ultra 550B, orchestrated by BullMQ workers on Upstash Redis with exponential retry backoff, running on AWS ECS Docker containers.",
    tags: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS",
      "Supabase",
      "Deepgram",
      "BullMQ",
      "Upstash Redis",
      "Docker",
    ],
    projectUrl: "https://deowi.tech",
    githubUrl: "https://github.com/aelshh",
    imageUrl: "/deowi.png",
    year: "2026",
    category: "Fullstack",
  },
  {
    title: "Aura",
    description:
      "Gamified dopamine detox web app that helps users master daily focus and habit loops through an identity-based leveling system and minimal analytics dashboard.",
    engineeringDetails:
      "Custom habit state machine built on Supabase real-time subscriptions, gamification xp calculations, Framer Motion interactive cards, and high-performance server components.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Supabase", "Framer Motion"],
    projectUrl: "https://aura.adarshchaudhary.in/",
    githubUrl: "https://github.com/aelshh",
    imageUrl: "/aura.png",
    year: "2025",
    category: "Fullstack",
  },
  {
    title: "PicMe AI",
    description:
      "AI image generation and model training platform. Users can create photorealistic artwork and train custom AI LoRA models using personal uploaded images.",
    engineeringDetails:
      "Integrated Replicate API LoRA model training pipeline, Stripe webhooks for credit balances, automated email notifications with Resend, and Supabase storage buckets.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Replicate API",
      "LoRA Trainer",
      "Stripe",
      "Supabase",
    ],
    projectUrl: "https://picme-ai.vercel.app/",
    githubUrl: "https://github.com/aelshh",
    imageUrl: "/picmeAi.png",
    year: "2025",
    category: "Fullstack",
  },
  {
    title: "Clone OS",
    description:
      "AI short movie and video creation studio. Generates dynamic video sequences from text prompts to bring storytelling concepts to life rapidly.",
    engineeringDetails:
      "Express.js backend coordinating video rendering jobs, Razorpay payment processing, prompt enhancement engine, and asynchronous state polling.",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "Razorpay",
      "Replicate API",
      "Tailwind CSS",
    ],
    projectUrl: "https://www.cloneos.io/",
    githubUrl: "https://github.com/aelshh",
    imageUrl: "/clone.png",
    year: "2025",
    category: "Fullstack",
  },
];

export function ProjectsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | "Frontend" | "Backend" | "Fullstack">("All");
  const playClick = useMechanicalSound();

  const filteredProjects = enrichedProjects.filter((p) => {
    if (activeCategory !== "All" && p.category !== activeCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <section id="projects" className="relative w-full">
      <SectionDivider
        number="03"
        title="Projects"
        aside={
          <button
            type="button"
            onClick={() => {
              playClick();
              setModalOpen(true);
            }}
            className="flex items-center gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--chip)] px-3 py-1.5 font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--soft)] transition-colors shadow-xs cursor-pointer"
          >
            <Layers className="size-3.5" />
            <span>View All ({enrichedProjects.length})</span>
          </button>
        }
      />

      <Container className="px-6 py-6 sm:px-8">
        {/* Primary 2-column Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {enrichedProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>

      {/* All Projects Modal */}
      <AnimatePresence>
        {modalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
            >
              <div className="relative bg-[var(--bg)] border border-[var(--line)] rounded-2xl max-w-[760px] w-full max-h-[85vh] p-6 sm:p-8 flex flex-col shadow-2xl pointer-events-auto overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[var(--line)]">
                  <div>
                    <h3 className="font-serif text-2xl tracking-wide text-[var(--fg)]">
                      All Projects
                    </h3>
                    <p className="font-mono text-[11px] text-[var(--soft)] mt-0.5">
                      Production web applications and AI tools
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      playClick();
                      setModalOpen(false);
                    }}
                    aria-label="Close modal"
                    className="grid size-8 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--soft)] transition-colors cursor-pointer"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                {/* Filter and Search Bar */}
                <div className="py-4 flex flex-col sm:flex-row items-center gap-3">
                  <div className="relative w-full sm:flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[var(--soft)]" />
                    <input
                      type="text"
                      placeholder="Search projects, technologies..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full rounded-lg border border-[var(--line)] bg-[var(--chip)] py-2 pl-9 pr-4 font-mono text-[12px] text-[var(--fg)] placeholder-[var(--soft)] outline-none transition-colors focus:border-[var(--soft)]"
                    />
                  </div>

                  <div className="flex gap-1 rounded-lg border border-[var(--line)] bg-[var(--chip)] p-0.5 w-full sm:w-auto">
                    {(["All", "Frontend", "Backend", "Fullstack"] as const).map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          playClick();
                          setActiveCategory(cat);
                        }}
                        className={`flex-1 sm:flex-none px-2.5 py-1 font-mono text-[11px] rounded transition-all cursor-pointer ${
                          activeCategory === cat
                            ? "bg-[var(--fg)] text-[var(--bg)] font-semibold"
                            : "text-[var(--muted)] hover:text-[var(--fg)]"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scrollable Project List */}
                <div className="flex-1 overflow-y-auto space-y-3 pr-1 hide-scrollbar">
                  {filteredProjects.map((p) => (
                    <div
                      key={p.title}
                      className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-4 text-left transition-colors hover:border-[var(--soft)]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-[15px] font-semibold text-[var(--fg)]">
                            {p.title}
                          </h4>
                          <p className="mt-1 text-[12.5px] leading-relaxed text-[var(--muted)]">
                            {p.description}
                          </p>
                        </div>
                        <span className="font-mono text-xs text-[var(--soft)] shrink-0">
                          {p.year}
                        </span>
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-3 border-t border-[var(--line)]/50 pt-3">
                        <div className="flex flex-wrap gap-1">
                          {p.tags.slice(0, 5).map((tag) => (
                            <span
                              key={tag}
                              className="rounded bg-[var(--chip)] px-2 py-0.5 font-mono text-[10px] text-[var(--muted)] border border-[var(--line)]/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <a
                          href={p.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={playClick}
                          className="flex items-center gap-1 font-mono text-[11px] text-[var(--soft)] hover:text-[var(--fg)] transition-colors"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="size-3" />
                        </a>
                      </div>
                    </div>
                  ))}

                  {filteredProjects.length === 0 && (
                    <div className="py-12 text-center font-mono text-xs text-[var(--soft)]">
                      No projects matched your criteria.
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
