import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error("site is not defined in astro.config.mjs");
  }

  // Get all projects from the content collection
  const projects = await getCollection("projects");

  // Create sitemap entries
  const pages = [
    {
      url: site.toString(),
      lastmod: new Date(),
      changefreq: "weekly",
      priority: 1.0,
    },
    // Add project pages - extract slug from the file path
    ...projects.map((project) => {
      // Extract slug from the file path (e.g., "adventjs.md" -> "adventjs")
      const slug = project.id.replace(".md", "");
      return {
        url: `${site}projects/${slug}/`,
        lastmod: project.data.date || new Date(),
        changefreq: "monthly",
        priority: 0.8,
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
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
