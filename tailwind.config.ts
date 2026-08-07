import type { Config } from "tailwindcss";

/**
 * Colours resolve through CSS custom properties so the light theme is a
 * variable swap on :root[data-theme] rather than a second set of classes.
 */
const config: Config = {
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "var(--void)",
        panel: "var(--panel)",
        rule: "var(--rule)",
        "rule-bright": "var(--rule-bright)",
        text: "var(--text)",
        dim: "var(--dim)",
        dimmer: "var(--dimmer)",
        signal: "var(--signal)",
        trace: "var(--trace)",
        ok: "var(--ok)",
        "on-signal": "var(--on-signal)",
      },
      fontFamily: {
        // No proportional face anywhere. Martian Mono is the display accent,
        // Plex Mono carries everything else.
        display: ["var(--font-martian)", "ui-monospace", "monospace"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
      },
      maxWidth: {
        shell: "72rem",
      },
      spacing: {
        rail: "3.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
