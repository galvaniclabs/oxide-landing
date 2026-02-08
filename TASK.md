# Oxide Landing Page — Claude Code Build Prompt

Build a single-page static landing page for Oxide IDE (oxideide.dev). One HTML file with inline CSS and JS. No framework. No build step. Deployable by dragging to Cloudflare Pages.

## Design References

Study these two sites for inspiration:
- **shoo.dev** — Brutalist, massive monospace type, black bg, minimal, code as content
- **zed.dev** — Dark editor palette, blue accents, feature cards, code screenshot as proof

Our direction: shoo.dev's confidence and bold typography + our dark blue terminal palette. The page should feel like a terminal that became a website.

## The Rules

1. **Minimal text.** Every sentence must earn its place. If you can cut a word, cut it.
2. **Fast to digest.** A developer should understand what Oxide is within 5 seconds of landing.
3. **Monospace everything.** JetBrains Mono from Google Fonts. No other fonts.
4. **No orange/red.** Primary accent is blue (#5B9BD5). Green, yellow, red are secondary for terminal dots and small accents only.
5. **No walls of text.** Short punchy lines. Not paragraphs.
6. **Respect the developer.** No marketing fluff. No "revolutionary". No "powered by AI". Matter-of-fact.

## Color Palette

```
--bg:          #0C1220       (deep navy-black)
--bg-surface:  #131A2A       (card/terminal backgrounds)
--bg-titlebar: #1A2236       (terminal title bars)
--bg-hover:    #1C2640       (hover states)
--accent:      #5B9BD5       (primary — blue)
--accent-bright: #7BB3E8     (hover/emphasis blue)
--accent-glow: rgba(91,155,213,0.12)
--green:       #28C840       (terminal green, success states)
--red:         #E8583B       (terminal red, sparse use)
--yellow:      #FFBD2E       (terminal yellow, sparse use)
--text:        #E6EDF3       (primary text)
--text-mid:    #8B949E       (secondary text)
--text-dim:    #3D4550       (very muted)
--border:      #1E2A3A       (borders)
```

## Typography

- Font: "JetBrains Mono" (Google Fonts), monospace fallback
- Hero headline: clamp(3rem, 7vw, 6.5rem), weight 800, uppercase, tight tracking (-0.04em)
- Body: ~1rem, weight 400
- Everything monospace. No exceptions.

## Page Sections

### 1. Nav (sticky, blur backdrop)
- Left: `oxide.` (the dot is blue)
- Right: `GitHub →` pill link
- Thin bottom border. That's it. No other nav items.

### 2. Hero (full viewport)

**Left-aligned. Not centered.**

Headline (big, uppercase, bold):
```
THE IDE
YOUR AI AGENT
CAN OPERATE.
```
"AI AGENT" in blue. Rest in white.

Tagline (2 lines max, secondary color):
```
A terminal-native IDE where LLMs set breakpoints,
inspect variables, and run tests — not just edit files.
Familiar keybindings. VSCode extensions. Written in Rust.
```
Bold/highlight: "LLMs set breakpoints, inspect variables, and run tests"

Two buttons:
- `Star on GitHub ★` — filled blue
- `Founding doc →` — outlined

Below buttons: animated terminal window showing:
```
❯ oxide .
✓ lsp ready · 14 extensions · rust-analyzer

agent debugging auth.rs:47
  ↳ ide.debug.inspect session_token → None
  ↳ ide.editor.applyFix ✓ test passing
```

The terminal types out `oxide .`, then shows the output, then staggers in the 3 LLM agent lines. This is the product demo — it shows the LLM operating the IDE. Keep it to exactly 3 agent lines. Not more.

Terminal styling: dark bg-surface, border, rounded corners, traffic light dots (red/yellow/green), title bar with "oxide", subtle box-shadow with blue glow.

### 3. Problem → Solution (one section, not two)

Two columns.

Left (large text, ~2.2rem, bold):
```
Terminal editors
gate-keep 50M
developers.
```

Right (short, secondary color):
```
Modal editing. Leader keys. 50 plugins
before you're productive.

Oxide: Ctrl+S saves. Click places cursor.
Your extensions just work. Zero config.
```

Keep this tight. No more than 4-5 lines on the right.

### 4. The LLM Differentiator

This is the most important section after the hero. Give it weight.

Small label above: `THE LLM ADVANTAGE` (uppercase, letter-spaced, blue)

Headline (~2.2rem):
```
Your AI agent is blind.
We gave it eyes.
```

Below — NOT a paragraph. A styled terminal/tool panel showing the IDE Toolbox Protocol tools:

```
IDE TOOLBOX PROTOCOL (MCP-compatible)

→ ide.debug.setBreakpoint     file, line
→ ide.debug.inspectVariable   name → value
→ ide.diff.stageHunk          file, hunk
→ ide.test.run                suite → pass/fail
→ ide.git.status              → modified files
→ ide.diagnostics.list        → errors, warnings
→ ide.editor.goToDefinition   symbol → location
```

Style this as a dark surface card with monospace text, left-aligned arrows in blue, tool names in accent-bright, descriptions in dim text. It should look like an API reference, not marketing copy.

One line below the panel (secondary text):
`Any MCP-compatible agent. Claude Code. OpenCode. Aider. Bring your own.`

### 5. Three Feature Cards (horizontal row)

Compact. Each card has a 3px left border accent and a title + one line.

Card 1 (blue border):
**No modal editing.**
Ctrl+S, Ctrl+Z, Ctrl+P, F5, F12. Full mouse. Zero learning curve.

Card 2 (green border):
**VSCode extensions.**
50,000+ extensions. Language servers, debuggers, linters. They just work.

Card 3 (yellow border):
**Written in Rust.**
Starts in ms. Million-line files. Single binary. No Electron.

### 6. Architecture (terminal window)

Small label: `ARCHITECTURE`

A styled terminal window showing the layered architecture:

```
TUI Frontend          Editor · File Tree · Terminal · Debug · Git · LLM Agent
IDE Toolbox Protocol  MCP-compatible · ide.editor.* · ide.debug.* · ide.test.*
Core Services         LSP · DAP · Tree-sitter · gitoxide · tokio
Extension Host        Rust ↔ Node.js · JSON-RPC · VSCode API shim
```

Each layer name colored (blue, yellow, green, red). Details in dim text. Rows separated by subtle borders.

### 7. Tech Strip

Single centered line, all dim:
`rust · ratatui · tree-sitter · tokio · gitoxide · lsp · dap · mcp`

### 8. CTA

Centered:
Headline: `Built in the open.` ("open." in blue)
One line: `Apache 2.0. Star, read, contribute.`
Same two buttons as hero (centered this time).

### 9. Footer
One line. Left: `© 2026 Galvanic Labs`. Right: `GitHub`

## Animations

- **Hero terminal typing:** `oxide .` types character by character, then output fades in, then 3 LLM lines stagger in (500ms apart). Pure JS + CSS.
- **Scroll reveal:** Each section fades in + 20px slide up on scroll (IntersectionObserver). Subtle, fast (0.5s).
- **Button hover:** Blue button gets subtle glow. Outline button fills slightly.
- **Terminal cursor blink:** CSS animation.
- **Nothing else.** No parallax. No scroll hijack. No heavy animations.

## Responsive

- Desktop: full layout as described
- Tablet (<900px): stack two-column sections, reduce hero font
- Mobile (<600px): single column, hero text ~2.6rem, buttons full-width, cards stack

## Links

- GitHub: https://github.com/galvaniclabs/oxide
- Founding Doc: https://github.com/galvaniclabs/oxide/blob/main/FOUNDING_DOC.md

## What NOT to Do

- No React/Next/Astro. Pure HTML/CSS/JS.
- No npm. No node_modules. No build step.
- No Inter, Roboto, Arial, or any non-monospace font.
- No "coming soon", "beta", or apologetic language.
- No stock images. No illustrations. No emoji.
- No cookie banners. No analytics.
- No orange or red as primary accent. Blue only.
- No paragraphs longer than 3 lines.
- No smooth-scroll hijacking.
- No AI hype words: "revolutionary", "game-changing", "supercharge", "unleash".
- No repeating the same point twice across sections.

## Tone

Terse. Technical. Confident. Every word earns its place. Reads like a senior engineer's personal site, not a SaaS landing page.

## Output

Single file: `index.html` with all CSS in `<style>` and all JS in `<script>`. Nothing else needed.