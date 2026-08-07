# anurag629.github.io

Personal site for Anurag Verma. Single page, statically exported, deployed to
GitHub Pages.

**Live:** [anurag629.github.io](https://anurag629.github.io)

## Design

The page is a terminal session. A window title bar at the top, a tmux-style
status line at the bottom that tracks real scroll position, and every section
introduced by the command that would produce it — `neofetch`, `ls -la ~/repos`,
`git log --graph --oneline`, `gh pr list --author @me --state merged`.

Amber phosphor rather than the usual green. DEC VT220 and Wyse terminals
shipped amber, it reads warmer, and it clears WCAG AA at 10:1 where a bright
green does not without going neon. Scanlines are a fixed low-contrast overlay,
disabled in light mode and under `prefers-reduced-motion`.

Everything is monospace: Martian Mono as the display accent, IBM Plex Mono for
the rest. The identity block reuses the chip ASCII from Anurag's own GitHub
profile README. A light theme ships behind the toggle in the title bar and
persists in `localStorage`.

Every foreground/background pair in both themes clears WCAG AA.

## Data

Nothing countable is hard-coded. `scripts/fetch-github.mjs` runs before every
build and pulls repositories, stars, followers and the contribution calendar
into `src/data/generated/github.json`, which is committed and doubles as the
fallback if the API is unreachable. `scripts/generate-assets.mjs` then derives
the OG image, favicons, `llms.txt` and `sitemap.xml` from that same data, so
they cannot drift apart.

Hand-written content lives in `src/data/profile.ts`. Two rules apply there:

- Every pull request linked from the site was verified as merged and authored
  by `anurag629` before it was listed.
- Work in private repositories is described, never linked. No private
  repository names appear anywhere in the build output.

## Run it

```bash
npm install
npm run dev
```

Open <http://localhost:3111>.

```bash
npm run build
```

`prebuild` fetches GitHub data and regenerates assets, then `next build`
exports to `out/`. Set `GITHUB_TOKEN` to include the contribution calendar,
which needs the GraphQL API — without it the build still succeeds and keeps the
committed snapshot's numbers.

```bash
npm run check
```

Runs `tsc --noEmit` and `next lint`.

## Structure

```
scripts/
├── fetch-github.mjs      # build-time GitHub data → generated/github.json
└── generate-assets.mjs   # OG image, favicons, llms.txt, sitemap
src/
├── app/
│   ├── globals.css       # design tokens, both themes, focus + motion rules
│   ├── layout.tsx        # fonts, metadata, JSON-LD
│   └── page.tsx          # section order
├── components/           # one file per section, plus Prompt / Reveal / Section / StatusBar
└── data/
    ├── profile.ts        # hand-written content
    └── generated/        # fetched at build time
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and
publishes `out/` to GitHub Pages.

## Licence

MIT.
