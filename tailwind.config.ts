import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        alabaster: {
          50: "#FAFBF9",
          100: "#FAFBF9",
          200: "#F3F4F1",
          300: "#ECEDE8",
          400: "#E7E9E2",
          500: "#DFE1D8",
          600: "#CBCEC0",
          700: "#B1B6A0",
          800: "#92997A",
          900: "#6B7057",
          950: "#4A4E3C",
        },
        richblack: {
          50: "#F5F4F5",
          100: "#EAE7EA",
          200: "#CFC9CF",
          300: "#B0A5B0",
          400: "#887788",
          500: "#080708",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        argentinianblue: {
          50: "#F1F8FE",
          100: "#E7F3FD",
          200: "#CBE4FB",
          300: "#AFD5F8",
          400: "#8EC4F6",
          500: "#63ADF2",
          600: "#439CEF",
          700: "#1886EC",
          800: "#1171CA",
          900: "#0C5192",
          950: "#093A68",
        },
        lavenderpink: {
          50: "#FFFAFD",
          100: "#FFF5FA",
          200: "#FFEBF5",
          300: "#FFDBEE",
          400: "#FFD1E9",
          500: "#FFC2E2",
          600: "#FFA3D3",
          700: "#FF7ABF",
          800: "#FF339C",
          900: "#C70067",
          950: "#94004C",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
