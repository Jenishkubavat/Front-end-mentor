/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {
			fontFamily: {
				Figtree: ["Figtree", "sans-serif"],

			},
      colors: {
        yellow:{
          250: 'hsl(47, 88%, 63%)',
        }
      }
		},
	},
	plugins: [],
};
