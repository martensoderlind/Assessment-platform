import express from "express";
import { Db } from "../../db";
import { createStudentRepository } from "./repository";
import { Codes } from "../../types/types";

export function createSubjectRouter(db: Db) {
  const repository = createStudentRepository(db);
  const router = express.Router();

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

  router.get("/subjects", async (req, res) => {
    const subjects = await repository.getAllSubjects();
    res.json(subjects);
  });

  router.get("/subjects/:subjectId/", async (req, res) => {
    const id = req.params.subjectId;
    const subject = await repository.getSubject(id);
    res.json(subject);
  });

  return router;
}
