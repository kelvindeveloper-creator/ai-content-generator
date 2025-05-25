import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
 dbCredentials: {
    url: 'postgresql://neondb_owner:npg_JGwlqa9x4LIT@ep-winter-math-a5qd53zb-pooler.us-east-2.aws.neon.tech/Ai%20Content%20Generator?sslmode=require',
  },
});
