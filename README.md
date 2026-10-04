# Matthew Berces — Personal Developer Portfolio

> **Production URL:** [https://matthewberces.dev](https://matthewberces.dev)  
> **Tech Stack:** Astro 7, Tailwind CSS v4, TypeScript, Content Collections

A high-performance, dark-first personal portfolio and case study engine built for showcasing full-stack web engineering projects (Laravel 11, Livewire 3, Filament v3, Astro).

---

## ⚡ Highlights & Architecture

- **Zero-JS by Default**: Static HTML rendering with zero client-side JavaScript shipped on initial load.
- **Dual-Theme Engine (Dark-First)**: Blocking inline script in `<head>` applies theme tokens via OKLCH CSS variables, eliminating Flash of Unstyled Content (FOUC).
- **Type-Safe Content Collections**: Case studies and work history validated at build time via Zod schemas (`src/content.config.ts`).
- **High-Agency Design System**: Asymmetrical typography, deep negative space, custom grid hierarchy, and editorial layout powered by Tailwind CSS v4 `@theme`.
- **Automated Feeds & SEO**: Dynamic sitemap (`@astrojs/sitemap`) and RSS feed (`@astrojs/rss`) generated during static compilation.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Astro 7](https://astro.build/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| **Typography** | Newsreader (Serif), Geist (Sans), Geist Mono |
| **Validation** | Zod (Astro Content Collections) |
| **Type Checking** | TypeScript + `@astrojs/check` |

---

## 💻 Local Development

### Prerequisites
- Node.js 22+
- npm 10+

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Server live at http://localhost:4321

# Type diagnostics
npx astro check

# Production static build
npm run build
```

---

## 📄 License

Proprietary Software. All rights reserved.
