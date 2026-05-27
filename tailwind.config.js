/** @type {import('tailwindcss').Config} */
module.exports = {
  // Light mode is now the default surface. The "dark" class is intentionally
  // left configured so individual surfaces (e.g. modals over photos) can opt in.
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm ivory base — keeps the room feeling sunlit, not sterile.
        ivory: {
          DEFAULT: "#FDFBF7",
          50:  "#FFFFFF",
          100: "#FDFBF7",
          200: "#F8F3EA",
          300: "#F0E7D5",
          400: "#E5D5A8",
        },

        // Warm off-white — used as dark-theme foreground text.
        cream: {
          DEFAULT: "#FDF6E2",
          50:  "#FFFFFF",
          100: "#FDF6E2",
          200: "#F8F3EA",
          300: "#F0E7D5",
        },

        // ── Burgundy accent system ─────────────────────────────────
        // Single brand accent. `burgundy.DEFAULT` (= 600) is the spec #5C1A1B.
        burgundy: {
          DEFAULT: "#5C1A1B",
          50:  "#FBEEEF",
          100: "#F8D7DA",
          200: "#ECA9AE",
          300: "#DC7780",
          400: "#C04050",
          500: "#8E2530",
          600: "#5C1A1B",
          700: "#4A1416",
          800: "#381012",
          900: "#25090C",
        },

        // Backwards-compat aliases — `gold-*`, `neon-*`, `ember-*` classes still
        // resolve, but now render burgundy. New code should use `burgundy-*`.
        gold: {
          DEFAULT: "#5C1A1B",
          50:  "#FBEEEF",
          100: "#F8D7DA",
          200: "#ECA9AE",
          300: "#DC7780",
          400: "#C04050",
          500: "#8E2530",
          600: "#5C1A1B",
          700: "#4A1416",
          800: "#381012",
          900: "#25090C",
        },

        neon: {
          DEFAULT: "#5C1A1B",
          soft: "#5C1A1Bcc",
          dim: "#8E2530",
        },

        ember: {
          400: "#DC7780",
          500: "#C04050",
          600: "#8E2530",
          700: "#4A1416",
        },

        // Dark surface palette — burgundy-tinted near-blacks. Replaces the
        // old chocolate "obsidian" tones so the dark theme stays in-family.
        obsidian: {
          950: "#0F0708",
          900: "#15090B",
          850: "#1A0E10",
          800: "#221216",
          700: "#2E181D",
        },
      },

      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },

      boxShadow: {
        // ── Glass shadows (soft, elegant) ──────────────────────────
        glass:    "0 8px 30px rgb(0, 0, 0, 0.04)",
        "glass-lg": "0 12px 48px rgb(0, 0, 0, 0.06)",
        "glass-xl": "0 24px 64px rgb(0, 0, 0, 0.08)",

        // ── Burgundy accents ───────────────────────────────────────
        burgundy:      "0 4px 14px rgba(92, 26, 27, 0.35), 0 0 1px rgba(92, 26, 27, 0.6)",
        "burgundy-soft": "0 2px 10px rgba(92, 26, 27, 0.18)",
        "burgundy-lg": "0 8px 32px rgba(92, 26, 27, 0.40)",
        "burgundy-inset": "inset 0 0 16px rgba(92, 26, 27, 0.10)",

        // ── Aliases — old gold/neon shadow tokens now resolve burgundy ─
        gold:      "0 4px 14px rgba(92, 26, 27, 0.35), 0 0 1px rgba(92, 26, 27, 0.6)",
        "gold-soft": "0 2px 10px rgba(92, 26, 27, 0.18)",
        "gold-lg": "0 8px 32px rgba(92, 26, 27, 0.40)",
        "gold-inset": "inset 0 0 16px rgba(92, 26, 27, 0.10)",
        neon:        "0 4px 14px rgba(92, 26, 27, 0.35), 0 0 1px rgba(92, 26, 27, 0.6)",
        "neon-soft": "0 2px 10px rgba(92, 26, 27, 0.18)",
        "neon-inset":"inset 0 0 16px rgba(92, 26, 27, 0.10)",
      },

      keyframes: {
        // Burgundy pulse — name preserved so existing `animate-pulse-glow` works.
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 8px rgba(92,26,27,0.30)" },
          "50%":      { boxShadow: "0 0 22px rgba(92,26,27,0.65)" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        // Slow drift for the ambient burgundy blobs in the layout backdrop.
        "ambient-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%":      { transform: "translate(20px, -30px) scale(1.05)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition:  "200% 0" },
        },
      },

      animation: {
        "pulse-glow":   "pulse-glow 2.4s ease-in-out infinite",
        "float-y":      "float-y 4s ease-in-out infinite",
        "ambient-drift":"ambient-drift 18s ease-in-out infinite",
        shimmer:        "shimmer 6s linear infinite",
      },

      backgroundImage: {
        // Soft burgundy radial — replaces the gold version.
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(92, 26, 27, 0.08), transparent 60%)",
        noise:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/></svg>\")",
      },
    },
  },
  plugins: [],
};
