import { defineCollection, z } from "@nuxt/content";

export const collections = {
  content: defineCollection({
    type: 'page',
    source: '*.md',
    schema: z.object({
      layout: z.string()
    })
  }),
  blog: defineCollection({
    type: 'page',
    source: {
      path: 'blog/**/*.md',
      prefix: '/blog'
    },
    schema: z.object({
      layout: z.string().default('post'),
      tags: z.array(z.string()),
      featured: z.boolean(),
      card_image: z.string(),
      cover: z.string(),
    })
  }),
  directory: defineCollection({
    type: 'page',
    source: {
      path: 'dir/**/*.md',
      prefix: '/dir'
    },
    schema: z.object({
      cover: z.string(),
      card_image: z.string().optional(),
      featured: z.boolean(),
      tags: z.array(z.string()),
    })
  })
}