import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UpcomingEvents from "./upcoming-events";

export default function UpcomingScheduleContainer() {
  const events = [
    {
      month: "MAR",
      date: "15",
      topic: "Math - exam",
      startTime: "08:00",
      endTime: "10:00",
    },
    {
      month: "MAR",
      date: "16",
      topic: "History- Presentation",
      startTime: "08:00",
      endTime: "10:00",
    },
    {
      month: "MAR",
      date: "18",
      topic: "Fysics - lab",
      startTime: "13:00",
      endTime: "14:30",
    },
  ];
  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle className="text-base">Upcoming Schedule</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {events.map((event, index) => (
          <UpcomingEvents key={index} event={event} />
        ))}
      </CardContent>
    </Card>
  );
}
