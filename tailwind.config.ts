import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#0F4C3A",
          light: "#1A5F4C",
          dark: "#0A3A2C",
          deep: "#072E22",
        },
        charcoal: {
          DEFAULT: "#2D3436",
          light: "#3D4648",
        },
        muted: {
          DEFAULT: "#4A5568",
          light: "#718096",
        },
        gold: {
          DEFAULT: "#D4A574",
          dark: "#C9984A",
          light: "#E4C9A8",
          muted: "#D4A57433",
        },
        cream: {
          DEFAULT: "#FAF8F5",
          dark: "#F0EDE8",
          mid: "#E8E4DE",
        },
        warm: {
          error: "#B87860",
          success: "#34D399",
        },
        surface: {
          DEFAULT: "#0F1419",
          raised: "#161B22",
          overlay: "#1C2128",
        },
      },
      fontFamily: {
        display: ["DM Serif Display", "Georgia", "serif"],
        body: ["Plus Jakarta Sans", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        hero: [
          "clamp(2.8rem, 5vw, 3.8rem)",
          { lineHeight: "1.12", letterSpacing: "-0.5px" },
        ],
        section: [
          "clamp(2rem, 3.5vw, 2.75rem)",
          { lineHeight: "1.2", letterSpacing: "-0.3px" },
        ],
      },
      borderRadius: {
        card: "12px",
        panel: "20px",
        pill: "28px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(15,76,58,0.08)",
        "card-hover": "0 8px 32px rgba(15,76,58,0.12)",
        elevated:
          "0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(15,76,58,0.08), 0 24px 64px rgba(15,76,58,0.04)",
        btn: "0 4px 16px rgba(15,76,58,0.25)",
        "btn-gold": "0 8px 24px rgba(212,165,116,0.3)",
        float: "0 4px 20px rgba(0,0,0,0.06)",
        "card-dark": "0 2px 8px rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.2)",
        "elevated-dark":
          "0 2px 8px rgba(0,0,0,0.4), 0 16px 48px rgba(0,0,0,0.3)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      animation: {
        "pulse-dot": "pulse-dot 2.5s ease-in-out infinite",
        "pulse-live": "pulse-dot 1.5s ease-in-out infinite",
        float: "float-gentle 4s ease-in-out infinite",
        "float-delayed": "float-gentle 4s ease-in-out 1.5s infinite",
        "scan-sweep": "scan-sweep 3s ease-in-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.85)" },
        },
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "scan-sweep": {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}

export default config
