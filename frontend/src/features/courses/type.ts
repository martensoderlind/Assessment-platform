export type ActiveCourse = {
  id: number;
  code: string;
  title: string;
  teacher: string;
  progress: number;
  nextClass: string;
  nextTopic: string;
  upcomingTest: string | null;
  credits: number;
  color: string;
  assignments: number;
  unreadMessages: number;
};

export type completedCourse = {
  id: number;
  code: string;
  title: string;
  teacher: string;
  grade: string;
  completedDate: string;
  credits: number;
  color: string;
};

export const colors = {
  blue: "bg-blue-50 text-blue-700",
  green: "bg-green-50 text-green-700",
  purple: "bg-purple-50 text-purple-700",
  orange: "bg-orange-50 text-orange-700",
  red: "bg-red-50 text-red-700",
};

export const gradeColors = {
  A: "bg-green-100 text-green-800",
  B: "bg-blue-100 text-blue-800",
  C: "bg-yellow-100 text-yellow-800",
  D: "bg-orange-100 text-orange-800",
  F: "bg-red-100 text-red-800",
};
