import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      // 	primary: {
      // 		DEFAULT: 'hsl(var(--primary))',
      // 		foreground: 'hsl(var(--primary-foreground))'
      // 	},
      // 	secondary: {
      // 		DEFAULT: 'hsl(var(--secondary))',
      // 		foreground: 'hsl(var(--secondary-foreground))'
      // 	},
      // 	black: '#000000',
      // 	white: '#FFFFFF',
      // 	background: 'hsl(var(--background))',
      // 	foreground: 'hsl(var(--foreground))',
      // 	card: {
      // 		DEFAULT: 'hsl(var(--card))',
      // 		foreground: 'hsl(var(--card-foreground))'
      // 	},
      // 	popover: {
      // 		DEFAULT: 'hsl(var(--popover))',
      // 		foreground: 'hsl(var(--popover-foreground))'
      // 	},
      // 	muted: {
      // 		DEFAULT: 'hsl(var(--muted))',
      // 		foreground: 'hsl(var(--muted-foreground))'
      // 	},
      // 	accent: {
      // 		DEFAULT: 'hsl(var(--accent))',
      // 		foreground: 'hsl(var(--accent-foreground))'
      // 	},
      // 	destructive: {
      // 		DEFAULT: 'hsl(var(--destructive))',
      // 		foreground: 'hsl(var(--destructive-foreground))'
      // 	},
      // 	border: 'hsl(var(--border))',
      // 	input: 'hsl(var(--input))',
      // 	ring: 'hsl(var(--ring))',
      // 	chart: {
      // 		'1': 'hsl(var(--chart-1))',
      // 		'2': 'hsl(var(--chart-2))',
      // 		'3': 'hsl(var(--chart-3))',
      // 		'4': 'hsl(var(--chart-4))',
      // 		'5': 'hsl(var(--chart-5))'
      // 	}
      // },
      colors: {
        primary: "#EC2C36",
        secondary: "#131313",
        black: "#000000",
        white: "#FFFFFF",
      },
      maxWidth: {
        "2xl": "1280px",
      },
      maxWidth: {
        "2xl": "1280px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "10rem",
      },
    },
  },
  darkMode: ["class", "class"],
  plugins: [nextui(), require("tailwindcss-animate")],
};

export default config;