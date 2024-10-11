import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Use vitePreprocess as defined by the SvelteKit documentation
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),

		// Vite server configuration
		vite: {
			server: {
				proxy: {
					'/og-image-coreid': {
						target: process.env.CLOUDFLARE_PAGES_URL,
						changeOrigin: true,
						rewrite: (path) => path.replace(/^\/og-image-coreid/, '/functions/og-image-coreid')
					},
					'/og-image-intro': {
						target: process.env.CLOUDFLARE_PAGES_URL,
						changeOrigin: true,
						rewrite: (path) => path.replace(/^\/og-image-intro/, '/functions/og-image-intro')
					}
				}
			}
		}
	}
};

export default config;
