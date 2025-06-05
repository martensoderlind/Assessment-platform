import { randomUUID } from "crypto";
import { Db } from "../../db";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import { subjects } from "../students/schema";

export function createStudentRepository(db: Db) {
  return {
    async getAllSubjects() {
      return await db.select().from(subjects);
    },
    async getSubject(id: string) {
      const student = await db
        .select()
        .from(subjects)
        .where(eq(subjects.id, id));
      return student;
    },
    async addSubject(name: string, code: string, credits: number) {
      const subjectId = randomUUID();

      await db.insert(subjects).values({
        id: subjectId,
        name,
        code,
        credits,
      });

      return { subjectId };
    },
  };
}
