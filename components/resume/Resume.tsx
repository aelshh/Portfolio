import {
  experiencesData,
  projectsData,
  skills,
  educationData,
  certificationsData,
} from "@/lib/data";

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-6">
      <h2 className="text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-violet-700 border-b border-neutral-300 pb-1.5 mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Resume() {
  return (
    <main className="min-h-screen py-28 sm:py-32 px-4 sm:px-8">
      <div className="mx-auto max-w-[820px] bg-white text-neutral-900 rounded-2xl shadow-2xl shadow-black/30 dark:shadow-black/60 p-8 sm:p-12 print:shadow-none print:rounded-none print:p-0">
        {/* Header */}
        <header className="border-b border-neutral-200 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
                Adarsh Chaudhary
              </h1>
              <p className="mt-1 text-sm font-medium text-neutral-600">
                Full-Stack Developer — React · Next.js · Node.js · TypeScript
              </p>
            </div>
            <div className="text-xs text-neutral-600">
              <div>Lucknow, Uttar Pradesh, India</div>
              <div>hello@adarshchaudhary.in</div>
              <div>+91 8707479934</div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-neutral-500">
            <a href="https://github.com/aelshh" className="hover:text-violet-700">
              github.com/aelshh
            </a>
            <a
              href="https://www.linkedin.com/in/adarsh-chaudhary-369429278/"
              className="hover:text-violet-700"
            >
              linkedin.com/in/adarsh-chaudhary
            </a>
            <span>adarshchaudhary.in</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main column */}
          <div className="md:col-span-2">
            <ResumeSection title="Summary">
              <p className="text-[13px] leading-relaxed text-neutral-700">
                Full-stack developer who founds ideas and ships them. Building
                production-grade web applications with React, Next.js, Node.js
                and TypeScript — including AI products, SaaS platforms and
                e-commerce stores for clients worldwide. Currently working at
                Gopluto.ai and available for freelance &amp; full-time roles.
              </p>
            </ResumeSection>

            <ResumeSection title="Experience">
              <div className="space-y-4">
                {experiencesData.map((exp) => (
                  <div key={exp.title + exp.date}>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[13px] font-bold text-neutral-900">
                        {exp.title}
                      </h3>
                      <span className="shrink-0 text-[11px] font-mono text-neutral-500">
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-[12px] text-violet-700 font-medium mb-1.5">
                      {exp.location}
                    </p>
                    <p className="text-[12px] leading-relaxed text-neutral-600">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Featured Projects">
              <div className="space-y-2.5">
                {projectsData.map((project) => (
                  <div key={project.title}>
                    <h3 className="text-[13px] font-bold text-neutral-900">
                      {project.title}
                      <span className="ml-2 font-mono text-[11px] font-normal text-neutral-500">
                        {project.projectUrl.replace(/^https?:\/\//, "")}
                      </span>
                    </h3>
                    <p className="text-[12px] leading-relaxed text-neutral-600">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </ResumeSection>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <ResumeSection title="Skills">
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-[11px] font-mono rounded-md border border-neutral-300 text-neutral-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Education">
              <div className="space-y-3">
                {educationData.map((edu) => (
                  <div key={edu.degree}>
                    <h3 className="text-[12px] font-bold text-neutral-900 leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-[11px] text-neutral-600">{edu.institution}</p>
                    <p className="text-[11px] font-mono text-neutral-500">{edu.duration}</p>
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Certifications">
              <div className="space-y-2.5">
                {certificationsData.map((cert) => (
                  <div key={cert.title}>
                    <h3 className="text-[12px] font-bold text-neutral-900 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-[11px] text-neutral-600">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </ResumeSection>
          </div>
        </div>

        <footer className="mt-6 border-t border-neutral-200 pt-4 text-center text-[11px] font-mono text-neutral-400">
          Adarsh Chaudhary · adarshchaudhary.in · Generated from /resume
        </footer>
      </div>
    </main>
  );
}