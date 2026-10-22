// Fails if a slug in src/data/doc-links.json points at a page or an anchor
// that the build did not produce. Run after `npm run build`.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const links = JSON.parse(readFileSync(new URL('../src/data/doc-links.json', import.meta.url), 'utf8'));

const errors = [];
for (const [slug, target] of Object.entries(links)) {
	if (slug.startsWith('$')) continue;
	const [path, anchor] = target.split('#');
	const file = join(dist, path, 'index.html');
	if (!existsSync(file)) {
		errors.push(`${slug}: no page at ${path}`);
		continue;
	}
	if (anchor && !readFileSync(file, 'utf8').includes(`id="${anchor}"`)) {
		errors.push(`${slug}: ${path} has no anchor #${anchor}`);
	}
}

if (errors.length) {
	console.error(errors.join('\n'));
	process.exit(1);
}
console.log(`${Object.keys(links).length - 1} documentation links OK`);
