import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error("site is not defined in astro.config.mjs");
  }

  // Get all projects from the content collection
  const projects = await getCollection("projects");

  // Create sitemap entries
  const pages = [
    {
      changefreq: "weekly",
      lastmod: new Date(),
      priority: 1.0,
      url: site.toString(),
    },
    // Add project pages - extract slug from the file path
    ...projects.map((project) => {
      // Extract slug from the file path (e.g., "adventjs.md" -> "adventjs")
      const slug = project.id.replace(".md", "");
      return {
        changefreq: "monthly",
        lastmod: project.data.date || new Date(),
        priority: 0.8,
        url: `${site}projects/${slug}/`,
      };
    }),
  ];

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod.toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
    status: 200,
  });
};
