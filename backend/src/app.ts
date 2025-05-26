import express from "express";
import { createStudentRouter } from "./features/students";

export function createApp() {
  const app = express();
  app.use(express.json());
  const studentFeature = createStudentRouter();
  app.use("/", studentFeature);

  return app;
}
