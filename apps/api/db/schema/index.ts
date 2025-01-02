/* eslint-disable ts/no-redeclare */
import type { z } from "zod";

import { integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export * from "./auth";

export const drivers = sqliteTable(
  "drivers",
  {
    id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    fname: text().notNull(),
    lname: text().notNull(),
    email: text().unique().notNull(),
    mobile: text().unique().notNull(),
    license: text().unique().notNull(),
    license_expiration: integer({ mode: "timestamp" }).notNull(),
    mileage: integer().notNull(),
    image: text(),
  }
);

export const selectDriversSchema = createSelectSchema(drivers);
export type SelectDriversSchema = z.infer<typeof selectDriversSchema>;

// export const insertDriversSchema = createInsertSchema(
//   drivers,
//   {

//   }

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