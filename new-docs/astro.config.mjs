// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Same rule as public-website: indexing is off unless the build sets ALLOW_INDEXING=true
// (Production environment only on Cloudflare).
const allowIndexing = process.env.ALLOW_INDEXING === 'true';

export default defineConfig({
	site: 'https://docs.datama.io',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'DataMa Documentation',
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				fr: { label: 'Français', lang: 'fr' },
			},
			head: allowIndexing
				? []
				: [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' } }],
			sidebar: [
				{ label: 'Get started', items: [{ autogenerate: { directory: 'start' } }] },
				{
					label: 'Solutions',
					items: [
						{ label: 'Compare', items: [{ autogenerate: { directory: 'solutions/compare' } }] },
						{ label: 'Detect', items: [{ autogenerate: { directory: 'solutions/detect' } }] },
					],
				},
				{ label: 'Data', items: [{ autogenerate: { directory: 'data' } }] },
				{ label: 'Integrations', items: [{ autogenerate: { directory: 'integrations' } }] },
				{ label: 'Guides', items: [{ autogenerate: { directory: 'guides' } }] },
				{ label: 'Administration', items: [{ autogenerate: { directory: 'admin' } }] },
				{ label: 'Reference', items: [{ autogenerate: { directory: 'reference' } }] },
				{ label: 'Legal', collapsed: true, items: [{ autogenerate: { directory: 'legal' } }] },
			],
		}),
	],
});
