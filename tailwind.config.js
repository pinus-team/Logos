/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
	mode: "jit",
	content: [
		"./views/**/*.{html,js,ejs}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		extend: {
			fontSize: {
				"2xs": ["0.625rem", "0.75rem"],
				"3xs": ["0.5rem", "0.625rem"],
			},
			height: {
				"full-with-nav": "calc(100vh - 4rem)",
			},
			colors: {
				"german-yellow": "#FFCC00",
				"news-primary": "#A3403A",
			},
			backgroundImage: {
				news: "url('/img/213123.jpg')",
				logos: "url('/svg/Logo.svg'), url('/svg/Logo2.svg')",
			},
		},
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		require("tw-elements/dist/plugin"),
		{
			tailwindcss: {},
			autoprefixer: {},
		},
	],
};
