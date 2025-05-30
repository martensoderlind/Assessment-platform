import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import CourseCard from "./course-card";
import { Link } from "@tanstack/react-router";

export default function MyCourses() {
  const Courses = [
    {
      id: "1",
      name: "Math 3",
      abbreviation: "MA3",
      lecture: {
        id: "1",
        subjectId: "1",
        date: new Date(),
        subject: "Derivata",
        teacher: "Erik Lindqvist",
      },
      exams: new Date(),
    },
    {
      id: "2",
      name: "Svenska 2",
      abbreviation: "SV2",
      lecture: {
        id: "1",
        subjectId: "1",
        date: new Date(),
        subject: "Romananalys",
        teacher: "Maria Andersson",
      },
      exams: new Date(),
    },
  ];
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">My Courses</h3>
        <Link to={"/profile/courses"}>
          <div className="flex flex-row">
            <span>Show all</span>
            <ChevronRight className="ml-1 h-4 w-4" />
          </div>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {Courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </section>
  );
}
