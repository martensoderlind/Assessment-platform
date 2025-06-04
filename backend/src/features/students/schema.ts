// db/schema.ts
import {
  pgTable,
  uuid,
  text,
  timestamp,
  varchar,
  integer,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const users = pgTable("users", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: varchar().notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const classes = pgTable("classes", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: varchar("name", { length: 100 }).notNull(),
});

export const students = pgTable("students", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  classId: uuid("class_id").references(() => classes.id),
});

export const teachers = pgTable("teachers", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
});

export const subjects = pgTable("subjects", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: varchar("name", { length: 100 }).notNull(),
  code: varchar().notNull(),
  credits: integer().notNull(),
});

export const lectures = pgTable("lectures", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  classId: uuid("class_id")
    .notNull()
    .references(() => classes.id),
  subjectId: uuid("subject_id")
    .notNull()
    .references(() => subjects.id),
  teacherId: uuid("teacher_id")
    .notNull()
    .references(() => teachers.id),
  scheduledAt: timestamp("scheduled_at").notNull(),
});
