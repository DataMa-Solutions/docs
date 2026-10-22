import type { APIRoute } from 'astro';

const allowIndexing = process.env.ALLOW_INDEXING === 'true';

export const GET: APIRoute = () =>
	new Response(
		allowIndexing
			? 'User-agent: *\nAllow: /\n\nSitemap: https://docs.datama.io/sitemap-index.xml\n'
			: 'User-agent: *\nDisallow: /\n',
		{ headers: { 'Content-Type': 'text/plain' } },
	);
