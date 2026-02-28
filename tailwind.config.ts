import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          base: "#09090b",
          elevated: "#0c0c0e",
          card: "#18181b",
        },
        surface: {
          DEFAULT: "rgba(255,255,255,0.03)",
          border: "rgba(255,255,255,0.08)",
        },
        accent: {
          cyan: "#06b6d4",
          violet: "#8b5cf6",
          green: "#22c55e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(6, 182, 212, 0.3)",
        "glow-violet": "0 0 40px -10px rgba(139, 92, 246, 0.3)",
        "glow-sm": "0 0 20px -5px rgba(6, 182, 212, 0.2)",
      },
      backgroundImage: {
        "gradient-accent":
          "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
