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
