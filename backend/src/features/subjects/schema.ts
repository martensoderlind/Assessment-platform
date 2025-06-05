import {
  pgTable,
  uuid,
  timestamp,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { students, subjects, teachers } from "../students/schema";

export const assignments = pgTable("assignments", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  subjectId: uuid("subject_id")
    .notNull()
    .references(() => subjects.id),
  topic: varchar().notNull(),
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
