import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/og-image-coreid': {
				target: process.env.CLOUDFLARE_PAGES_URL || 'https://coreid.link',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/og-image-coreid/, '/functions/og-image-coreid')
			},
			'/og-image-intro': {
				target: process.env.CLOUDFLARE_PAGES_URL || 'https://coreid.link',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/og-image-intro/, '/functions/og-image-intro')
			}
		}
	}
});
