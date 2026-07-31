import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  integrations: [mdx(), react()],
  markdown: {
    shikiConfig: {
      themes: {
        dark: "github-dark",
        light: "github-light",
      },
    },
  },
  site: "https://polaris-six-rust.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
