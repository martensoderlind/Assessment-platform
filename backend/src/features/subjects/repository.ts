import { randomUUID } from "crypto";
import { Db } from "../../db";
import { and, eq } from "drizzle-orm";
import { enrolledSubjects, lectures, subjects } from "../students/schema";

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
    async addStudentToEnrolledSubjects(studentId: string, subjectId: string) {
      const enrolledSubjectId = randomUUID();
      await db.insert(enrolledSubjects).values({
        id: enrolledSubjectId,
        studentId,
        subjectId,
      });

      return { enrolledSubjectId };
    },
    async addLecture(
      subjectId: string,
      scheduledAt: Date,
      teacherId: string,
      lectureType: string,
      topic?: string
    ) {
      const date = new Date(scheduledAt);
      await db.insert(lectures).values({
        subjectId,
        teacherId,
        scheduledAt: date,
        topic: topic || undefined,
        lectureType,
      });
    },
    async updateEnrolledSubjectStatus(
      status: boolean,
      studentId: string,
      subjectId: string
    ) {
      await db
        .update(enrolledSubjects)
        .set({
          active: status,
        })
        .where(
          and(
            eq(enrolledSubjects.studentId, studentId),
            eq(enrolledSubjects.subjectId, subjectId)
          )
        );
    },
  };
}
