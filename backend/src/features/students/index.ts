import express from "express";
import { Db } from "../../db";
import { createStudentRepository } from "./repository";

export function createStudentRouter(db: Db) {
  const repository = createStudentRepository(db);
  const router = express.Router();

  router.get("/", (req, res) => {
    res.json({ name: "mårten" });
  });

  router.post("/students", async (req, res) => {
    const { name, email, password, classId } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ error: "Name, Email and password are required." });
    }

    try {
      const { userId, studentId } = await repository.addStudent(
        name,
        email,
        password,
        classId
      );
      res.status(201).json({ userId, studentId });
    } catch (err: any) {
      if (err.code === "23505") {
        res.status(409).json({ error: "Email already in use." });
      }
      console.error("Failed to create student:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  router.get("/students", async (req, res) => {
    const students = await repository.getAllStudents();
    res.json(students);
  });

  router.get("/students/:studentId/", async (req, res) => {
    const id = req.params.studentId;
    const student = await repository.getStudent(id);
    res.json(student);
  });

  return router;
}
