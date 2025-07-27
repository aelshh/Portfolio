import picmeAi from "@/public/picmeAi.png";

import React from "react";
import { CgWorkAlt } from "react-icons/cg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Picme.AI",
    description:
      "Picme AI lets users generate images from prompts and train custom AI image models with their own photos —all through a sleek, easy-to-use platform.",
    tags: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "ShadCn UI",
      "Magic UI",
      "Supabase",
      "Stripe",
      "Replicate API",
      "LoRA trainer",
      "Resend",
    ],
    projectUrl: "https://picme-ai.vercel.app/",

    imageUrl: picmeAi,
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Prisma",
  "Git",
  "Tailwind",
  "Turborepo",
  "Supabase",
  "WebSockets",
  "ws",
  "PostgreSQL",
  "SQL",
  "Replicate",
  "Stripe",
] as const;

export const experiencesData = [
  {
    title: "Freelance Web Designer & Webflow Specialist",
    location: "Lucknow, Uttar Pradesh, India",
    description:
      "Freelanced as a web designer and Webflow specialist, building custom mockups and demos for potential clients, and later transitioned to web development for deeper technical growth.",
    icons: React.createElement(CgWorkAlt),
    date: "Oct,024 - Feb,2025",
  },
];
