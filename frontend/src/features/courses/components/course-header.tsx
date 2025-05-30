export default function StudentHeader() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">
              My Courses
            </h1>
            <p className="text-gray-600">
              Overview of your current and completed courses
            </p>
          </div>
          <div className="flex items-center space-x-4"></div>
        </div>
      </div>
    </div>
  );
}
