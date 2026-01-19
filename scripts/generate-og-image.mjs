import { join } from "path";
import { mkdir, writeFile } from "fs/promises";

const width = 1200;
const height = 630;

// Create SVG OG image
const svgContent = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,0.02)" stroke-width="1"/>
    </pattern>
    <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fdfbf7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f8f5ef;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="4" dy="4" stdDeviation="10" flood-color="rgba(0,0,0,0.1)"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#f5f1eb"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>

  <!-- Decorative elements -->
  <text x="50" y="80" font-size="60" fill="rgba(0,0,0,0.08)">✦</text>
  <text x="1100" y="580" font-size="40" fill="rgba(0,0,0,0.08)">✧</text>

  <!-- Main card -->
  <rect x="150" y="100" width="900" height="430" rx="8" fill="url(#cardGradient)" filter="url(#shadow)"/>

  <!-- Tape decoration -->
  <rect x="555" y="85" width="90" height="30" rx="2" fill="rgba(255,248,220,0.9)" transform="rotate(-2, 600, 100)"/>

  <!-- Name -->
  <text x="600" y="220" text-anchor="middle" font-family="Georgia, serif" font-size="64" font-weight="bold" font-style="italic" fill="#2c2c2c">
    Anurag Verma
  </text>

  <!-- Title -->
  <text x="600" y="280" text-anchor="middle" font-family="system-ui, sans-serif" font-size="28" fill="#4a4a4a">
    Full Stack Developer &amp; AI Engineer
  </text>

  <!-- Skills -->
  <g transform="translate(600, 340)">
    <rect x="-280" y="-18" width="85" height="36" rx="18" fill="#3a5a7c"/>
    <text x="-237" y="7" text-anchor="middle" font-family="system-ui" font-size="16" fill="white">Python</text>

    <rect x="-180" y="-18" width="85" height="36" rx="18" fill="#3a5a7c"/>
    <text x="-137" y="7" text-anchor="middle" font-family="system-ui" font-size="16" fill="white">Django</text>

    <rect x="-80" y="-18" width="85" height="36" rx="18" fill="#3a5a7c"/>
    <text x="-37" y="7" text-anchor="middle" font-family="system-ui" font-size="16" fill="white">Next.js</text>

    <rect x="20" y="-18" width="100" height="36" rx="18" fill="#3a5a7c"/>
    <text x="70" y="7" text-anchor="middle" font-family="system-ui" font-size="16" fill="white">TypeScript</text>

    <rect x="135" y="-18" width="70" height="36" rx="18" fill="#3a5a7c"/>
    <text x="170" y="7" text-anchor="middle" font-family="system-ui" font-size="16" fill="white">AI/ML</text>

    <rect x="220" y="-18" width="70" height="36" rx="18" fill="#3a5a7c"/>
    <text x="255" y="7" text-anchor="middle" font-family="system-ui" font-size="16" fill="white">Azure</text>
  </g>

  <!-- Tagline sticky note -->
  <g transform="translate(600, 420) rotate(-1)">
    <rect x="-180" y="-25" width="360" height="50" fill="#fff9c4"/>
    <text x="0" y="8" text-anchor="middle" font-family="Georgia, serif" font-size="20" font-style="italic" fill="#2c2c2c">
      "Turning chaos into unicorns"
    </text>
  </g>

  <!-- Website -->
  <text x="600" y="500" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" fill="#6b6b6b">
    anurag629.github.io
  </text>
</svg>
`;

async function generateImages() {
  const publicDir = join(process.cwd(), "public");

  // Ensure public directory exists
  await mkdir(publicDir, { recursive: true });

  // Write SVG file
  await writeFile(join(publicDir, "og-image.svg"), svgContent.trim());
  console.log("✓ Generated og-image.svg");

  // Try to convert to PNG using sharp
  try {
    const sharp = (await import("sharp")).default;

    const pngBuffer = await sharp(Buffer.from(svgContent))
      .resize(width, height)
      .png()
      .toBuffer();

    await writeFile(join(publicDir, "og-image.png"), pngBuffer);
    console.log("✓ Generated og-image.png");

    // Also create twitter-image.png (same image)
    await writeFile(join(publicDir, "twitter-image.png"), pngBuffer);
    console.log("✓ Generated twitter-image.png");
  } catch (error) {
    console.log("⚠ Could not generate PNG (sharp issue), using SVG only");
    console.log("  SVG will work for most platforms");
  }
}

generateImages().catch(console.error);
