import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sassDts from "vite-plugin-sass-dts";
import path from "path";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles" as common;`,
        importer(...args) {
          if (args[0] !== "@/styles") {
            return;
          }

          return {
            file: `${path.resolve(__dirname, "./src/assets/styles")}`,
          };
        },
      },
    },
  },
  plugins: [react(), sassDts({})],
});
