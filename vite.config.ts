import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "^/scraper/.*": {
        target: process.env["SCRAPER_URL"]
          ? process.env["SCRAPER_URL"]
          : "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/scraper/, ""),
      },
    },
  },
});
