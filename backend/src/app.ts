import express from "express";
import { createStudentRouter } from "./features/students";
import { db } from "./db";
import { createSubjectRouter } from "./features/subjects";

export function createApp() {
  const app = express();
  app.use(express.json());
  const studentFeature = createStudentRouter(db);
  const subjectFeature = createSubjectRouter(db);
  app.use("/", studentFeature, subjectFeature);

  return app;
}
