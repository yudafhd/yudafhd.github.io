# Friendster-style Portfolio

A single-page, Friendster-era inspired portfolio that lists projects immediately on load. Built with Tailwind via CDN, minimal custom CSS, and simple client-side logic.

## Run on localhost

1) Start a static server (Python 3):
```bash
python3 -m http.server 8000
```

2) Open in your browser:
- http://localhost:8000

Notes:
- Tailwind CSS is loaded via CDN. No build step is required.

## Project structure

- Structure and markup: [index.html](index.html)
- Tiny Tailwind-safe overrides: [css/style.css](css/style.css)
- Client logic (fetch, render, search/filter/sort): [js/main.js](js/main.js)
- Project data: [data/projects.json](data/projects.json)
- Assets (profile photo, icons, thumbnails): [assets/](assets/)

## Behavior

- Landing page shows the profile hero and the Projects grid by default.
- Search, tag filters (AND logic), and sort (newest/oldest) operate entirely on the client.
- Thumbnails:
  - If an image is missing or fails to load, a retro SVG placeholder will be shown automatically by existing fallback logic in [js/main.js](js/main.js).
- Accessibility:
  - Semantic landmarks (header, main, sections), skip link, and ARIA attributes are present.
  - Tag chips are keyboard-accessible and expose pressed state.

## Deploy

Since Tailwind is loaded via CDN and everything is static, you can host these files on any static host. No bundling/build is necessary.