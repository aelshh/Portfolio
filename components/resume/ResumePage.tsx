"use client";

import ResumeHero from "@/components/resume/ResumeHero";
import ResumeStats from "@/components/resume/ResumeStats";
import ResumeExperience from "@/components/resume/ResumeExperience";
import ResumeSkills from "@/components/resume/ResumeSkills";
import ResumeProjects from "@/components/resume/ResumeProjects";
import ResumeEducation from "@/components/resume/ResumeEducation";
import ResumeActions from "@/components/resume/ResumeActions";

export default function ResumePage() {
  return (
    <main className="min-h-screen py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-16 sm:space-y-24">
        {/* Hero — Name, Role, Status, Contacts */}
        <ResumeHero />

        {/* Stats — Animated achievement counters */}
        <ResumeStats />

        {/* Experience — Scroll-linked timeline */}
        <ResumeExperience />

        {/* Skills — Categorized grid with hover glow */}
        <ResumeSkills />

        {/* Projects — Featured work with hover cards */}
        <ResumeProjects />

        {/* Education & Certifications */}
        <ResumeEducation />
      </div>

      {/* Floating actions */}
      <ResumeActions />

      {/* Print-only footer */}
      <footer className="hidden print:block mt-8 pt-4 border-t border-neutral-200 text-center text-[11px] font-mono text-neutral-400">
        Adarsh Chaudhary · adarshchaudhary.in · Generated from /resume
      </footer>
    </main>
  );
}
