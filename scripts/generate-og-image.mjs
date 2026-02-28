import { join } from "path";
import { mkdir, writeFile, readFile } from "fs/promises";

const width = 1200;
const height = 630;

// Dark theme OG image matching site style (cyan-violet, glass, dot grid)
const svgContent = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#06b6d4"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
    <linearGradient id="accentGradVert" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#06b6d4"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="40" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Dark background -->
  <rect width="100%" height="100%" fill="#09090b"/>

  <!-- Dot grid -->
  <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.03)"/>
  </pattern>
  <rect width="100%" height="100%" fill="url(#dots)"/>

  <!-- Gradient orbs (subtle) -->
  <circle cx="150" cy="150" r="120" fill="rgba(6,182,212,0.08)" filter="url(#glow)"/>
  <circle cx="1050" cy="480" r="100" fill="rgba(139,92,246,0.08)" filter="url(#glow)"/>

  <!-- Glass card -->
  <rect x="60" y="60" width="1080" height="510" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

  <!-- Accent line -->
  <rect x="60" y="60" width="1080" height="4" rx="2" fill="url(#accentGrad)"/>

  <!-- Avatar ring (image composited later) -->
  <circle cx="200" cy="315" r="74" fill="none" stroke="url(#accentGradVert)" stroke-width="3"/>

  <!-- Content -->
  <g transform="translate(340, 165)">
    <text x="0" y="0" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" font-size="48" font-weight="700" fill="url(#accentGrad)">
      Anurag Verma
    </text>
    <text x="0" y="48" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" font-size="22" fill="#a1a1aa">
      Full Stack Developer &amp; AI Engineer
    </text>
    <rect x="0" y="68" width="70" height="2" rx="1" fill="url(#accentGrad)"/>
    <text x="0" y="105" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" font-size="15" fill="#71717a">
      Python, Django, Next.js, AI integration
    </text>
    <text x="0" y="128" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" font-size="15" fill="#71717a">
      3+ years • Building scalable applications
    </text>
  </g>

  <!-- Skill pills (glass style) -->
  <g transform="translate(340, 365)">
    <rect x="0" y="0" width="68" height="28" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="34" y="18" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#e4e4e7">Python</text>
    <rect x="78" y="0" width="68" height="28" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="112" y="18" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#e4e4e7">Django</text>
    <rect x="156" y="0" width="72" height="28" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="192" y="18" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#e4e4e7">Next.js</text>
    <rect x="238" y="0" width="86" height="28" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="281" y="18" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#e4e4e7">TypeScript</text>
    <rect x="334" y="0" width="56" height="28" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="362" y="18" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#e4e4e7">AI/ML</text>
    <rect x="400" y="0" width="58" height="28" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="429" y="18" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#e4e4e7">Azure</text>
  </g>

  <!-- Tagline & site -->
  <g transform="translate(340, 445)">
    <text x="0" y="0" font-family="Inter, sans-serif" font-size="14" fill="#71717a" font-style="italic">"Turning chaos into unicorns"</text>
    <text x="0" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#06b6d4">anurag629.github.io</text>
  </g>

  <!-- Company badge -->
  <g transform="translate(960, 500)">
    <rect x="0" y="0" width="120" height="28" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="60" y="18" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#a1a1aa">@DataWars</text>
  </g>
</svg>
`;

async function generateImages() {
  const publicDir = join(process.cwd(), "public");

  // Ensure public directory exists
  await mkdir(publicDir, { recursive: true });

  // Write SVG file
  await writeFile(join(publicDir, "og-image.svg"), svgContent.trim());
  console.log("✓ Generated og-image.svg");

  // Convert to PNG using sharp
  try {
    const sharp = (await import("sharp")).default;

    // Generate base image from SVG
    const baseImage = await sharp(Buffer.from(svgContent))
      .resize(width, height)
      .png()
      .toBuffer();

    // Load and process profile picture as circular avatar
    const profilePicPath = join(publicDir, "profile.png");
    const avatarSize = 140; // diameter of the avatar

    // Create circular mask for avatar
    const circleMask = Buffer.from(
      `<svg width="${avatarSize}" height="${avatarSize}">
        <circle cx="${avatarSize/2}" cy="${avatarSize/2}" r="${avatarSize/2}" fill="white"/>
      </svg>`
    );

    // Process profile picture: resize and make circular
    const circularAvatar = await sharp(profilePicPath)
      .resize(avatarSize, avatarSize, { fit: "cover" })
      .composite([{
        input: circleMask,
        blend: "dest-in"
      }])
      .png()
      .toBuffer();

    // Composite the circular avatar onto the base image
    // Avatar center is at (200, 315) in the SVG, so top-left is (200-70, 315-70) = (130, 245)
    const pngBuffer = await sharp(baseImage)
      .composite([{
        input: circularAvatar,
        left: 130,
        top: 245
      }])
      .png({ quality: 100 })
      .toBuffer();

    await writeFile(join(publicDir, "og-image.png"), pngBuffer);
    console.log("✓ Generated og-image.png");

    // Also create twitter-image.png (same image)
    await writeFile(join(publicDir, "twitter-image.png"), pngBuffer);
    console.log("✓ Generated twitter-image.png");

    // Log file sizes
    console.log(`  og-image.png: ${(pngBuffer.length / 1024).toFixed(1)}KB`);
  } catch (error) {
    console.error("⚠ Error generating PNG:", error.message);
    console.error(error.stack);
  }
}

generateImages().catch(console.error);
