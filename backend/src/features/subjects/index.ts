import express from "express";
import { Db } from "../../db";
import { createStudentRepository } from "./repository";
import { Codes } from "../../types/types";

export function createSubjectRouter(db: Db) {
  const repository = createStudentRepository(db);
  const router = express.Router();

  router.get("/subjects", async (req, res) => {
    const subjects = await repository.getAllSubjects();
    res.json(subjects);
  });

  router.get("/subjects/:subjectId/", async (req, res) => {
    const id = req.params.subjectId;
    const subject = await repository.getSubject(id);
    res.json(subject);
  });

  router.post("/subjects", async (req, res) => {
    const { name, credits } = req.body;
    if (!name || !credits) {
      res.status(400).json({ error: "name & credits are required." });
    }

    try {
      const code = Codes[name as keyof typeof Codes];
      const { subjectId } = await repository.addSubject(name, code, credits);
      res.status(201).json({ subjectId });
    } catch (err: any) {
      if (err.code === "23505") {
        res.status(409).json({ error: "subject already exist." });
      }
      console.error("Failed to create subject:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  router.post("/subjects/:subjectId", async (req, res) => {
    const { studentId } = req.body;
    const subjectId = req.params.subjectId;
    if (!studentId) {
      res.status(400).json({ error: "student is required." });
    }

    try {
      const { enrolledSubjectId } =
        await repository.addStudentToEnrolledSubjects(studentId, subjectId);
      res.status(201).json({ enrolledSubjectId });
    } catch (err: any) {
      if (err.code === "23505") {
        res.status(409).json({ error: "student already enrolled in subject." });
      }
      console.error("Failed to add student to subject:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  router.patch("/subjects/:subjectId", async (req, res) => {
    const { studentId, status } = req.body;
    const subjectId = req.params.subjectId;
    if (!studentId || !status) {
      res.status(400).json({ error: "student & status is required." });
    }
    try {
      await repository.updateEnrolledSubjectStatus(
        status,
        studentId,
        subjectId
      );
      res.status(201).json({ message: "status updated" });
    } catch (err: any) {
      if (err.code === "23505") {
        res.status(409).json({ error: "student already enrolled in subject." });
      }
      console.error("Failed to add student to subject:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  router.post("/subjects/:subjectId/lecture", async (req, res) => {
    const { teacherId, scheduledAt, lectureType, topic } = req.body;
    const subjectId = req.params.subjectId;
    if (!scheduledAt || !teacherId) {
      res.status(400).json({ error: "a time and a teacher is required." });
    }
    try {
      await repository.addLecture(
        subjectId,
        scheduledAt,
        teacherId,
        lectureType,
        topic
      );
      res.status(201).json({ message: "lecture added to subject" });
    } catch (err: any) {
      console.error("Failed to add lecture to subject:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  router.post("/subjects/:subjectId/assignments", async (req, res) => {
    const { topic, scheduledAt, endDate, studentId } = req.body;
    const subjectId = req.params.subjectId;
    if (!scheduledAt || !studentId || !endDate) {
      res
        .status(400)
        .json({ error: "a valid student and a start/endtime is required." });
    }
    try {
      await repository.addAssignment(
        subjectId,
        studentId,
        scheduledAt,
        endDate,
        topic
      );
      res.status(201).json({ message: "Assignment added to subject" });
    } catch (err: any) {
      console.error("Failed to add lecture to subject:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  return router;
}
