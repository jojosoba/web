// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const storySchema = z.object({
  title: z.string(),
  author: z.string().optional(),
  tags: z.array(z.string()),
  cover: z.string().optional(),
  slug: z.string(),
});

// 2. Define a `type` and `schema` for each collection
const storyCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: storySchema,
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  story: storyCollection,
};

export type Story = z.infer<typeof storySchema>;
