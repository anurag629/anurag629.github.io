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
        paper: {
          light: "#faf8f5",
          DEFAULT: "#f5f1eb",
          dark: "#ebe5db",
          cream: "#fdfbf7",
        },
        ink: {
          light: "#4a4a4a",
          DEFAULT: "#2c2c2c",
          dark: "#1a1a1a",
          faded: "#6b6b6b",
        },
        pencil: {
          light: "#8b8b8b",
          DEFAULT: "#5c5c5c",
        },
        accent: {
          red: "#c44536",
          blue: "#3a5a7c",
          green: "#4a7c59",
          yellow: "#d4a03c",
        },
      },
      fontFamily: {
        handwriting: ["Caveat", "cursive"],
        sketch: ["Kalam", "cursive"],
        body: ["Nunito", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "paper-texture": "url('/textures/paper.png')",
        "lined-paper": "repeating-linear-gradient(transparent, transparent 31px, #e5e1d8 31px, #e5e1d8 32px)",
      },
      boxShadow: {
        "paper": "2px 2px 8px rgba(0,0,0,0.1), -1px -1px 4px rgba(255,255,255,0.5)",
        "paper-hover": "4px 4px 12px rgba(0,0,0,0.15), -2px -2px 6px rgba(255,255,255,0.6)",
        "sticky": "2px 2px 6px rgba(0,0,0,0.15)",
      },
      animation: {
        "pencil-write": "pencilWrite 0.5s ease-out",
        "paper-float": "paperFloat 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        pencilWrite: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        paperFloat: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-5px) rotate(0.5deg)" },
        },
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
