import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg"],
	resolve: {
		alias: {
			"@": "/src",
		},
	},
});
