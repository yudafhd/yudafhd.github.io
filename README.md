# Yuda Fahrudin — Portfolio

Modernized Friendster-inspired portfolio rebuilt with Next.js 16, TypeScript, and Tailwind CSS v4 (JIT). The site now runs as an App Router project with both the homepage and resume delivered as first-class routes.

## Requirements

- Node.js 18.18+ or 20+
- npm 10+

## Getting started

Install dependencies (only required once):

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 to browse the site. Edits inside `src/` hot-reload automatically.

## Available scripts

| Script       | Description                          |
| ------------ | ------------------------------------ |
| `npm run dev`   | Start Next.js in development mode     |
| `npm run build` | Create an optimized production build  |
| `npm run start` | Serve the production build locally    |
| `npm run lint`  | Run ESLint with the Next.js config    |

## Project structure

- `src/app/page.tsx` — Landing page with profile and interactive project explorer
- `src/app/resume/page.tsx` — Resume route mirroring the downloadable PDF
- `src/components/project-explorer.tsx` — Client component handling search/sort/grid rendering
- `src/data/projects.ts` — Strongly typed project catalogue consumed by the explorer
- `public/` — Favicons, manifest, profile photo, and downloadable PDF (`/Yuda_Resume_Oktober_2025.pdf`)
- `next.config.ts` — Remote image configuration for external project thumbnails

## Features

- Client-side search with debounced filtering and newest/oldest sorting
- Automatic technology cloud and Friendster-style project cards with SVG fallbacks
- Remote image support for portfolio screenshots (Vercel, Google CDN, custom domains)
- Resume page styled for on-screen reading with print-friendly tweaks; download button links to the bundled PDF
- Shared Tailwind theme tokens providing the original friend-era colors, shadows, and gradients

## Data updates

Project entries live in `src/data/projects.ts`. Update the array to add, edit, or remove items. Each entry supports:

- `title`, `description`, `technologies`
- Optional `liveUrl`, `repoUrl`, `image`, `date`, `tags`

## Deployment notes

Run `npm run build` before deploying. The generated `.next/` output can be served via Vercel, Netlify, or any environment that supports Next.js 16. Public assets resolve from the app root, so no additional path adjustments are required.
