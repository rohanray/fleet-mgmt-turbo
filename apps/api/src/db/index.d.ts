import * as schema from "@fleet-app/api/db/schema";
declare const db: import("drizzle-orm/libsql").LibSQLDatabase<typeof schema> & {
    $client: import("@libsql/client").Client;
};
export default db;
//# sourceMappingURL=index.d.ts.map