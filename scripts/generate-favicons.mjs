import { join } from "path";
import { writeFile, readFile } from "fs/promises";

const EMOJI = "⚡";

// Minimal: emoji only on white for clear visibility in browser tabs
const svgTemplate = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#ffffff"/>
  <text x="50" y="72" text-anchor="middle" font-size="65" font-family="Apple Color Emoji, Segoe UI Emoji, sans-serif">${EMOJI}</text>
</svg>
`.trim();

async function generateFavicons() {
  const publicDir = join(process.cwd(), "public");

  try {
    const sharp = (await import("sharp")).default;

    // Generate PNG icons at various sizes
    const sizes = [
      { name: "apple-touch-icon.png", size: 180 },
      { name: "icon-192.png", size: 192 },
      { name: "icon-512.png", size: 512 },
      { name: "favicon.png", size: 32 },
      { name: "favicon-32.png", size: 32 },
      { name: "favicon-16.png", size: 16 },
    ];

    for (const { name, size } of sizes) {
      const svg = svgTemplate(size);
      const png = await sharp(Buffer.from(svg))
        .resize(size, size)
        .png()
        .toBuffer();
      await writeFile(join(publicDir, name), png);
      console.log(`✓ Generated ${name}`);
    }

    // Create favicon.ico from 16 and 32 size PNGs
    try {
      const pngToIco = (await import("png-to-ico")).default;
      const png32 = await readFile(join(publicDir, "favicon-32.png"));
      const png16 = await readFile(join(publicDir, "favicon-16.png"));
      const ico = await pngToIco([png16, png32]);
      await writeFile(join(publicDir, "favicon.ico"), ico);
      console.log("✓ Generated favicon.ico");
    } catch (e) {
      const png32 = await readFile(join(publicDir, "favicon-32.png"));
      await writeFile(join(publicDir, "favicon.ico"), png32);
      console.log("✓ Generated favicon.ico (PNG fallback)");
    }

    // Clean up temporary files (keep favicon.png)
    try {
      const { unlink } = await import("fs/promises");
      await unlink(join(publicDir, "favicon-32.png"));
      await unlink(join(publicDir, "favicon-16.png"));
    } catch (_) {}
  } catch (error) {
    console.error("Error generating favicons:", error.message);
    throw error;
  }
}

generateFavicons().catch(console.error);
