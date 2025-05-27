import { randomUUID } from "crypto";
import { Db } from "../../db";
import { students, users } from "./schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

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
    async addStudent(
      email: string,
      name: string,
      plainPassword: string,
      classId?: string
    ) {
      const userId = randomUUID();
      const studentId = randomUUID();
      const passwordHash = await bcrypt.hash(plainPassword, 10);

      await db.transaction(async (tx) => {
        await tx.insert(users).values({
          id: userId,
          email,
          name,
          passwordHash,
        });

        await tx.insert(students).values({
          id: studentId,
          userId,
          classId: classId ?? null,
        });
      });

      return { userId, studentId };
    },
  };
}
