import { Card, CardContent } from "@/components/ui/card";
import type { Stat } from "../types";

type Props = {
  stat: Stat;
};

export default function StudentStats({ stat }: Props) {
  return (
    <Card className="text-center bg-white border-gray-200">
      <CardContent className="pt-6">
        <div className="text-2xl font-bold text-gray-900 mb-1">
          {stat.number}
        </div>
        <div className="text-sm text-gray-600">{stat.label}</div>
      </CardContent>
    </Card>
  );
}
