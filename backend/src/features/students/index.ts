import express from "express";
import { Db } from "../../db";
import { createStudentRepository } from "./repository";

export function createStudentRouter(db: Db) {
  const repository = createStudentRepository(db);
  const router = express.Router();

  router.get("/", (req, res) => {
    res.json({ name: "mårten" });
  });

  router.post("/students", (req, res) => {});

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
