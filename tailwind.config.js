/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["class", '[data-theme="dark"]'],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				preColor: "#263238",
			},
			backgroundColor: {
				Dbg: "000000",
				Dbg2: "#18181B",
				Dtab: "#252529",
				Dinput: "#161A22",
				BG: "#FAFAFA",
				BG2: "#FFFFFF",
				tab: "#FFFFFF",
			},
			textColor: {
				Dh1: "#e4e4e7",
				Dspan: "#9D9DA6",
				h1: "#27272A",
				span: "#71717a",
			},
		},
		screens: {
			xs: "500px",
			// => @media (min-width: 500px) { ... }

			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
