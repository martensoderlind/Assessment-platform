import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

export default function LandingPageHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">EduPortal</h1>
              <p className="text-sm text-gray-500">School name</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to={"/profile/courses"}>
              <p className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                My Courses
              </p>
            </Link>
            <Link to={"/profile/schedule"}>
              <p className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Schedule
              </p>
            </Link>
            <Link to={"/profile/grades"}>
              <p className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Grades
              </p>
            </Link>
            <Link to={"/profile/messages"}>
              <p className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Messages
              </p>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to={"/profile"}>Sign in</Link>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-700">AK</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
