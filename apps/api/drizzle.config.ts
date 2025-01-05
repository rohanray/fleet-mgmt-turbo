import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";
config({ path: '.env.local' }); // or .env.local

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema/index.ts",
  dialect: "turso",
  casing: "snake_case",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
    authToken: process.env.DATABASE_AUTH_TOKEN || "asd",
  },
});
