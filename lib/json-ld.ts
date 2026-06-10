import { SITE_URL, AUTHOR_NAME, AUTHOR_ROLE, socialLinks, skillKeywords } from "@/lib/seo";
import { projectsData } from "@/lib/data";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: AUTHOR_NAME,
    url: SITE_URL,
    jobTitle: AUTHOR_ROLE,
    email: "hello@adarshchaudhary.in",
    telephone: "+918707479934",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "India",
    },
    sameAs: [socialLinks.linkedin, socialLinks.github],
    knowsAbout: skillKeywords,
    worksFor: [
      {
        "@type": "Organization",
        name: "DCverse",
        description: "Freelance Full Stack Developer",
      },
      {
        "@type": "Organization",
        name: "Gopluto.ai",
        description: "Full Stack Developer",
      },
    ],
    image: `${SITE_URL}/picofme.png`,
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Adarsh Chaudhary | Full-Stack Web Developer",
    description:
      "Freelance full-stack web developer based in India. Specializing in Next.js, React, TypeScript, Node.js, and modern web applications.",
    author: { "@id": `${SITE_URL}/#person` },
  };
}

export function generateProjectSchema(
  project: (typeof projectsData)[number],
  index: number
) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/#project-${index}`,
    name: project.title,
    description: project.description,
    url: project.projectUrl,
    keywords: project.tags.join(", "),
    author: { "@id": `${SITE_URL}/#person` },
  };
}

export function generateBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/#projects` },
      { "@type": "ListItem", position: 3, name: "Contact", item: `${SITE_URL}/#contact` },
    ],
  };
}

export function generateHomeSchema() {
  const projectSchemas = projectsData.map((p, i) => generateProjectSchema(p, i));

  return {
    "@context": "https://schema.org",
    "@graph": [
      generatePersonSchema(),
      generateWebSiteSchema(),
      generateBreadcrumbSchema(),
      ...projectSchemas,
    ],
  };
}
