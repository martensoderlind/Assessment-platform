import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { CheckCircle, ChevronRight } from "lucide-react";
import { colors, gradeColors, type CompletedCourse } from "../type";

type Props = {
  completedCourses: CompletedCourse[];
};

export default function CompletedCourses({ completedCourses }: Props) {
  const getColorClass = (color: keyof typeof colors) => {
    return colors[color] || "bg-gray-50 text-gray-700";
  };

  const getGradeColor = (grade: keyof typeof gradeColors) => {
    return gradeColors[grade] || "bg-gray-100 text-gray-800";
  };
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {completedCourses.map((course) => (
        <Link key={course.id} to={`/profile/courses`}>
          <Card className="bg-white border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge
                  className={getColorClass(course.color as keyof typeof colors)}
                >
                  {course.code}
                </Badge>
                <Badge
                  className={getGradeColor(
                    course.grade as keyof typeof gradeColors
                  )}
                >
                  Grade: {course.grade}
                </Badge>
              </div>
              <CardTitle className="text-lg">{course.title}</CardTitle>
              <CardDescription className="text-gray-600">
                Teacher: {course.teacher}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Completed:</span>
                  <span className="text-gray-900">{course.completedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Credits:</span>
                  <span className="text-gray-900">{course.credits}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Completed</span>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
