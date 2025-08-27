/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			// Your custom theme extensions will be handled by @theme in CSS
		},
	},
	plugins: [require("daisyui")],
	// DaisyUI configuration
	daisyui: {
		themes: false, // Disable DaisyUI themes to prevent conflicts
		darkTheme: false, // Disable dark theme
		base: true, // Enable DaisyUI base styles
		utils: true, // Keep utility classes
		logs: false, // Disable console logs
		rtl: false, // Disable RTL support
		prefix: "", // No prefix for DaisyUI classes
		styled: true, // Keep component styling
		themeRoot: ":root", // Theme CSS variables root
	},
};
