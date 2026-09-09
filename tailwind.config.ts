import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--paper) / <alpha-value>)",
        surface: "rgb(var(--paper-2) / <alpha-value>)",
        "surface-elevated": "rgb(var(--paper-3) / <alpha-value>)",
        foreground: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--ink-dim) / <alpha-value>)",
        accent: "rgb(var(--orange) / <alpha-value>)",
        "accent-deep": "rgb(var(--orange-deep) / <alpha-value>)",
        "accent-dim": "rgba(255, 77, 0, 0.1)",
        border: "var(--border)",
        "border-soft": "var(--border-soft)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "90rem",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;