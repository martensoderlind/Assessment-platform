// db/schema.ts
import {
  pgTable,
  uuid,
  text,
  timestamp,
  varchar,
  integer,
  boolean,
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

//class with students
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
  name: varchar("name", { length: 100 }).notNull().unique(),
  code: varchar().notNull(),
  credits: integer().notNull(),
});

export const enrolledSubjects = pgTable("enrolled_subjects", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  studentId: uuid("student_id")
    .notNull()
    .references(() => students.id),
  subjectId: uuid("subject_id")
    .notNull()
    .references(() => subjects.id),
  active: boolean("active").notNull().default(false),
});

export const lectures = pgTable("lectures", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  subjectId: uuid("subject_id")
    .notNull()
    .references(() => subjects.id),
  teacherId: uuid("teacher_id")
    .notNull()
    .references(() => teachers.id),
  topic: varchar().default(""),
  scheduledAt: timestamp("scheduled_at").notNull(),
  lectureType: varchar().notNull().default("Lecture"),
  createdAt: timestamp("created_at").defaultNow(),
});
