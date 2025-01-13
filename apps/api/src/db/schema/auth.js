import { integer, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const users = sqliteTable("users", {
    id: text()
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    fname: text().notNull(),
    lname: text().notNull(),
    email: text().unique().notNull(),
    emailVerified: integer({ mode: "timestamp_ms" }),
    image: text(),
});
export const accounts = sqliteTable("accounts", {
    userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
}, (t) => [primaryKey({ columns: [t.userId, t.providerAccountId] })]);
export const sessions = sqliteTable("sessions", {
    sessionToken: text("sessionToken").primaryKey(),
    userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
});
export const verificationTokens = sqliteTable("verificationTokens", {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
}, (t) => [primaryKey({ columns: [t.identifier, t.token] })]);
export const authenticators = sqliteTable("authenticators", {
    credentialID: text("credentialID").notNull().unique(),
    userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccountId").notNull(),
    credentialPublicKey: text("credentialPublicKey").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credentialDeviceType").notNull(),
    credentialBackedUp: integer("credentialBackedUp", {
        mode: "boolean",
    }).notNull(),
    transports: text("transports"),
}, (t) => [primaryKey({ columns: [t.userId, t.credentialID] })]);
