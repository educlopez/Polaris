import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [mdx(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
