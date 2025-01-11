/* eslint-disable ts/no-redeclare */
import { z } from "zod";

import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export * from "./auth";

export const drivers = sqliteTable(
  "drivers",
  {
    id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    fname: text().notNull(),
    lname: text().notNull(),
    email: text().unique().notNull(),
    mobile: integer().unique().notNull(),
    license: text().unique().notNull(),
    license_expiration: integer({ mode: "timestamp" }).notNull(),
    mileage: integer().notNull(),
    image: text(),
    createdAt: integer("created_at", { mode: "timestamp" })
      .$defaultFn(() => new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" })
      .$defaultFn(() => new Date())
      .$onUpdate(() => new Date()),
  }
);

export const selectDriversSchema = createSelectSchema(drivers);

export type SelectDriversSchema = z.infer<typeof selectDriversSchema>;

export const insertDriversSchema = createInsertSchema(
  drivers,
  {
    mobile: z.number().min(1000000000).max(9999999999),
    license_expiration: z.coerce.date(),
  }
).required({
  email: true,
  mobile: true,
  license: true,
  license_expiration: true,
  fname: true,
  lname: true,
  mileage: true,
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertDriversSchema = z.infer<typeof insertDriversSchema>;

export const trucks = sqliteTable(
  "trucks",
  {
    id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    plate: text().unique().notNull(),
    make: text().notNull(),
    model: text().notNull(),
    year: integer().notNull(),
    starting_mileage: integer().notNull(),
    current_mileage: integer().notNull(),
    capacity: integer().notNull(),
    status: text().notNull(),
  }
);