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

const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
      <path d="M64 0H0V64" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="${VOID}"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Frame -->
  <rect x="56" y="56" width="1088" height="518" fill="${PANEL}" fill-opacity="0.72" stroke="${RULE}"/>
  <path d="M56 76V56h20M1144 554v20h-20" fill="none" stroke="#2B323D" stroke-width="2"/>

  <!-- Signal lead rule -->
  <rect x="96" y="120" width="40" height="2" fill="${SIGNAL}"/>
  <rect x="136" y="120" width="440" height="1" fill="${RULE}"/>

  <!-- Identity -->
  <text x="96" y="106" font-family="IBM Plex Mono, monospace" font-size="17" letter-spacing="3" fill="${DIM}">AI INFRA ENGINEER · FOUNDER</text>
  <text x="94" y="228" font-family="Martian Mono, ui-monospace, monospace" font-size="86" font-weight="700" letter-spacing="-3" fill="${TEXT}">ANURAG</text>
  <text x="94" y="318" font-family="Martian Mono, ui-monospace, monospace" font-size="86" font-weight="700" letter-spacing="-3" fill="${TEXT}">VERMA</text>

  <text x="96" y="380" font-family="IBM Plex Sans, system-ui, sans-serif" font-size="27" fill="${SIGNAL}">I build the boring layer under the magic.</text>
  <text x="96" y="422" font-family="IBM Plex Mono, monospace" font-size="19" fill="${DIM}">LLM gateways · agent memory · model routing</text>

  <!-- Stat strip -->
  <rect x="96" y="466" width="784" height="1" fill="${RULE}"/>
  <g font-family="IBM Plex Mono, monospace">
    <text x="96"  y="512" font-size="34" font-weight="600" fill="${SIGNAL}">3</text>
    <text x="96"  y="538" font-size="14" letter-spacing="2" fill="${DIM}">DJANGO CORE</text>

    <text x="286" y="512" font-size="34" font-weight="600" fill="${TEXT}">1,492</text>
    <text x="286" y="538" font-size="14" letter-spacing="2" fill="${DIM}">PRS MERGED</text>

    <text x="516" y="512" font-size="34" font-weight="600" fill="${TEXT}">${gh.totals.originalPublicRepos}</text>
    <text x="516" y="538" font-size="14" letter-spacing="2" fill="${DIM}">PUBLIC REPOS</text>

    <text x="716" y="512" font-size="34" font-weight="600" fill="${TEXT}">${gh.totals.stars}</text>
    <text x="716" y="538" font-size="14" letter-spacing="2" fill="${DIM}">STARS</text>
  </g>

  <!-- Portrait frame (photo composited below) -->
  <rect x="936" y="120" width="168" height="168" fill="none" stroke="${RULE}"/>
  <path d="M936 140v-20h20M1104 268v20h-20" fill="none" stroke="${SIGNAL}" stroke-width="2"/>

  <text x="936" y="330" font-family="IBM Plex Mono, monospace" font-size="16" fill="${TEXT}">@anurag629</text>
  <text x="936" y="356" font-family="IBM Plex Mono, monospace" font-size="14" fill="${DIM}">Uttar Pradesh, India</text>

  <circle cx="943" cy="392" r="4" fill="#4ADE80"/>
  <text x="958" y="397" font-family="IBM Plex Mono, monospace" font-size="14" letter-spacing="1" fill="${DIM}">OPEN TO CONVERSATIONS</text>

  <text x="936" y="538" font-family="IBM Plex Mono, monospace" font-size="15" fill="${SIGNAL}">anurag629.github.io</text>
</svg>`;

/* -------------------------------------------------------------- favicon ---- */

/**
 * Solid amber tile with a dark monogram. Reads at 16px in a browser tab, and
 * the old emoji-on-white square glowed in dark tab bars.
 */
const iconSvg = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="${SIGNAL}"/>
  <path d="M14 47 L32 15 L50 47" fill="none" stroke="${VOID}" stroke-width="8" stroke-linejoin="round" stroke-linecap="round"/>
  <rect x="22" y="37" width="20" height="7" fill="${VOID}"/>
</svg>`;

/* -------------------------------------------------------------- llms.txt --- */

const llms = `# Anurag Verma

> Structured summary for AI assistants. Generated at build time on ${today}.

## Identity

- Name: Anurag Verma
- Role: AI infrastructure engineer and founder
- Current: Full Stack Engineer at DataWars; Founder at CoderCops
- Location: Uttar Pradesh, India
- Site: ${SITE}
- Email: akvermaav629@gmail.com

## Summary

Anurag Verma builds LLM infrastructure: multi-provider gateways, per-request
token metering, model routing, and persistent memory for coding agents. He
started in data science, led a nine-person team building machine learning
coursework at DataWars, then moved into the platform engineering underneath it.

He has three patches merged into Django itself, all in the test infrastructure,
and applied to Google Summer of Code 2026 to migrate Django's integration tests
to Playwright.

## Current work

- CoderCops (founder) — chat-first hiring platform. Streaming agent over SSE,
  multi-model routing, prompt-injection filtering, confirmation-gated tools.
- cortex-bridge (author) — persistent memory for coding agents, backed by
  Cognee. Survives context compaction. TypeScript.
- LLM gateway (engineer, closed source) — one API across four providers with
  per-request billing, envelope-encrypted credentials and automatic failover.

## Experience

- Founder, CoderCops (2025 — present)
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
repositories. The remainder are DataWars and CoderCops work repositories.

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
- CoderCops: https://www.codercops.com
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
    .resize(168, 168, { fit: "cover" })
    .greyscale()
    .modulate({ brightness: 1.04 })
    .png()
    .toBuffer();

  const og = await sharp(base)
    .composite([{ input: portrait, left: 936, top: 120 }])
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
