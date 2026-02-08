# Oxide IDE — Landing Page

The official landing page for [Oxide IDE](https://github.com/galvaniclabs/oxide), a modern IDE that runs in your terminal.

## About Oxide

Oxide is a terminal-native IDE built in Rust that brings modern IDE features to the terminal without compromise:

- **Familiar editing** — VSCode/IntelliJ keybindings, normal insert-mode, full mouse support. No modal editing required.
- **VSCode extensions** — 50,000+ extensions work through a Node.js extension host with full API compatibility.
- **LLM-native** — AI agents are first-class IDE citizens. They can set breakpoints, stage git hunks, run tests, and navigate code — not just read files.
- **Built in Rust** — Fast startup, minimal memory footprint, no Electron. Works seamlessly over SSH.

## Tech Stack

- [Astro](https://astro.build/) — Static site generation
- [React](https://react.dev/) — Interactive components
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [TypeScript](https://www.typescriptlang.org/) — Type safety

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/      # Astro (.astro) and React (.tsx) components
├── layouts/         # Page layout templates
├── pages/           # Route pages
└── styles/          # Global styles
public/              # Static assets (images, fonts, favicons)
```

## Links

- **Oxide IDE repo:** [github.com/galvaniclabs/oxide](https://github.com/galvaniclabs/oxide)
- **Website:** [oxideide.dev](https://oxideide.dev)
- **Organization:** [Galvanic Labs](https://github.com/galvaniclabs)

## License

MIT — see [LICENSE](./LICENSE) for details.
