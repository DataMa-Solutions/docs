// The environments a reader can pick in the sidebar. `id` is what pages list in
// their `environments` frontmatter and what the product passes as `?env=`.
export const ENVIRONMENTS = [
	{ id: 'webapp', label: 'Web app' },
	{ id: 'looker', label: 'Looker Studio' },
	{ id: 'tableau', label: 'Tableau' },
	{ id: 'powerbi', label: 'Power BI' },
	{ id: 'qlik', label: 'Qlik' },
	{ id: 'excel', label: 'Excel' },
	{ id: 'gsheet', label: 'Google Sheets' },
	{ id: 'ai-skill', label: 'AI Skill' },
] as const;

export type EnvironmentId = (typeof ENVIRONMENTS)[number]['id'];

export const ENVIRONMENT_IDS = ENVIRONMENTS.map((env) => env.id) as [EnvironmentId, ...EnvironmentId[]];

export const environmentLabel = (id: string) => ENVIRONMENTS.find((env) => env.id === id)?.label ?? id;
