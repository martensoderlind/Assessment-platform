export type Stat = {
  number: number;
  label: string;
};

export type Activity = {
  type: string;
  title: string;
  time: string;
  status: string;
};

export type UpcomingEvent = {
  month: string;
  date: string;
  topic: string;
  startTime: string;
  endTime: string;
};

export type Course = {
  id: string;
  name: string;
  abbreviation: string;
  lecture: Lecture;
  exams: Date;
};

export type Lecture = {
  id: string;
  subjectId: string;
  date: Date;
  subject: string;
  teacher: string;
};
