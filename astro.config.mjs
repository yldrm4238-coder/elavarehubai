import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.elevarehub.ai",
  trailingSlash: "always",
  build: { format: "directory", inlineStylesheets: "auto" },
  image: { layout: "constrained" },
});
