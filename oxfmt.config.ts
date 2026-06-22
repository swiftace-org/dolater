import { defineConfig } from "oxfmt"

export default defineConfig({
  ignorePatterns: ["src/routeTree.gen.ts", "src/components/ui"],
  semi: false,
  sortImports: true,
})
