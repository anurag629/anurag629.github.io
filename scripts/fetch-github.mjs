/**
 * Build-time GitHub fetch.
 *
 * The old site hard-coded "102 repos / 89 followers" and drifted to being wrong
 * by 26 repos. Nothing on this site should be a number someone has to remember
 * to update, so everything countable is pulled here at build time.
 *
 * Writes src/data/generated/github.json. That file is committed, and acts as the
 * fallback: if the API is rate-limited or down, the build uses the last known
 * good snapshot instead of failing. A portfolio deploy should never break
 * because GitHub had a bad minute.
 *
 * GITHUB_TOKEN is optional. Without it, REST still works (60 req/hr) but the
 * contribution calendar (GraphQL) does not, and those numbers stay at snapshot.
 */

import { readFile, writeFile, mkdir } from "fs/promises";
import { join, dirname } from "path";

const USER = "anurag629";
const OUT = join(process.cwd(), "src/data/generated/github.json");
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";

/** Repos to surface in the Work section, in the order they should appear. */
const FEATURED = [
  "50-Days-Data-Science",
  "cortex-bridge",
  "ai_interview",
  "lore",
  "omega-server",
  "netra_ai_surviellance",
  "Human_Action_Recognition",
  "100DaysOfAIEngineer",
];

/** Public repos owned by orgs, surfaced alongside the personal ones. */
const ORG_FEATURED = [
  ["codercops", "chatcops"],
  ["codercops", "toolbelt"],
];

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": `${USER}-portfolio-build`,
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
};

async function rest(path) {
  const res = await fetch(`https://api.github.com/${path}`, { headers });
  if (!res.ok) throw new Error(`GET ${path} -> ${res.status}`);
  return res.json();
}

async function graphql(query) {
  if (!TOKEN) return null;
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) return null;
  const json = await res.json();
  return json.errors ? null : json.data;
}

async function loadSnapshot() {
  try {
    return JSON.parse(await readFile(OUT, "utf8"));
  } catch {
    return null;
  }
}

/** Contributions per calendar year. Needs a token; returns null without one. */
async function fetchContributions(years) {
  const fields = years
    .map(
      (y) =>
        `y${y}: contributionsCollection(from:"${y}-01-01T00:00:00Z", to:"${y}-12-31T23:59:59Z"){ contributionCalendar { totalContributions } }`,
    )
    .join("\n");
  const data = await graphql(`{ user(login:"${USER}") { ${fields} } }`);
  if (!data?.user) return null;
  return years.map((y) => ({
    year: y,
    total: data.user[`y${y}`]?.contributionCalendar?.totalContributions ?? 0,
  }));
}

async function main() {
  const snapshot = await loadSnapshot();
  const years = [2021, 2022, 2023, 2024, 2025, 2026];

  let fresh = null;
  try {
    const user = await rest(`users/${USER}`);

    const pages = await Promise.all(
      [1, 2].map((p) =>
        rest(`users/${USER}/repos?per_page=100&type=owner&page=${p}`),
      ),
    );
    const all = pages.flat();
    const original = all.filter((r) => !r.fork && !r.private);

    const byName = new Map(original.map((r) => [r.name, r]));
    const orgRepos = await Promise.all(
      ORG_FEATURED.map(async ([org, name]) => {
        try {
          return await rest(`repos/${org}/${name}`);
        } catch {
          return null;
        }
      }),
    );

    const shape = (r) => ({
      name: r.name,
      fullName: r.full_name,
      description: r.description,
      language: r.language,
      stars: r.stargazers_count,
      forks: r.forks_count,
      url: r.html_url,
      homepage: r.homepage || null,
      topics: r.topics || [],
      pushedAt: r.pushed_at?.slice(0, 10) ?? null,
    });

    const featured = [
      ...FEATURED.map((n) => byName.get(n)).filter(Boolean),
      ...orgRepos.filter(Boolean),
    ].map(shape);

    const contributions = await fetchContributions(years);

    fresh = {
      fetchedAt: new Date().toISOString().slice(0, 10),
      user: {
        followers: user.followers,
        publicRepos: user.public_repos,
      },
      totals: {
        originalPublicRepos: original.length,
        stars: original.reduce((n, r) => n + r.stargazers_count, 0),
      },
      featured,
      // Null when unauthenticated; merged from snapshot below.
      contributions,
    };
  } catch (err) {
    console.warn(`  ! GitHub fetch failed (${err.message})`);
  }

  if (!fresh && !snapshot) {
    throw new Error(
      "No GitHub data and no committed snapshot. Cannot build. " +
        "Run once with network access to seed src/data/generated/github.json.",
    );
  }

  if (!fresh) {
    console.log(`  ~ using snapshot from ${snapshot.fetchedAt} (fetch failed)`);
    return;
  }

  // Keep snapshot contributions when GraphQL was unavailable, so an
  // unauthenticated local build never blanks out the chart.
  if (!fresh.contributions) {
    fresh.contributions = snapshot?.contributions ?? [];
    if (fresh.contributions.length) {
      console.log("  ~ no token: contribution counts kept from snapshot");
    }
  }

  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(fresh, null, 2) + "\n");

  console.log(
    `  > github.json: ${fresh.totals.originalPublicRepos} repos, ` +
      `${fresh.totals.stars} stars, ${fresh.user.followers} followers, ` +
      `${fresh.featured.length} featured`,
  );
}

main().catch((err) => {
  console.error(`\nfetch-github failed: ${err.message}\n`);
  process.exit(1);
});
