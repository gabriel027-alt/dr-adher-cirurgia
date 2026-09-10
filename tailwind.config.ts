import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clinical: {
          bg: "#070a10",
          obsidian: "#070a10",
          surface: "#0b0f19",
          card: "rgba(11, 15, 25, 0.75)",
          border: "rgba(30, 41, 59, 0.8)",
          borderGlow: "rgba(56, 189, 248, 0.3)",
        },
        titanium: {
          light: "#94a3b8",
          DEFAULT: "#475569",
          line: "#1e293b",
          dark: "#0f172a",
        },
        champagne: {
          light: "#f5e6b3",
          DEFAULT: "#cbb26a",
          dark: "#a38b46",
          accent: "#e2c275",
        },
        surgical: {
          cyan: "#38bdf8",
          blue: "#0ea5e9",
          teal: "#14b8a6",
          accent: "#38bdf8",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Cinzel", "Georgia", "Cambria", "'Times New Roman'", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        "surgical-glow": "0 0 25px -5px rgba(56, 189, 248, 0.2)",
        "cialitic-light": "0 0 50px -10px rgba(56, 189, 248, 0.12)",
        "gold-glow": "0 0 25px -5px rgba(203, 178, 106, 0.2)",
        "card-depth": "0 25px 50px -20px rgba(2, 6, 23, 0.85)",
      },
      backgroundImage: {
        "radial-surgical": "radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.1) 0%, rgba(7, 10, 16, 0) 70%)",
        "radial-card": "radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.06) 0%, rgba(11, 15, 25, 0) 65%)",
        "radial-gold": "radial-gradient(circle at 50% 0%, rgba(203, 178, 106, 0.08) 0%, rgba(11, 15, 25, 0) 65%)",
      },
      transitionTimingFunction: {
        "luxury-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
