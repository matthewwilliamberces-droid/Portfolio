import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    isPrivate: z.boolean().default(false),
    role: z.string().default('Lead Engineer'),
    impact: z.string().optional(),
    order: z.number().default(0),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    companyUrl: z.string().optional(),
    startDate: z.string(),
    endDate: z.string(),
    current: z.boolean().default(false),
    location: z.string(),
    order: z.number().default(0),
    highlights: z.array(z.string()),
  }),
});

export const collections = {
  projects,
  experience,
};
