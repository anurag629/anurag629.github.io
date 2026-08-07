/**
 * Hand-maintained truth about Anurag.
 *
 * Rules for this file:
 *  - Anything countable (stars, repos, followers, contributions) lives in
 *    generated/github.json and is fetched at build time. Do not hard-code it here.
 *  - Every PR linked below was verified as merged and authored by anurag629.
 *  - Work in private repos is described, never linked. No private repo names.
 */

export const identity = {
  name: "Anurag Verma",
  handle: "anurag629",
  role: "AI infra engineer",
  secondRole: "founder",
  line: "I build the boring layer under the magic.",
  focus: ["LLM gateways", "agent memory", "model routing"],
  location: "Uttar Pradesh, India",
  email: "akvermaav629@gmail.com",
  available: "Open to conversations about AI infrastructure.",
  bio: [
    "I started in data science, leading a team that built machine learning coursework, and kept drifting toward the layer underneath: the APIs, the pipelines, the parts that have to stay up. Now I work on LLM infrastructure — routing requests across providers, metering what they cost, and keeping agents from forgetting everything between sessions.",
    "By day that is DataWars, where I moved the platform off server-heavy Docker execution and onto the client. By night it is CoderCops, a chat-first hiring product I am building on the same ideas: streaming agents, multi-model routing, and guardrails that hold when a stranger is typing into the box.",
    "The work I am proudest of is unglamorous. Three of my patches are in Django itself, and all three are test-infrastructure fixes nobody will ever see running.",
  ],
};

export const links = {
  github: "https://github.com/anurag629",
  linkedin: "https://www.linkedin.com/in/anurag629",
  x: "https://x.com/anurag_629",
  codercops: "https://www.codercops.com",
  devto: "https://dev.to/anurag629",
  hashnode: "https://anurag629.hashnode.dev",
  kaggle: "https://www.kaggle.com/anurag629",
  datawars: "https://www.datawars.io",
};

/** What is actually being built right now. */
export const now = [
  {
    id: "codercops",
    name: "CoderCops",
    kind: "company",
    role: "Founder",
    summary:
      "Chat-first hiring. You describe the role or the candidate in conversation and an agent writes the posting or the profile, with a confirmation step before anything goes live.",
    detail:
      "Token streaming over SSE, model routing that sends easy turns to cheap models, prompt-injection filtering and secret redaction, and tool calls that never fire without confirmation.",
    stack: ["Django", "Next.js", "SSE", "multi-model routing"],
    href: "https://www.codercops.com",
    status: "live",
  },
  {
    id: "cortex-bridge",
    name: "cortex-bridge",
    kind: "open source",
    role: "Author",
    summary:
      "Persistent memory for coding agents. It captures what an agent did, recalls it in later sessions, and survives context compaction.",
    detail:
      "Backed by Cognee. The interesting problem is not storage, it is deciding what is worth remembering and surfacing it before the agent asks.",
    stack: ["TypeScript", "Cognee", "OpenCode"],
    href: "https://github.com/anurag629/cortex-bridge",
    status: "active",
  },
  {
    id: "gateway",
    name: "LLM gateway",
    kind: "infrastructure",
    role: "Engineer",
    summary:
      "One API across four providers, with per-request billing, envelope-encrypted credentials and automatic failover when a provider degrades.",
    detail:
      "Closed source. The hard parts were metering tokens accurately enough to bill on, and failing over without losing a stream mid-response.",
    stack: ["Python", "Django", "PostgreSQL"],
    href: null,
    status: "internal",
  },
];

/**
 * Signature section. Each row is a real domain, the stack is what actually gets
 * used for it, and `since` is the year it became routine. Status is honest:
 * primary = daily, active = regular, standby = reach for it when the job calls.
 */
export const routes = [
  {
    route: "/llm",
    stack: ["OpenAI", "Anthropic", "Bedrock", "OpenRouter", "MCP"],
    status: "primary",
    since: 2024,
  },
  {
    route: "/backend",
    stack: ["Python", "Django", "DRF", "FastAPI", "Celery"],
    status: "primary",
    since: 2021,
  },
  {
    route: "/frontend",
    stack: ["TypeScript", "Next.js", "React", "Tailwind"],
    status: "primary",
    since: 2023,
  },
  {
    route: "/data",
    stack: ["PostgreSQL", "pgvector", "Redis", "MongoDB", "Neo4j"],
    status: "active",
    since: 2022,
  },
  {
    route: "/infra",
    stack: ["Docker", "Azure", "AWS", "Nginx", "GitHub Actions"],
    status: "active",
    since: 2022,
  },
  {
    route: "/ml",
    stack: ["PyTorch", "TensorFlow", "Hugging Face", "OpenCV"],
    status: "standby",
    since: 2021,
  },
];

export const experience = [
  {
    org: "CoderCops",
    title: "Founder",
    period: "2025 — now",
    current: true,
    href: "https://www.codercops.com",
    notes: [
      "Building an AI-native hiring platform end to end: product, backend, agent layer and infrastructure.",
      "Shipped a streaming agent that turns a conversation into a job posting or a developer profile, gated on confirmation before publishing.",
      "Runs an automated editorial pipeline that has published several hundred technical articles.",
    ],
  },
  {
    org: "DataWars",
    title: "Full Stack Engineer",
    period: "Jul 2025 — now",
    current: true,
    href: "https://www.datawars.io",
    notes: [
      "Built a browser-based coding environment that runs Python and JavaScript entirely client-side, removing the server cost per learner.",
      "Moved the platform off Docker-per-session execution onto that client-side architecture, cutting operating cost by about 35%.",
      "Built the REST services behind exercises, AI prompts and user management, and reviewed the team's backend work.",
    ],
  },
  {
    org: "DataWars",
    title: "Data Science Team Lead",
    period: "Jun 2023 — Jul 2025",
    current: false,
    href: "https://www.datawars.io",
    notes: [
      "Led nine people building 300+ interactive machine learning labs.",
      "Wrote a Pytest-based assertion library with 150+ statistical checks, which caught most content errors before students hit them.",
      "Set the standards for reproducibility and review that the content team still runs on.",
    ],
  },
  {
    org: "Upwork",
    title: "Freelance ML / Full Stack Developer",
    period: "Jul 2022 — Sep 2024",
    current: false,
    href: null,
    notes: [
      "Trained and shipped models for clients across image classification, object detection and forecasting.",
      "Deployed to AWS, Azure and Heroku, and built the Django and JavaScript applications around them.",
    ],
  },
];

/**
 * Open source. Every PR below re-verified as merged, authored by anurag629,
 * on 2026-08-07.
 */
export const openSource = {
  headline: {
    project: "Django",
    repo: "django/django",
    href: "https://github.com/django/django",
    note: "Three patches merged into the framework itself, all in the test infrastructure.",
    prs: [
      {
        number: 20931,
        merged: "2026-07-08",
        title:
          "Handled fields and files with the same name in encode_multipart()",
        href: "https://github.com/django/django/pull/20931",
      },
      {
        number: 20781,
        merged: "2026-07-29",
        title: "Added test for PREPEND_WWW redirect following in test client",
        href: "https://github.com/django/django/pull/20781",
      },
      {
        number: 20776,
        merged: "2026-02-26",
        title: "Added tests for empty iterable stripping in RequestFactory",
        href: "https://github.com/django/django/pull/20776",
      },
    ],
    open: {
      number: 20757,
      title:
        "Allowed passing content_type=None to test Client and RequestFactory",
      href: "https://github.com/django/django/pull/20757",
    },
    proposal: {
      title: "GSoC 2026 proposal — migrating Django's integration tests to Playwright",
      href: "https://forum.djangoproject.com/t/gsoc-2026-anurag-verma-interested-in-playwright-testing-migration/44276",
      note: "Audited 15 test files and roughly 768 test methods to scope the migration.",
    },
  },
  projects: [
    {
      project: "Oppia",
      repo: "oppia/oppia",
      href: "https://github.com/oppia/oppia",
      note: "Python 3 migration across the codebase.",
      count: 5,
      years: "2021 — 2022",
      prs: [13969, 14279, 14338, 14640, 14657].map((n) => ({
        number: n,
        href: `https://github.com/oppia/oppia/pull/${n}`,
      })),
    },
    {
      project: "Ivy",
      repo: "unifyai/ivy",
      href: "https://github.com/unifyai/ivy",
      note: "Linear algebra functions across the NumPy, TensorFlow, PyTorch and JAX backends.",
      count: 4,
      years: "2022 — 2023",
      prs: [15023, 13588, 7758, 6569].map((n) => ({
        number: n,
        href: `https://github.com/unifyai/ivy/pull/${n}`,
      })),
    },
    {
      project: "recodehive",
      repo: "recodehive/awesome-github-profiles",
      href: "https://github.com/recodehive/awesome-github-profiles",
      note: "Fixed broken links and a mobile table overflow.",
      count: 2,
      years: "2026",
      prs: [1489, 1486].map((n) => ({
        number: n,
        href: `https://github.com/recodehive/awesome-github-profiles/pull/${n}`,
      })),
    },
  ],
  orgs: ["FOSSASIA", "EddieHubCommunity", "Py-Contributors", "recodehive"],
};

/**
 * PR volume, stated carefully. Most of the 1,492 are DataWars and CoderCops
 * work repositories, which are private. Calling them "open source" would be
 * false, so the two numbers are shown separately and labelled for what they are.
 */
export const throughput = {
  totalMerged: 1492,
  thirdParty: 49,
  djangoCore: 3,
  note: "Most of these are work repositories at DataWars and CoderCops. The third-party number counts only projects owned by neither.",
};

export const writing = {
  summary:
    "Seventy posts on data science and Python, written mostly across one intense stretch in 2022 and 2023.",
  stats: { posts: 70, reactions: 541, platform: "dev.to" },
  featured: [
    {
      title: "GridSearchCV in scikit-learn: a complete guide",
      reactions: 55,
      href: "https://dev.to/anurag629/gridsearchcv-in-scikit-learn-a-comprehensive-guide-2a72",
    },
    {
      title: "The power of bit manipulation",
      reactions: 31,
      href: "https://dev.to/anurag629/the-power-of-bit-manipulation-how-to-solve-problems-efficiently-3p1h",
    },
    {
      title: "Calculus for data science: an introduction",
      reactions: 22,
      href: "https://dev.to/anurag629/calculus-for-data-science-an-introduction-33lm",
    },
    {
      title: "A complete data science roadmap, from noob to expert",
      reactions: 22,
      href: "https://dev.to/anurag629/complete-data-science-roadmap-bootcamp-from-noob-to-expert-4ee2",
    },
  ],
  elsewhere: [
    { label: "Mirrored on Hashnode", href: "https://anurag629.hashnode.dev" },
    {
      label: "CoderCops engineering blog",
      href: "https://blog.codercops.com/blog",
      note: "Built the pipeline behind it.",
    },
  ],
};

export const signals = {
  kaggle: {
    href: "https://www.kaggle.com/anurag629",
    tiers: [
      { name: "Datasets", tier: "Expert", rank: 1821, of: 11026, medals: 3 },
      { name: "Notebooks", tier: "Expert", rank: 5462, of: 61465, medals: 6 },
    ],
  },
  education: {
    degree: "B.E. Computer Science and Engineering",
    institution: "Dr. Bhim Rao Ambedkar University, Agra",
    period: "2020 — 2024",
  },
  languages: [
    { name: "Hindi", level: "Native" },
    { name: "English", level: "Professional" },
  ],
};

export const nav = [
  { label: "now", href: "#now" },
  { label: "stack", href: "#stack" },
  { label: "work", href: "#work" },
  { label: "open source", href: "#open-source" },
  { label: "writing", href: "#writing" },
  { label: "contact", href: "#contact" },
];
