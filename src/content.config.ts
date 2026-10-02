import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const md = (base: string) => glob({ pattern: '**/*.md', base });

const events = defineCollection({
  loader: md('./src/content/events'),
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
  loader: md('./src/content/staff'),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: z.string().optional(),
    order: z.number().default(100),
  }),
});

const pages = defineCollection({
  loader: md('./src/content/pages'),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    section: z.enum(['none', 'programs']).default('none'),
    order: z.number().default(100),
    image: z.string().optional(),
  }),
});

const testimonials = defineCollection({
  loader: md('./src/content/testimonials'),
  schema: z.object({ name: z.string(), detail: z.string().optional(), order: z.number().default(100) }),
});

export const collections = { events, staff, pages, testimonials };
