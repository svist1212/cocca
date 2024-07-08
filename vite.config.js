import { defineConfig } from "vite";

export default defineConfig({
  root: './src',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "../build",
    emptyOutDir: true,
  },
});
