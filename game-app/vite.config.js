import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Built as a fixed-name ES module so the 11ty site can reference it at a
// stable path (/assets/game/game.js) without reading a Vite manifest.
export default defineConfig({
  plugins: [vue()],
  define: {
    // Vite's lib build target doesn't get an <html> entry to inject env
    // replacements into, so Vue's runtime is left with a literal
    // `process.env.NODE_ENV` check that throws in a browser. Replace it here.
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    outDir: "dist",
    cssCodeSplit: false,
    lib: {
      entry: "src/main.js",
      formats: ["es"],
      fileName: () => "game.js",
    },
    rollupOptions: {
      output: {
        assetFileNames: "game.[ext]",
      },
    },
  },
});
