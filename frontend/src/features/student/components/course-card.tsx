import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Course } from "../types";

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-blue-50 text-blue-700">
            {course.abbreviation}
          </Badge>
          <span className="text-sm text-gray-500">
            {course.lecture.date.toDateString()}
          </span>
        </div>
        <CardTitle className="text-base">{course.name}</CardTitle>
        <CardDescription>Teacher: {course.lecture.teacher}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Next lecture:</span>
            <span className="text-gray-900">{course.lecture.subject}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">upcoming exam:</span>
            <span className="text-red-600">{course.exams.toDateString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
