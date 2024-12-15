/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
	theme: {
		extend: {
			colors: {
				green: {
					250: "hsl(75, 94%, 57%)",
				},
				gray: {
					700: " hsl(0, 0%, 20%)",
					800: " hsl(0, 0%, 12%)",
					900: " hsl(0, 0%, 8%)",
				},
			},
			fontFamily: {
				sans: ['"Inter"', "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui")],
};
