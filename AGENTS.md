# Project Context for AI Agents

This repository is a Next.js application using React, TypeScript, and Tailwind CSS. It appears to be an interactive invitation site ("GRAN FACU AVENTURA").

## 🚫 AI Exclude (Token Optimization)

When using `list_files`, `grep`, or scanning the directory structure, the following paths and files **MUST BE EXCLUDED** to optimize token usage and avoid reading heavy, irrelevant, or auto-generated files:

- `node_modules/` (Dependencies)
- `.next/` (Next.js build artifacts)
- `out/`, `build/`, `dist/` (General build artifacts)
- `pnpm-lock.yaml` (Large lock file)
- `public/**/*.png`, `public/**/*.jpg`, `public/**/*.jpeg`, `public/**/*.gif`, `public/**/*.ico`, `public/**/*.webp`, `public/**/*.mp4`, `public/**/*.mp3`, `public/**/*.wav` (Heavy media files)
- `*.log` (Log files)
- `.git/` (Git metadata)

## 🛠️ Code Conventions & Instructions

When working on this repository, please adhere to the following guidelines:

1. **Framework & Architecture**:
   - This is a **Next.js** project using the **App Router** (`src/app/`). All new pages and layouts should follow the App Router conventions.
   - Use **React Server Components** by default, and only add `'use client'` directive at the top of the file when client-side interactivity (hooks, state, event listeners) is strictly necessary.

2. **Styling & UI**:
   - **Tailwind CSS** is the primary styling tool. Use Tailwind utility classes instead of writing custom CSS whenever possible.
   - The project uses a set of pre-built UI components based on **Radix UI** located in `src/components/ui/`. Reuse these components (e.g., `Button`, `Dialog`, `Card`) before creating new fundamental UI elements.

3. **Language & Typings**:
   - Write all code in **TypeScript** (`.ts`, `.tsx`).
   - Provide proper type definitions and interfaces for components and API responses. Avoid using `any`.

4. **Package Manager**:
   - Use **`pnpm`** for package management.
   - Do NOT use `npm` or `yarn`. Commands: `pnpm install`, `pnpm dev`, `pnpm build`.

5. **Linting & Formatting**:
   - The project is configured with ESLint and Prettier.
   - Before submitting changes or commits, ensure you format and lint the code using `pnpm format` and `pnpm lint`.

6. **Backend/Database**:
   - The project includes `@supabase/supabase-js`, indicating Supabase is used as the backend/database solution. Keep this in mind when dealing with data fetching or authentication.

7. **Theme & Assets**:
   - Theme colors and custom fonts (Luckiest Guy, Fredoka, Press Start 2P) are configured in `src/app/layout.tsx`. Keep the styling consistent with this "Nivel 9" interactive mission/adventure theme.

## ✅ Pre-commit / Verification steps

Before finalizing any plan and submitting, verify that:

- You have compiled the code or run a build check if possible.
- Linting (`pnpm lint`) passes.
- No type errors exist.

## 🎨 Visual Identity

- Use Tailwind classes and predefined variables from `src/styles.css` instead of hardcoded arbitrary hex values, `oklch`, or `rgba` variables (e.g., `bg-night`, `text-golden-coin`, `border-night`, etc.).
- Avoid using `style={{ ... }}` inline properties. Rely on Tailwind classes (`bg-card`, `text-card-foreground`, etc.).
- Enforce the use of standard UI design concepts by using the `voxel-card` and `voxel-btn` classes, along with proper modifier classes (like `voxel-btn-coin` or `voxel-btn-teddy`).
- Standard shadows should be defined with CSS variables mapped to standard classes (e.g. `shadow-[6px_6px_0_var(--color-teddy-brown)]` or `drop-shadow-[4px_4px_0_var(--color-night)]`), replacing raw values (`#000`, `rgba(0,0,0,0.3)`, etc.).
