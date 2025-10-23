import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Настройки для production
			fallback: 'index.html',
			precompress: true,
			strict: true
		})
	}
};

export default config;