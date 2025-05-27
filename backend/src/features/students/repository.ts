import { Db } from "../../db";
import { students } from "./schema";
import { eq } from "drizzle-orm";

export function createStudentRepository(db: Db) {
  return {
    async getAllStudents() {
      return await db.select().from(students);
    },
    async getStudent(id: string) {
      const student = await db
        .select()
        .from(students)
        .where(eq(students.id, id));
      return student;
    },
  };
}
