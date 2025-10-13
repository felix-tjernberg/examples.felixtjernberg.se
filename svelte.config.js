import adapter from "@sveltejs/adapter-node"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: { runes: true },
	kit: {
		adapter: adapter(),
		alias: {
			$components: "src/lib/components",
			$compositions: "src/lib/compositions",
			$routes: "src/routes",
			$stylesheets: "src/lib/stylesheets",
			$utilities: "src/lib/utilities",
			$weblogs: "src/lib/weblogs",
		},
	},
	preprocess: vitePreprocess(),
}

export default config
