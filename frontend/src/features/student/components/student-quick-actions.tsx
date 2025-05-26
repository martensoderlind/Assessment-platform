import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FileText, MessageSquare } from "lucide-react";

export default function StudentQuickActions() {
  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle className="text-base">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button variant="outline" size="sm" className="w-full justify-start">
          <FileText className="mr-2 h-4 w-4" />
          Turn in assignment
        </Button>
        <Button variant="outline" size="sm" className="w-full justify-start">
          <MessageSquare className="mr-2 h-4 w-4" />
          Contact teacher
        </Button>
        <Button variant="outline" size="sm" className="w-full justify-start">
          <Calendar className="mr-2 h-4 w-4" />
          View schedule
        </Button>
      </CardContent>
    </Card>
  );
}
