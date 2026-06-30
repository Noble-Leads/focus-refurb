// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  redirects: {
    "/refurbishment-london": {
      status: 301,
      destination: "/domestic/refurbishment-london",
    },
    "/painting-decorating-london": {
      status: 301,
      destination: "/domestic/painting-decorating-london",
    },
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
});
