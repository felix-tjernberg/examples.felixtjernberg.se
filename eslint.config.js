import prettier from "eslint-config-prettier"
import { fileURLToPath } from "node:url"
import { includeIgnoreFile } from "@eslint/compat"
import js from "@eslint/js"
import svelte from "eslint-plugin-svelte"
import { defineConfig } from "eslint/config"
import globals from "globals"
import ts from "typescript-eslint"
import svelteConfig from "./svelte.config.js"

const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url))

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
		rules: {
			// typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
			// see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			"no-undef": "off",
		},
	},
	{
		files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
		languageOptions: {
			parserOptions: {
				extraFileExtensions: [".svelte"],
				parser: ts.parser,
				projectService: true,
				svelteConfig,
			},
		},
	},
	{
		rules: {
			"@typescript-eslint/ban-ts-comment": [
				"warn",
				{
					minimumDescriptionLength: 4,
					"ts-check": true,
					"ts-expect-error": "allow-with-description",
					"ts-ignore": true,
					"ts-nocheck": true,
				},
			],
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-unused-vars": "warn",
			"no-undef": "off",
			"no-useless-escape": "off",
			"sort-imports": ["warn", { allowSeparatedGroups: true, ignoreCase: true }],
			"sort-keys": ["warn", "asc", { caseSensitive: false, natural: true }],
			"sort-vars": "warn",
			"svelte/no-at-html-tags": "warn",
			"svelte/no-useless-mustaches": ["off", { ignoreStringEscape: true }], // DEBT figure out why ignoreStringEscape:true does not work
			"svelte/prefer-svelte-reactivity": "off",
			"svelte/require-each-key": "off",
		},
	},
)
