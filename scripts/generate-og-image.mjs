import { join } from "path";
import { mkdir, writeFile, readFile } from "fs/promises";

const width = 1200;
const height = 630;

// Create a more polished SVG OG image (avatar placeholder will be composited later)
const svgContent = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background gradient -->
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f7f4ef"/>
      <stop offset="50%" style="stop-color:#f5f1eb"/>
      <stop offset="100%" style="stop-color:#ebe5db"/>
    </linearGradient>

    <!-- Card shadow -->
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="20" flood-color="rgba(0,0,0,0.08)"/>
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="rgba(0,0,0,0.05)"/>
    </filter>

    <!-- Avatar border gradient -->
    <linearGradient id="avatarBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3a5a7c"/>
      <stop offset="100%" style="stop-color:#c44536"/>
    </linearGradient>

    <!-- Accent gradient -->
    <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#c44536"/>
      <stop offset="100%" style="stop-color:#d45546"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bgGradient)"/>

  <!-- Subtle grid pattern -->
  <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
    <circle cx="2" cy="2" r="1" fill="rgba(0,0,0,0.03)"/>
  </pattern>
  <rect width="100%" height="100%" fill="url(#dots)"/>

  <!-- Decorative corner elements -->
  <path d="M0 0 L120 0 L0 120 Z" fill="rgba(196,69,54,0.06)"/>
  <path d="M1200 630 L1080 630 L1200 510 Z" fill="rgba(58,90,124,0.06)"/>

  <!-- Main content card -->
  <rect x="80" y="80" width="1040" height="470" rx="16" fill="white" filter="url(#cardShadow)"/>

  <!-- Red accent line at top of card -->
  <rect x="80" y="80" width="1040" height="6" rx="3" fill="url(#accentGradient)"/>

  <!-- Left section: Avatar border ring (image composited separately) -->
  <g transform="translate(200, 315)">
    <!-- Avatar border ring -->
    <circle cx="0" cy="0" r="74" fill="none" stroke="url(#avatarBorder)" stroke-width="4"/>
  </g>

  <!-- Right section: Content -->
  <g transform="translate(340, 180)">
    <!-- Name -->
    <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="52" font-weight="bold" fill="#1a1a1a">
      Anurag Verma
    </text>

    <!-- Title -->
    <text x="0" y="50" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" fill="#4a4a4a">
      Full Stack Developer &amp; AI Engineer
    </text>

    <!-- Divider line -->
    <rect x="0" y="75" width="80" height="3" rx="1.5" fill="url(#accentGradient)"/>

    <!-- Description -->
    <text x="0" y="115" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" fill="#6b6b6b">
      Building scalable web applications with Python, Django,
    </text>
    <text x="0" y="138" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" fill="#6b6b6b">
      Next.js, and AI integration • 3+ years experience
    </text>
  </g>

  <!-- Skills section -->
  <g transform="translate(340, 380)">
    <!-- Skill pills - Row 1 -->
    <g>
      <rect x="0" y="0" width="72" height="32" rx="16" fill="#3a5a7c"/>
      <text x="36" y="21" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="500" fill="white">Python</text>
    </g>
    <g>
      <rect x="82" y="0" width="72" height="32" rx="16" fill="#3a5a7c"/>
      <text x="118" y="21" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="500" fill="white">Django</text>
    </g>
    <g>
      <rect x="164" y="0" width="72" height="32" rx="16" fill="#3a5a7c"/>
      <text x="200" y="21" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="500" fill="white">Next.js</text>
    </g>
    <g>
      <rect x="246" y="0" width="90" height="32" rx="16" fill="#3a5a7c"/>
      <text x="291" y="21" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="500" fill="white">TypeScript</text>
    </g>
    <g>
      <rect x="346" y="0" width="62" height="32" rx="16" fill="#4a7c59"/>
      <text x="377" y="21" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="500" fill="white">AI/ML</text>
    </g>
    <g>
      <rect x="418" y="0" width="62" height="32" rx="16" fill="#4a7c59"/>
      <text x="449" y="21" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="500" fill="white">Azure</text>
    </g>
  </g>

  <!-- Bottom section: Website and tagline -->
  <g transform="translate(340, 460)">
    <!-- Tagline -->
    <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-style="italic" fill="#8b8b8b">
      "Turning chaos into unicorns"
    </text>

    <!-- Website with icon -->
    <g transform="translate(0, 35)">
      <circle cx="8" cy="-4" r="8" fill="none" stroke="#c44536" stroke-width="1.5"/>
      <path d="M8 -12 L8 4 M0 -4 L16 -4" stroke="#c44536" stroke-width="1.5" fill="none"/>
      <text x="24" y="0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="500" fill="#c44536">
        anurag629.github.io
      </text>
    </g>
  </g>

  <!-- Company badge -->
  <g transform="translate(950, 500)">
    <rect x="0" y="0" width="130" height="30" rx="15" fill="rgba(58,90,124,0.1)"/>
    <text x="65" y="20" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="500" fill="#3a5a7c">
      @DataWars
    </text>
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
