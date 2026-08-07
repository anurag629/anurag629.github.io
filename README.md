# anurag629.github.io

Personal site for Anurag Verma. Single page, statically exported, deployed to
GitHub Pages.

**Live:** [anurag629.github.io](https://anurag629.github.io)

## Design

"Instrument panel" — cold near-black with an amber signal colour, hairline
rules and corner-ticked frames. The reference is a routing console rather than
a terminal, because routing and metering is what the work actually is. The
stack section is rendered as a provider routing table for the same reason.

Type is Martian Mono for display, IBM Plex Mono for data and IBM Plex Sans for
prose. A light "blueprint" theme ships behind the toggle in the header; the
choice persists in `localStorage`.

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
├── components/           # one file per section, plus Rail / Reveal / Section
└── data/
    ├── profile.ts        # hand-written content
    └── generated/        # fetched at build time
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and
publishes `out/` to GitHub Pages.

## Licence

MIT.
