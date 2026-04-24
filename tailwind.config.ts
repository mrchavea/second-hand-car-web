import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-hanken)", "system-ui", "sans-serif"],
      },
      colors: {
        "c-bg": "var(--c-bg)",
        "c-surface": "var(--c-surface)",
        "c-border": "var(--c-border)",
        "c-text": "var(--c-text)",
        "c-text-2": "var(--c-text-2)",
        "c-text-3": "var(--c-text-3)",
        "c-accent": "var(--c-accent)",
      },
      letterSpacing: {
        display: "0.04em",
        label: "0.16em",
      },
    },
  },
  plugins: [],
}

export default config
