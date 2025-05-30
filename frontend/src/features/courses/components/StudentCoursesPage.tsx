import { useState } from "react";

import StudentHeader from "./course-header";
import SummarizeCards from "./summarize-cards";
import ActiveCourses from "./active-courses";
import CompletedCourses from "./completed-courses";

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
export default function StudentCoursesPage() {
  const [activeTab, setActiveTab] = useState("active");

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
          <ActiveCourses activeCourses={activeCourses} />
        )}

        {activeTab === "completed" && (
          <CompletedCourses completedCourses={completedCourses} />
        )}
      </div>
    </div>
  );
}
