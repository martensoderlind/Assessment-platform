import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Users } from "lucide-react";
import { colors, type ActiveCourse } from "../type";

type Props = {
  activeCourses: ActiveCourse[];
};

export default function ActiveCourses({ activeCourses }: Props) {
  const getColorClass = (color: keyof typeof colors) => {
    return colors[color] || "bg-gray-50 text-gray-700";
  };
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {activeCourses.map((course) => (
        <Link key={course.id} to={`/profile/courses`}>
          <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge
                  className={getColorClass(course.color as keyof typeof colors)}
                >
                  {course.code}
                </Badge>
                <div className="flex items-center space-x-2">
                  {course.assignments > 0 && (
                    <Badge
                      variant="outline"
                      className="text-red-600 border-red-200"
                    >
                      {course.assignments} tasks
                    </Badge>
                  )}
                  {course.unreadMessages > 0 && (
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  )}
                </div>
              </div>
              <CardTitle className="text-lg">{course.title}</CardTitle>
              <CardDescription className="text-gray-600">
                Teacher: {course.teacher}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Next class:</span>
                  <span className="text-gray-900">{course.nextClass}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Topic:</span>
                  <span className="text-gray-900">{course.nextTopic}</span>
                </div>
                {course.upcomingTest && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next test:</span>
                    <span className="text-red-600 font-medium">
                      {course.upcomingTest}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Credits:</span>
                  <span className="text-gray-900">{course.credits}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-1" />
                  <span>View course</span>
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
