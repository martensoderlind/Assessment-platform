export default function StudentWelcomeMessage() {
  const student = {
    name: "Mårten",
  };
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Welcome back, {student.name}
      </h2>
      <p className="text-gray-600">
        Hear's an overview over you courses and activities
      </p>
    </div>
  );
}
