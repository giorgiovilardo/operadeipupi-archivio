import { defineConfig } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/archivio/",
  plugins: [svelte(), tailwindcss()],
  test: {
    env: {
      VITE_API_BASE: "https://test.example.com/wp-json/wp/v2/",
    },
  },
});
