/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
	theme: {
		extend: {
			fontFamily: {
				Outfit: ["Outfit", "sans-serif"],
			},
		},
	},
	plugins: [],
};
