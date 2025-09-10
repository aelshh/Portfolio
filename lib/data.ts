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
  {
    title: "Bombay Vogue",
    description:
      "Bombay Vogue is a premium men's apparel e-commerce store built on Shopify, offering stylish and high-quality clothing for the modern man. ",
    tags: [
      "Shopify",
      "E-commerce",
      "Menswear",
      "Fashion",
      "Apparel Store",
      "SEO",
      "UI/UX",
      "Tailwind CSS v4",
      "ShadCn UI",
      "Responsive Design",
    ],
    projectUrl: "https://bombayvogue.in/",
    imageUrl: bombayVogue,
  },
  {
    title: "Trendzila",
    description:
      "Trendzila is a modern men's apparel e-commerce store delivering trendy, affordable, and stylish clothing for the fashion-forward man. Built on Shopify, ",
    tags: [
      "Shopify",
      "E-commerce",
      "Menswear",
      "Fashion",
      "Trendy Apparel",
      "Affordable Clothing",
      "SEO",
      "UI/UX",
      "Responsive Design",
    ],
    projectUrl: "https://trendzila.in/",
    imageUrl: trendzila,
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
  {
    title: "Web Developer",
    location: "Lucknow, Uttar Pradesh, India",
    description:
      "Working as a freelance Web Developer, specializing in building responsive, SEO-friendly websites and web applications using modern technologies like React, Next.js, Tailwind CSS, and Shopify. ",
    icons: React.createElement(FaCode), // from react-icons/fa
    date: "Feb, 2025 – Present",
  },
];
