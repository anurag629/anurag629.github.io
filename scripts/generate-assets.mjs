/**
 * Generates every derived public asset: OG image, favicons, llms.txt, sitemap.
 *
 * The old site kept two hand-edited copies of llms.txt which had already
 * drifted apart, and a sitemap whose lastmod was a year stale. Both are
 * generated here now, from one source, so they cannot disagree.
 *
 * Runs after fetch-github.mjs, so github.json is current.
 */

import { readFile, writeFile, unlink, mkdir } from "fs/promises";
import { join } from "path";

const PUBLIC = join(process.cwd(), "public");
const SITE = "https://anurag629.github.io";
const today = new Date().toISOString().slice(0, 10);

const gh = JSON.parse(
  await readFile(join(process.cwd(), "src/data/generated/github.json"), "utf8"),
);

const VOID = "#0A0C10";
const PANEL = "#11141A";
const RULE = "#1E232C";
const TEXT = "#E8EBF0";
const DIM = "#7F8A9E";
const SIGNAL = "#FFA724";

/* ------------------------------------------------------------------ OG ---- */

// A terminal window, matching the page.
const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${VOID}"/>

  <!-- Title bar -->
  <rect x="0" y="0" width="1200" height="56" fill="${PANEL}"/>
  <rect x="0" y="55" width="1200" height="1" fill="${RULE}"/>
  <circle cx="34" cy="28" r="6" fill="none" stroke="#333b47" stroke-width="1.5"/>
  <circle cx="58" cy="28" r="6" fill="none" stroke="#333b47" stroke-width="1.5"/>
  <circle cx="82" cy="28" r="6" fill="none" stroke="#333b47" stroke-width="1.5"/>
  <text x="112" y="34" font-family="IBM Plex Mono, monospace" font-size="17" fill="${DIM}">anurag@github: ~/portfolio — zsh</text>

  <!-- Prompt -->
  <text x="64" y="128" font-family="IBM Plex Mono, monospace" font-size="26">
    <tspan fill="#4ade80">anurag</tspan><tspan fill="#67707f">@</tspan><tspan fill="#4ade80">github</tspan><tspan fill="#6fd3e7">:~</tspan><tspan fill="${SIGNAL}">$</tspan><tspan fill="${TEXT}" xml:space="preserve"> neofetch</tspan>
  </text>

  <!-- Chip -->
  <g font-family="IBM Plex Mono, monospace" font-size="21" fill="${SIGNAL}" xml:space="preserve">
    <text x="64" y="188">   ┌─────────────────┐</text>
    <text x="64" y="214">───┤ ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ ├───</text>
    <text x="64" y="240">───┤ █             █ ├───</text>
    <text x="64" y="266">───┤ █ A N U R A G █ ├───</text>
    <text x="64" y="292">───┤ █             █ ├───</text>
    <text x="64" y="318">───┤ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ├───</text>
    <text x="64" y="344">   └───────┬─┬───────┘</text>
  </g>

  <!-- Fields -->
  <g font-family="IBM Plex Mono, monospace" font-size="21">
    <text x="470" y="188"><tspan fill="${SIGNAL}" xml:space="preserve">role      · </tspan><tspan fill="${TEXT}">AI infra engineer · founder</tspan></text>
    <text x="470" y="219"><tspan fill="${SIGNAL}" xml:space="preserve">location  · </tspan><tspan fill="${TEXT}">Uttar Pradesh, India</tspan></text>
    <text x="470" y="250"><tspan fill="${SIGNAL}" xml:space="preserve">day job   · </tspan><tspan fill="${TEXT}">Full Stack Eng @ DataWars</tspan></text>
    <text x="470" y="281"><tspan fill="${SIGNAL}" xml:space="preserve">night job · </tspan><tspan fill="${TEXT}">Founder @ CODERCOPS</tspan></text>
    <text x="470" y="312"><tspan fill="${SIGNAL}" xml:space="preserve">focus     · </tspan><tspan fill="${TEXT}">llm gateways · agent memory</tspan></text>
    <text x="470" y="343"><tspan fill="${SIGNAL}" xml:space="preserve">django    · </tspan><tspan fill="${TEXT}">3 patches merged into core</tspan></text>
  </g>

  <!-- cat README.md -->
  <text x="64" y="418" font-family="IBM Plex Mono, monospace" font-size="26">
    <tspan fill="#4ade80">anurag</tspan><tspan fill="#67707f">@</tspan><tspan fill="#4ade80">github</tspan><tspan fill="#6fd3e7">:~</tspan><tspan fill="${SIGNAL}">$</tspan><tspan fill="${TEXT}" xml:space="preserve"> cat README.md</tspan>
  </text>
  <text x="64" y="464" font-family="IBM Plex Mono, monospace" font-size="30" fill="${TEXT}">I build the boring layer under the magic.</text>

  <!-- Portrait frame (photo composited below) -->
  <rect x="1000" y="392" width="136" height="136" fill="none" stroke="${RULE}"/>

  <!-- tmux status line -->
  <rect x="0" y="574" width="1200" height="56" fill="${PANEL}"/>
  <rect x="0" y="574" width="1200" height="1" fill="${RULE}"/>
  <rect x="0" y="574" width="150" height="56" fill="${SIGNAL}"/>
  <text x="34" y="609" font-family="IBM Plex Mono, monospace" font-size="20" fill="${VOID}">portfolio</text>
  <text x="180" y="609" font-family="IBM Plex Mono, monospace" font-size="20"><tspan fill="${SIGNAL}" xml:space="preserve">0:identity* </tspan><tspan fill="#67707f" xml:space="preserve">  1:now  2:stack  3:work  4:trace  5:oss</tspan></text>
  <text x="1136" y="609" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="20" fill="${DIM}">anurag629.github.io</text>
</svg>`;

/* -------------------------------------------------------------- favicon ---- */

/**
 * Solid amber tile with a dark monogram. Reads at 16px in a browser tab, and
 * the old emoji-on-white square glowed in dark tab bars.
 */
const iconSvg = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="${SIGNAL}"/>
  <path d="M14 20 L30 32 L14 44" fill="none" stroke="${VOID}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="34" y="41" width="18" height="6" rx="1" fill="${VOID}"/>
</svg>`;

/* -------------------------------------------------------------- llms.txt --- */

const llms = `# Anurag Verma

> Structured summary for AI assistants. Generated at build time on ${today}.

## Identity

- Name: Anurag Verma
- Role: AI infrastructure engineer and founder
- Current: Full Stack Engineer at DataWars; Founder at CODERCOPS
- Location: Uttar Pradesh, India
- Site: ${SITE}
- Email: akvermaav629@gmail.com

## Summary

Anurag Verma builds LLM infrastructure: multi-provider gateways, per-request
token metering, model routing, and persistent memory for coding agents. He
started in data science, led a nine-person team building machine learning
coursework at DataWars, then moved into the platform engineering underneath it.

He has three patches merged into Django itself, all in the test infrastructure.

## Current work

- CODERCOPS (founder) — chat-first hiring platform. Streaming agent over SSE,
  multi-model routing, prompt-injection filtering, confirmation-gated tools.
- cortex-bridge (author) — persistent memory for coding agents, backed by
  Cognee. Survives context compaction. TypeScript.
- LLM gateway (engineer, closed source) — one API across four providers with
  per-request billing, envelope-encrypted credentials and automatic failover.

## Experience

- Founder, CODERCOPS (2025 — present)
- Full Stack Engineer, DataWars (Jul 2025 — present). Built a browser-based
  coding environment running Python and JavaScript client-side; moved the
  platform off Docker-per-session execution, cutting operating cost ~35%.
- Data Science Team Lead, DataWars (Jun 2023 — Jul 2025). Led nine people
  building 300+ interactive ML labs; wrote a Pytest assertion library with
  150+ statistical checks.
- Freelance ML / Full Stack Developer, Upwork (Jul 2022 — Sep 2024).

## Open source

- django/django — 3 merged: #20931, #20781, #20776. One open: #20757.
- oppia/oppia — 5 merged (2021–2022), Python 3 migration.
- unifyai/ivy — 4 merged (2022–2023), linear algebra across backends.
- recodehive/awesome-github-profiles — 2 merged (2026).
- Orgs: FOSSASIA, EddieHubCommunity, Py-Contributors, recodehive.

Total merged pull requests: 1,492, of which 49 are in third-party
repositories. The remainder are DataWars and CODERCOPS work repositories.

## Stack

- LLM: OpenAI, Anthropic, AWS Bedrock, OpenRouter, MCP
- Backend: Python, Django, DRF, FastAPI, Celery
- Frontend: TypeScript, Next.js, React, Tailwind
- Data: PostgreSQL, pgvector, Redis, MongoDB, Neo4j
- Infra: Docker, Azure, AWS, Nginx, GitHub Actions
- ML: PyTorch, TensorFlow, Hugging Face, OpenCV

## Public GitHub

${gh.totals.originalPublicRepos} original public repositories, ${gh.totals.stars} stars, ${gh.user.followers} followers.
Notable: ${gh.featured
  .slice(0, 6)
  .map((r) => `${r.name} (${r.stars}★)`)
  .join(", ")}.

## Writing

70 posts on dev.to (541 reactions), mirrored on Hashnode. Mostly data science
and Python, written across 2022 and 2023.

## Other

- Kaggle: Datasets Expert (rank 1,821/11,026), Notebooks Expert (5,462/61,465)
- Education: B.E. Computer Science, Dr. Bhim Rao Ambedkar University, Agra (2020–2024)
- Languages: Hindi (native), English (professional)

## Links

- GitHub: https://github.com/anurag629
- LinkedIn: https://www.linkedin.com/in/anurag629
- X: https://x.com/anurag_629
- CODERCOPS: https://www.codercops.com
- dev.to: https://dev.to/anurag629
- Kaggle: https://www.kaggle.com/anurag629
`;

/* -------------------------------------------------------------- sitemap ---- */

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

/* ------------------------------------------------------------------ run ---- */

async function main() {
  const sharp = (await import("sharp")).default;
  await mkdir(PUBLIC, { recursive: true });

  // OG image, with the portrait composited into its frame.
  const base = await sharp(Buffer.from(ogSvg)).png().toBuffer();
  const portrait = await sharp(join(PUBLIC, "profile.png"))
    .resize(136, 136, { fit: "cover" })
    .greyscale()
    .modulate({ brightness: 1.04 })
    .png()
    .toBuffer();

  const og = await sharp(base)
    .composite([{ input: portrait, left: 1000, top: 392 }])
    .png()
    .toBuffer();

  await writeFile(join(PUBLIC, "og-image.png"), og);
  console.log(`  > og-image.png (${(og.length / 1024).toFixed(0)}KB)`);

  // Scalable favicon, plus raster fallbacks.
  await writeFile(join(PUBLIC, "favicon.svg"), iconSvg(64));

  const sizes = [
    ["apple-touch-icon.png", 180],
    ["icon-192.png", 192],
    ["icon-512.png", 512],
    ["favicon-32.png", 32],
    ["favicon-16.png", 16],
  ];
  for (const [name, size] of sizes) {
    const png = await sharp(Buffer.from(iconSvg(size)))
      .resize(size, size)
      .png()
      .toBuffer();
    await writeFile(join(PUBLIC, name), png);
  }

  try {
    const pngToIco = (await import("png-to-ico")).default;
    const ico = await pngToIco([
      await readFile(join(PUBLIC, "favicon-16.png")),
      await readFile(join(PUBLIC, "favicon-32.png")),
    ]);
    await writeFile(join(PUBLIC, "favicon.ico"), ico);
  } catch {
    await writeFile(
      join(PUBLIC, "favicon.ico"),
      await readFile(join(PUBLIC, "favicon-32.png")),
    );
  }
  for (const tmp of ["favicon-16.png", "favicon-32.png"]) {
    await unlink(join(PUBLIC, tmp)).catch(() => {});
  }
  console.log("  > favicons");

  await writeFile(join(PUBLIC, "llms.txt"), llms);
  await writeFile(join(PUBLIC, "sitemap.xml"), sitemap);
  console.log(`  > llms.txt, sitemap.xml (lastmod ${today})`);
}

main().catch((err) => {
  console.error(`\ngenerate-assets failed: ${err.message}\n`);
  process.exit(1);
});
