// db/schema.ts
import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  varchar,
  primaryKey,
  foreignKey,
  unique,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  classId: integer("class_id").references(() => classes.id),
});

export const teachers = pgTable("teachers", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
});

export const classes = pgTable("classes", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
});

export const subjects = pgTable("subjects", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  abbreviation: varchar().notNull(),
});

export const lectures = pgTable("lectures", {
  id: serial("id").primaryKey(),
  classId: integer("class_id")
    .notNull()
    .references(() => classes.id),
  subjectId: integer("subject_id")
    .notNull()
    .references(() => subjects.id),
  teacherId: integer("teacher_id")
    .notNull()
    .references(() => teachers.id),
  scheduledAt: timestamp("scheduled_at").notNull(),
});
