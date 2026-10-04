---
title: "This Portfolio Website"
description: "A dark-first, glassmorphic developer portfolio built with Astro 7 and Tailwind CSS v4. Zero-JS baseline, zero-FOUC dark mode, and content-collection-driven project case studies."
publishDate: 2026-09-27
featured: true
order: 4
tags: ["Astro", "Tailwind", "JavaScript"]
githubUrl: "https://github.com/matthewwilliamberces-droid/Portfolio"
liveUrl: "https://matthewberces.dev"
role: "Developer & Designer"
impact: "Static build in under 1.4s. Zero JavaScript shipped to the browser by default. Strict TypeScript — 0 errors, 0 warnings on astro check."
---

## Overview

This portfolio site is itself a project — a demonstration that I can build clean, fast, and visually distinctive static sites using the Astro framework.

### Architecture Highlights

- **Zero-JS by default**: Every component renders to static HTML. No React, no Vue shipped to the browser.
- **Zero-FOUC dark mode**: A blocking inline script in `<head>` applies the `dark` class before the first paint, preventing white flash on reload.
- **Tailwind v4 CSS-first tokens**: Design tokens defined in `@theme` using OKLCH color space for perceptually uniform glassmorphic palette.
- **Content Collections with Zod**: Project case studies and experience entries are validated at build time via Zod schemas — no runtime schema mismatch possible.
- **Asymmetric Bento Grid**: Project cards use CSS grid spanning to create visual hierarchy without JavaScript.

### Tech Stack

- **Framework**: Astro 7
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Deployment**: Hetzner VPS + Coolify ([matthewberces.dev](https://matthewberces.dev))
- **Type-checking**: `@astrojs/check` — strict TypeScript
- **SEO**: Auto-generated sitemap + RSS feed via `@astrojs/sitemap`
