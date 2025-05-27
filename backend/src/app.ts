import express from "express";
import { createStudentRouter } from "./features/students";
import { db } from "./db";

export function createApp() {
  const app = express();
  app.use(express.json());
  const studentFeature = createStudentRouter(db);
  app.use("/", studentFeature);

  return app;
}
