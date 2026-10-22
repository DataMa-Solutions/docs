import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import { getCollection } from 'astro:content';

type SidebarEntry = App.Locals['starlightRoute']['sidebar'][number];

// Stamps each sidebar link with the environments of the page it points to, so
// the client-side filter (EnvironmentScript.astro) can hide it.
let envsByHref: Map<string, string> | undefined;

async function loadEnvironments() {
	if (envsByHref) return envsByHref;
	envsByHref = new Map();
	for (const entry of await getCollection('docs')) {
		if (!entry.data.environments) continue;
		const href = `/${entry.id}/`.replace(/\/index\/$/, '/').replace(/^\/\/$/, '/');
		envsByHref.set(href, entry.data.environments.join(' '));
	}
	return envsByHref;
}

function stamp(entries: SidebarEntry[], envs: Map<string, string>) {
	for (const entry of entries) {
		if (entry.type === 'group') {
			stamp(entry.entries, envs);
			continue;
		}
		const pathname = new URL(entry.href, 'https://docs.invalid').pathname;
		const list = envs.get(pathname.replace(/^\/fr\//, '/'));
		if (list) entry.attrs['data-envs'] = list;
	}
}

export const onRequest = defineRouteMiddleware(async (context) => {
	stamp(context.locals.starlightRoute.sidebar, await loadEnvironments());
});
