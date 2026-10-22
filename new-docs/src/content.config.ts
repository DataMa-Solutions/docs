import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { ENVIRONMENT_IDS } from './lib/environments';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				// Environments this page applies to. Omitted = every environment.
				environments: z.array(z.enum(ENVIRONMENT_IDS)).optional(),
				// Product version that introduced the feature, shown as a tag ("4.2").
				since: z.string().regex(/^\d+\.\d+$/).optional(),
			}),
		}),
	}),
};
