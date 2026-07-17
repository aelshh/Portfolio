# Project Rules for OpenCode AI

You are an expert front-end engineer building a highly polished, modern web application.

## Tech Stack
- Next.js (App Router), React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion.

## Design Rules (Strict)
- **Aesthetic:** High-energy, sleek, premium. Default to dark mode.
- **Visuals:** Use subtle glowing radial gradients, glassmorphism (`backdrop-blur`), and crisp translucent borders (`border-white/10`).
- **Layout:** Never use generic vertical stacks. Use Bento-box grids, asymmetric feature grids, and strict whitespace hierarchy.
- **Interactions:** Ensure all buttons and cards have subtle hover states and micro-interactions.
- **Theming:** Support both Light and Dark modes. Default dynamically to the user's system preferences using `next-themes`.
- **Styling Strategy:** Use paired semantic classes for all structural elements to ensure proper contrast swapping between modes.
- **Borders & Depth:** Use ultra-thin, translucent borders for structural division. Apply soft depth shadows in light mode, and subtle glassmorphic blurs with faint inner glows in dark mode.
- **Premium Layouts:** Avoid standard vertical stacks. Prioritize asymmetric grid layouts (like Bento boxes) with a clear hierarchy of whitespace.
- **Micro-Interactions:** Ensure all interactive elements (buttons, cards, links) have fast, fluid hover states and transition animations.

## Execution Rules
- Always use the Plan agent first to propose a layout before writing code.
- Write complete, functional React components. No `// TODO` placeholders.
- Use strict TypeScript; avoid `any`.