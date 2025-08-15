import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <p className="text-gray-500">Plan and schedule your content.</p>
      </div>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Content Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="range"
              className="w-full"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}