import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      cover: image(),
      coverAlt: z.string(),
      logo: z.object({
        image: image(),
        fallback: z.object({
          text: z.string().length(1),
          bgColor: z.string(),
        }),
      }),
      caseStudy: z.object({
        challenge: z.string(),
        solution: z.string(),
        results: z.array(z.string()),
        links: z
          .array(
            z.object({
              text: z.string(),
              url: z.string().url(),
            })
          )
          .optional(),
      }),
    }),
});

export const collections = {
  projects,
};
