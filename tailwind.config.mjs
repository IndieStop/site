/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"node_modules/flowbite-react/lib/esm/**/*.{js,astro,jsx,tsx}",
	],

	theme: {
		extend: {
			colors: {
				brand: {
					base: "#161A1E",
					surface: "#FBFBFB",
					primary: "#E58E27",
					accent: "#C01C28",
				},
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
