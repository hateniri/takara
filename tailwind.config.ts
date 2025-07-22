import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        takara: {
          black: "#0A0A0A",
          navy: "#0F1B3C",
          gold: "#D4AF37",
          cream: "#FFF8E1",
        },
      },
      fontFamily: {
        mincho: ["source-han-serif-japanese", "serif"],
        avenir: ["avenir-next", "sans-serif"],
        acumin: ["acumin-pro", "sans-serif"],
      },
      animation: {
        "ripple": "ripple 2s ease-out",
        "magnetic-field": "magneticField 3s ease-in-out infinite",
        "noise": "noise 0.2s infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        magneticField: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.1) rotate(180deg)" },
        },
        noise: {
          "0%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-1%, -1%)" },
          "20%": { transform: "translate(1%, 1%)" },
          "30%": { transform: "translate(-1%, 1%)" },
          "40%": { transform: "translate(1%, -1%)" },
          "50%": { transform: "translate(0, 0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;