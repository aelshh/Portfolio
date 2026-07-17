# Project Rules for OpenCode AI

You are an expert front-end engineer building a highly polished, modern web application.

## Tech Stack
- Next.js (App Router), React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion.

## Design Rules (Strict)
- **Aesthetic:** High-energy, sleek, premium. Default to dark mode.
- **Visuals:** Use subtle glowing radial gradients, glassmorphism (`backdrop-blur`), and crisp translucent borders (`border-white/10`).
- **Layout:** Never use generic vertical stacks. Use Bento-box grids, asymmetric feature grids, and strict whitespace hierarchy.
- **Interactions:** Ensure all buttons and cards have subtle hover states and micro-interactions.

## Execution Rules
- Always use the Plan agent first to propose a layout before writing code.
- Write complete, functional React components. No `// TODO` placeholders.
- Use strict TypeScript; avoid `any`.