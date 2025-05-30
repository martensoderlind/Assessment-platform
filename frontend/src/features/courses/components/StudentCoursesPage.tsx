import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, CheckCircle, ChevronRight } from "lucide-react";
import StudentHeader from "./course-header";
import SummarizeCards from "./summarize-cards";
import { colors, gradeColors } from "../type";

export default function StudentCoursesPage() {
  const [activeTab, setActiveTab] = useState("active");

  const activeCourses = [
    {
      id: 1,
      code: "MA3",
      title: "Mathematics 3",
      teacher: "Erik Lindqvist",
      progress: 65,
      nextClass: "March 15, 2025",
      nextTopic: "Derivatives",
      upcomingTest: "March 22, 2025",
      credits: 100,
      color: "blue",
      assignments: 3,
      unreadMessages: 2,
    },
    {
      id: 2,
      code: "SV2",
      title: "Swedish 2",
      teacher: "Maria Andersson",
      progress: 45,
      nextClass: "March 16, 2025",
      nextTopic: "Novel Analysis",
      upcomingTest: null,
      credits: 100,
      color: "green",
      assignments: 1,
      unreadMessages: 0,
    },
    {
      id: 3,
      code: "HI1",
      title: "History 1",
      teacher: "Lars Johansson",
      progress: 80,
      nextClass: "March 17, 2025",
      nextTopic: "World War II",
      upcomingTest: "March 20, 2025",
      credits: 100,
      color: "purple",
      assignments: 0,
      unreadMessages: 1,
    },
    {
      id: 4,
      code: "EN6",
      title: "English 6",
      teacher: "Sarah Wilson",
      progress: 30,
      nextClass: "March 18, 2025",
      nextTopic: "Essay Writing",
      upcomingTest: null,
      credits: 100,
      color: "orange",
      assignments: 2,
      unreadMessages: 0,
    },
  ];

  const completedCourses = [
    {
      id: 5,
      code: "MA2",
      title: "Mathematics 2",
      teacher: "Erik Lindqvist",
      grade: "A",
      completedDate: "December 2024",
      credits: 100,
      color: "blue",
    },
    {
      id: 6,
      code: "SV1",
      title: "Swedish 1",
      teacher: "Anna Nilsson",
      grade: "B",
      completedDate: "December 2024",
      credits: 100,
      color: "green",
    },
    {
      id: 7,
      code: "EN5",
      title: "English 5",
      teacher: "John Smith",
      grade: "A",
      completedDate: "June 2024",
      credits: 100,
      color: "orange",
    },
    {
      id: 8,
      code: "FY1",
      title: "Physics 1",
      teacher: "Helena Berg",
      grade: "C",
      completedDate: "June 2024",
      credits: 100,
      color: "red",
    },
  ];

  const getColorClass = (color: keyof typeof colors) => {
    return colors[color] || "bg-gray-50 text-gray-700";
  };

  const getGradeColor = (grade: keyof typeof gradeColors) => {
    return gradeColors[grade] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentHeader />

      <div className="container mx-auto px-4 py-8">
        <SummarizeCards
          activeCourses={activeCourses}
          completedCourses={completedCourses}
        />

        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg w-fit">
          <button
            onClick={() => setActiveTab("active")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "active"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Active Courses ({activeCourses.length})
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "completed"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Completed Courses ({completedCourses.length})
          </button>
        </div>

        {activeTab === "active" && (
          <div className="grid md:grid-cols-2 gap-6">
            {activeCourses.map((course) => (
              <Link key={course.id} to={`/profile/courses`}>
                <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        className={getColorClass(
                          course.color as keyof typeof colors
                        )}
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
                        <span className="text-gray-900">
                          {course.nextClass}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Topic:</span>
                        <span className="text-gray-900">
                          {course.nextTopic}
                        </span>
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
        )}

        {activeTab === "completed" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCourses.map((course) => (
              <Link key={course.id} to={`/profile/courses`}>
                <Card className="bg-white border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        className={getColorClass(
                          course.color as keyof typeof colors
                        )}
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
                        <span className="text-gray-900">
                          {course.completedDate}
                        </span>
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
        )}
      </div>
    </div>
  );
}
