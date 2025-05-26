import express from "express";

const students = [
  { id: "1", name: "Mårten" },
  { id: "2", name: "Erik" },
  { id: "3", name: "Thomas" },
];
export function createStudentRouter() {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.json({ name: "mårten" });
  });

  router.post("/students", (req, res) => {});

  router.get("/students/:studentId/", (req, res) => {
    const id = req.params.studentId;
    const student = students.filter((student) => student.id === id);

    res.json(student);
  });

  return router;
}
