# Agent Instructions

This repository is a Next.js application using the App Router and TypeScript.

## Exclude

To optimize token usage, please prioritize omitting the following files and directories from analysis or context unless explicitly necessary:

- `pnpm-lock.yaml`
- `.next/`
- `supabase/` (unless you specifically need to work on database logic)
- `postcss.config.mjs`
- `eslint.config.js`

## Coding Guidelines

- **Strict TypeScript:** Always use strict TypeScript for any new code or modifications. Avoid `any` types and ensure proper type definitions and interfaces.
- **Next.js App Router:** Respect and follow the Next.js App Router (`app/` directory) structure and conventions when proposing or implementing changes. Use Server Components by default and add `'use client'` only when client-side interactivity or hooks are necessary.
