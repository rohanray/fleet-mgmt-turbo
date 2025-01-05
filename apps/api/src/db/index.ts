import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import Bun from "bun";

import * as schema from "@fleet-app/api/db/schema";

const client = createClient({
    url: Bun.env.DATABASE_URL || "",
    authToken: Bun.env.DATABASE_AUTH_TOKEN || "",
});

const db = drizzle(client, {
    schema,
});

export default db;
