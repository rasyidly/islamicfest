/** @type {import('tailwindcss').Config} */
import tailwindcssForms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
	theme: {
		extend: {
			fontFamily: {
				sans: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		tailwindcssForms,
		plugin(function ({ addVariant }) {
			addVariant("hocus", ["&:hover", "&:focus"]);
		}),
	],
};
