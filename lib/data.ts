import picmeAi from "@/public/picmeAi.png";
import bombayVogue from "@/public/bombayVogue.png";
import trendzila from "@/public/trendzila.png";

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCode } from "react-icons/fa";

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
    title: "PicMe AI",
    description:
      "AI image generation platform that lets users generate images from prompts and train custom AI image models with their own photos—all through a sleek, easy-to-use interface.",
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
  // {
  //   title: "Bombay Vogue",
  //   description:
  //     "Bombay Vogue is a premium men's apparel e-commerce store built on Shopify, offering stylish and high-quality clothing for the modern man. ",
  //   tags: [
  //     "Shopify",
  //     "E-commerce",
  //     "Menswear",
  //     "Fashion",
  //     "Apparel Store",
  //     "SEO",
  //     "UI/UX",
  //     "Tailwind CSS v4",
  //     "ShadCn UI",
  //     "Responsive Design",
  //   ],
  //   projectUrl: "https://bombayvogue.in/",
  //   imageUrl: bombayVogue,
  // },
  // {
  //   title: "Trendzila",
  //   description:
  //     "Trendzila is a modern men's apparel e-commerce store delivering trendy, affordable, and stylish clothing for the fashion-forward man. Built on Shopify, ",
  //   tags: [
  //     "Shopify",
  //     "E-commerce",
  //     "Menswear",
  //     "Fashion",
  //     "Trendy Apparel",
  //     "Affordable Clothing",
  //     "SEO",
  //     "UI/UX",
  //     "Responsive Design",
  //   ],
  //   projectUrl: "https://trendzila.in/",
  //   imageUrl: trendzila,
  // },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "TailwindCSS",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "ArangoDB",
  "Git",
  "Docker",
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    location: "Gopluto.ai · Gurgaon, Haryana",
    description:
      "Developed frontend pages and UI improvements; built backend APIs and connected them with frontend systems; debugged and resolved backend issues; integrated third-party services such as Fireflies AI for automated meeting transcription and note generation; worked with ArangoDB (graph database) for managing relational data structures.",
    icons: React.createElement(CgWorkAlt),
    date: "Sep 2025 – Jan 2026",
  },
  {
    title: "Freelance Full Stack Developer",
    location: "DCverse · Remote",
    description:
      "Develop full-stack web applications for clients; build responsive frontend interfaces using modern frameworks; develop backend APIs and integrate them with frontend systems; maintain and improve existing web applications.",
    icons: React.createElement(FaCode),
    date: "Jan 2026 – Present",
  },
];
