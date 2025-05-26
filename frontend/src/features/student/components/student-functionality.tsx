import { Link } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Calendar, FileText, MessageSquare } from "lucide-react";

export default function StudentFunctionality() {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      title: "Course Materials",
      description:
        "Access all course resources, reading lists, and study materials in one place",
      link: "/courses/materials",
    },
    {
      icon: <FileText className="h-6 w-6 text-green-600" />,
      title: "Assignments & Submissions",
      description:
        "Manage and submit assignments digitally with automatic deadline reminders",
      link: "/assignments",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-purple-600" />,
      title: "Communication",
      description:
        "Discussion forums and direct messaging between teachers and students",
      link: "/messages",
    },
    {
      icon: <Calendar className="h-6 w-6 text-orange-600" />,
      title: "Schedule & Calendar",
      description:
        "Overview of lessons, exams, and important dates in a shared calendar",
      link: "/schedule",
    },
  ];

  return (
    <section>
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Platform Functions
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Link key={index} to={feature.link}>
            <Card className="bg-white border-gray-200 hover:shadow-md transition-all duration-200 hover:-translate-y-1 cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
