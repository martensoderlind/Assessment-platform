import StudentHeader from "../../components/student-header";
import StudentCoursesPage from "./StudentCoursesPage";

export default function CoursesDashboard() {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        <StudentHeader />
        <main className="container mx-auto px-4 py-8">
          <StudentCoursesPage />
        </main>
      </div>
    </div>
  );
}
