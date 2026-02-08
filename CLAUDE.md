# CLAUDE.md — Oxide Landing Page

## Project Overview

This is the landing page for **Oxide IDE** — a modern, terminal-native IDE built in Rust by Galvanic Labs. The landing page is a static site that introduces the project and directs visitors to the GitHub repository.

- **Website domain:** oxideide.dev
- **GitHub org:** github.com/galvaniclabs
- **Main repo:** github.com/galvaniclabs/oxide
- **License:** MIT (this repo), Apache 2.0 (Oxide IDE)

## Tech Stack

- **Framework:** Astro (static site generation)
- **Styling:** Tailwind CSS v3
- **Language:** TypeScript
- **Font:** JetBrains Mono (monospace only, no exceptions)
- **Package Manager:** npm
- **Deployment:** Static hosting (Cloudflare Pages)

React is available as a dependency but not currently active. Enable in `astro.config.mjs` when interactive islands are needed.

## Project Structure

```
oxide-landing/
├── src/
│   ├── components/      # Astro components (.astro)
│   ├── layouts/         # Layout template (Layout.astro)
│   ├── pages/           # index.astro (single page)
│   └── styles/          # global.css (Tailwind directives + custom animations)
├── public/              # Static assets (favicon)
├── astro.config.mjs     # Astro + Tailwind integration
├── tailwind.config.mjs  # Custom colors (oxide.*), fonts, shadows
├── tsconfig.json
└── package.json
```

## Color Palette (Tailwind: `oxide.*`)

```
--bg:            #0C1220   oxide-bg          (deep navy-black)
--bg-surface:    #131A2A   oxide-surface     (card/terminal backgrounds)
--bg-titlebar:   #1A2236   oxide-titlebar    (terminal title bars)
--bg-hover:      #1C2640   oxide-hover       (hover states)
--accent:        #5B9BD5   oxide-accent      (primary blue)
--accent-bright: #7BB3E8   oxide-accent-bright (hover/emphasis blue)
--green:         #28C840   oxide-green       (terminal green dot, success)
--red:           #E8583B   oxide-red         (terminal red dot, sparse)
--yellow:        #FFBD2E   oxide-yellow      (terminal yellow dot, sparse)
--text:          #E6EDF3   oxide-text        (primary text)
--text-mid:      #8B949E   oxide-text-mid    (secondary text)
--text-dim:      #3D4550   oxide-text-dim    (very muted)
--border:        #1E2A3A   oxide-border      (borders)
```

No orange/red as primary accent. Blue only. Green/yellow/red are for terminal dots and small accents.

## Page Sections

1. **Nav** — Sticky, backdrop blur. `oxide.` left, `GitHub →` pill right.
2. **Hero** — Left-aligned headline "THE IDE YOUR AI AGENT CAN OPERATE." with animated terminal demo.
3. **Problem → Solution** — Two columns. "Terminal editors gate-keep 50M developers."
4. **LLM Differentiator** — IDE Toolbox Protocol tool list. Most important section after hero.
5. **Feature Cards** — Three cards: No modal editing / VSCode extensions / Written in Rust.
6. **Architecture** — Terminal window showing layered architecture diagram.
7. **Tech Strip** — Single line of tech names.
8. **CTA** — "Built in the open." with GitHub + Founding doc buttons.
9. **Footer** — Copyright + GitHub link.

## Animations

- **Terminal typing:** `oxide .` types char-by-char, output fades, agent lines stagger (500ms apart)
- **Scroll reveal:** `.reveal` class — IntersectionObserver adds `.visible` (fade in + 20px slide up)
- **Cursor blink:** CSS `@keyframes blink` on `.cursor-blink`
- **Button hover:** Blue glow on primary, border fill on outline

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server at localhost:4321
npm run build        # Build to ./dist/
npm run preview      # Preview production build
```

## Design Rules

- **Monospace everything.** JetBrains Mono only. No other fonts.
- **No marketing fluff.** No "revolutionary", "game-changing", "supercharge", "unleash".
- **No paragraphs > 3 lines.** Short, punchy text.
- **No emoji.** No stock images. No illustrations.
- **Minimal JS.** Zero client-side framework. Only vanilla JS for terminal animation + scroll reveal.
- **Performance first.** Current build: 13KB CSS, ~1KB inlined JS, zero client bundles.

## Links

- GitHub: https://github.com/galvaniclabs/oxide
- Founding Doc: https://github.com/galvaniclabs/oxide/blob/main/FOUNDING_DOC.md
