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
    <footer className="border-t border-rule py-6 font-mono text-2xs">
      <p className="text-dim">
        <span className="prompt-sigil" aria-hidden="true">
          ${" "}
        </span>
        exit
      </p>

      <p className="mt-2 text-dimmer">
        logout · connection to anurag@github closed.
      </p>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-dimmer">
          © {year} {identity.name} · built with Next.js, exported static,
          served by GitHub Pages
        </p>

        <nav aria-label="Elsewhere">
          <ul className="flex flex-wrap gap-x-4">
            {[
              ["github", links.github],
              ["linkedin", links.linkedin],
              ["x", links.x],
              ["dev.to", links.devto],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap inline-block min-w-[44px] py-3 text-center text-dim transition-colors hover:text-signal"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
