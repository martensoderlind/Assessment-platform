import StudentStats from "./student-stats";

export default function StudentStatsContainer() {
  const quickStats = [
    { number: 12, label: "Active courses" },
    { number: 3, label: "Upcoming exams" },
    { number: 8, label: "New Messages" },
    { number: 85, label: "Average grade" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      {quickStats.map((stat, index) => (
        <StudentStats stat={stat} key={index} />
      ))}
    </div>
  );
}
