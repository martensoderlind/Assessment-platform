import type { UpcomingEvent } from "../types";

type Props = {
  event: UpcomingEvent;
};
export default function UpcomingEvents({ event }: Props) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex flex-col items-center">
        <span className="text-xs text-gray-500">{event.month}</span>
        <span className="text-lg font-semibold text-gray-900">
          {event.date}
        </span>
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{event.topic}</p>
        <p className="text-xs text-gray-500">
          {event.startTime} - {event.endTime}
        </p>
      </div>
    </div>
  );
}
