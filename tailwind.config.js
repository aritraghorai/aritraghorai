/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "var(--color-page)",
        pageAlt: "var(--color-page-alt)",
        surface: "var(--color-surface)",
        surfaceAlt: "var(--color-surface-alt)",
        borderSoft: "var(--color-border-soft)",
        textPrimary: "var(--color-text-primary)",
        textSecondary: "var(--color-text-secondary)",
        textMuted: "var(--color-text-muted)",
        myColor: "#0a192f",
        navy: "#0a192f",
        navyLight: "#112240",
        navyLighter: "#1d2d50",
        accent: "var(--color-accent)",
        accentDim: "var(--color-accent-dim)",
        slate: "var(--color-slate)",
        lightSlate: "var(--color-light-slate)",
        lightestSlate: "var(--color-lightest-slate)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
