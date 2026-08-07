"use client";

import { useEffect, useState } from "react";
import { identity, links } from "@/data/profile";

/**
 * Under static export `new Date()` runs at build time, so a server-rendered
 * year freezes until the next deploy. Render the build year for SSR, then
 * correct it on mount.
 */
const BUILD_YEAR = new Date().getFullYear();

export default function Footer() {
  const [year, setYear] = useState(BUILD_YEAR);

  useEffect(() => {
    const actual = new Date().getFullYear();
    if (actual !== BUILD_YEAR) setYear(actual);
  }, []);

  return (
    <footer className="border-t border-rule py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-2xs text-dim">
          © {year} {identity.name}
        </p>

        <nav aria-label="Elsewhere">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {[
              ["GitHub", links.github],
              ["LinkedIn", links.linkedin],
              ["X", links.x],
              ["dev.to", links.devto],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap inline-block min-w-[44px] py-3 text-center font-mono text-2xs text-dim transition-colors hover:text-signal"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-mono text-2xs text-dimmer">
          Next.js · static export · GitHub Pages
        </p>
      </div>
    </footer>
  );
}
