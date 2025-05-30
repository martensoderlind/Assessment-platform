import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, FileText, GraduationCap } from "lucide-react";
import type { ActiveCourse, completedCourse } from "../type";

type Props = {
  activeCourses: ActiveCourse[];
  completedCourses: completedCourse[];
};

export default function summarizeCards({
  activeCourses,
  completedCourses,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card className="bg-white border-gray-200">
        <CardContent className="pt-6">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {activeCourses.length}
              </div>
              <div className="text-sm text-gray-600">Active Courses</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-gray-200">
        <CardContent className="pt-6">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {completedCourses.length}
              </div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-gray-200">
        <CardContent className="pt-6">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-orange-600 mr-3" />
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {activeCourses.reduce(
                  (sum, course) => sum + course.assignments,
                  0
                )}
              </div>
              <div className="text-sm text-gray-600">Pending Tasks</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-gray-200">
        <CardContent className="pt-6">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-purple-600 mr-3" />
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {activeCourses.filter((course) => course.upcomingTest).length}
              </div>
              <div className="text-sm text-gray-600">Upcoming Tests</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
