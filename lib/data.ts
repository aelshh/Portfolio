import picmeAi from "@/public/picmeAi.png";
import aura from "@/public/aura.png";
import cloneOs from "@/public/clone.png";
import deowi from "@/public/deowi.png";

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
    name: "Education",
    hash: "#education",
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
    title: "Aura",
    description:
      "Aura is dopamine detox app that helps you to reduce your dopamine levels and improve your mental health with gamifying your habits with identity based levels system",
    tags: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "ShadCn UI",
      "Magic UI",
      "Supabase",

      "Framer Motion",
    ],
    projectUrl: "https://aura.adarshchaudhary.in/",
    imageUrl: aura,
  },
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
  {
    title: "Clone OS",
    description:
      "Clone OS is an AI video creation app where users generate short movies and AI videos from prompts—bringing ideas to life fast.",
    tags: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "ShadCn UI",
      "Magic UI",
      "Node.js",
      "Express.js",
      "Razorpay",
      "Replicate API",
    ],
    projectUrl: "https://www.cloneos.io/",
    imageUrl: cloneOs,  
  },
  {
    title: "Deowi",
    description:
      "AI-powered content repurposing platform. Upload a podcast, meeting recording, or lecture, and Deowi automatically generates a complete marketing kit — blog post, newsletter, Twitter/X hooks, LinkedIn posts, chaptered timeline, and SRT subtitles — all from a single recording. Features a three-stage pipeline (transcribe via Deepgram Nova-3, AI generation via OpenRouter/Nvidia Nemotron Ultra 550B, save) running on background BullMQ workers with retry and exponential backoff.",
    tags: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Deepgram Nova-3",
      "BullMQ",
      "Upstash Redis",
      "Docker",
      "AWS ECS",
      "Framer Motion",
    ],
    projectUrl: "https://deowi.tech",
    imageUrl: deowi,
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
    date: "Sep 2025 – Present",
  },
  {
    title: "Freelance Full Stack Developer",
    location: "DCverse · Remote",
    description:
      "Develop full-stack web applications for clients; build responsive frontend interfaces using modern frameworks; develop backend APIs and integrate them with frontend systems; maintain and improve existing web applications.",
    icons: React.createElement(FaCode),
    date: "Jan 2026 – Apr 2026",
  },
];

export const educationData = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "AKTU — Placeholder University, Lucknow",
    location: "Lucknow, Uttar Pradesh, India",
    description:
      "Focused on software engineering fundamentals, data structures, operating systems, and web technologies. Built several full-stack projects and led college tech events.",
    duration: "2021 – 2025",
  },
  {
    degree: "Higher Secondary (Science)",
    institution: "Placeholder Senior Secondary School",
    location: "Lucknow, Uttar Pradesh, India",
    description:
      "Specialized in Physics, Chemistry and Mathematics with a strong record in computer science.",
    duration: "2019 – 2021",
  },
];

export const certificationsData = [
  {
    title: "Meta Front-End Developer",
    issuer: "Meta · Coursera",
    year: "2024",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  {
    title: "MongoDB Associate Developer",
    issuer: "MongoDB University",
    year: "2024",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
  },
];

export const achievementsData = [
  { value: 20, suffix: "+", label: "Projects Shipped" },
  { value: 4, suffix: "+", label: "AI Products" },
  { value: 8, suffix: "+", label: "Freelance Clients" },
  { value: 3, suffix: "+", label: "Years Coding" },
];

export const skillCategories = {
  Frontend: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "TailwindCSS", "Framer Motion"],
  Backend: ["Node.js", "Express.js", "REST APIs", "Python", "Java"],
  Database: ["PostgreSQL", "MongoDB", "Supabase", "ArangoDB"],
  "DevOps & Tools": ["Git", "Docker"],
} as const;
