import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    time: z.string(),
    location: z.enum(['Melville', 'Commack']),
    ages: z.string().optional(),
    price: z.string().optional(),
    link: z.string().url().optional(),
    image: z.string().optional(),
  }),
});

const staff = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/staff' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: z.string().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { events, staff };
