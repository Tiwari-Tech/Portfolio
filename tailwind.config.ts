import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#f5f7fb",
        paper: "#050508",
        moss: "#8fb66b",
        coral: "#2979FF",
        cyan: "#2979FF",
        neon: "#82B1FF",
        steel: "#9aa8b8",
        gold: "#f0bd62",
        night: "#050508",
        panel: "#0B0B12",
        blueSurface: "#0D1E3A"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 24px #2979FF33"
      }
    }
  },
  plugins: []
};

export default config;
