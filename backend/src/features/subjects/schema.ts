import {
  pgTable,
  uuid,
  timestamp,
  varchar,
  boolean,
  integer,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { students, teachers } from "../students/schema";

export const assignments = pgTable("assignments", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  subjectId: uuid("subject_id")
    .notNull()
    .references(() => subjects.id),
  studentId: uuid("student_id")
    .notNull()
    .references(() => students.id),
  topic: varchar().notNull(),
  completed: boolean("completed").notNull().default(false),
  scheduledAt: timestamp("scheduled_at").notNull(),
  endDate: timestamp("end_at").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const studentMessages = pgTable("student_messages", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  subjectId: uuid("subject_id")
    .notNull()
    .references(() => subjects.id),
  teacherId: uuid("teacher_id")
    .notNull()
    .references(() => teachers.id),
  studentId: uuid("student_id")
    .notNull()
    .references(() => students.id),
  topic: varchar().notNull(),
  message: timestamp("created_at").defaultNow(),
  read: boolean("read").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow(),
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
