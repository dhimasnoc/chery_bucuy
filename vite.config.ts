import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
const repoName = "chery_bucuy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: `/${repoName}/`,
});
