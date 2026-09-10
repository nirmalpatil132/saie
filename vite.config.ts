import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // For a GitHub Pages *project* page (username.github.io/saie/), keep this
  // as "/saie/". For a custom domain, a GitHub *user* page, or Vercel, set
  // it back to "/".
  base: mode === "production" ? "/saie/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
}));
