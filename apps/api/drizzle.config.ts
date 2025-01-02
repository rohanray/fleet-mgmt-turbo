import { defineConfig } from "drizzle-kit";

// only used to create migrations
// we use wrangler to apply migrations (see package.json)
export default defineConfig({
  out: "./db/migrations",
  schema: "./db/schema/index.ts",
  dialect: "turso",
  casing: "snake_case"
});
