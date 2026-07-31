import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      caseStudy: z.object({
        challenge: z.string(),
        links: z
          .array(
            z.object({
              text: z.string(),
              url: z.string().url(),
            })
          )
          .optional(),
        results: z.array(z.string()),
        solution: z.string(),
      }),
      cover: image(),
      coverAlt: z.string(),
      date: z.date(),
      description: z.string(),
      logo: z.object({
        fallback: z.object({
          bgColor: z.string(),
          text: z.string().length(1),
        }),
        image: image(),
      }),
      name: z.string(),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
  projects,
};
