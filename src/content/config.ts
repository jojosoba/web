// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const storySchema = z.object({
  title: z.string(),
  author: z.string().optional(),
  tags: z.array(z.string()),
  cover: z.string().optional(),
  slug: z.string(),
});
const menuSchema = z.object({
  name: z.string(),
  tags: z.array(z.string()),
  cover: z.string().optional(),
  slug: z.string(),
  isVegan: z.boolean(),
  cal: z.number(),
  ingredients: z.array(z.string()),
  price: z.number(),
});

// 2. Define a `type` and `schema` for each collection
const storyCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: storySchema,
});
const menuCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: menuSchema,
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  story: storyCollection,
  menu: menuCollection,
};

export type Story = z.infer<typeof storySchema>;
