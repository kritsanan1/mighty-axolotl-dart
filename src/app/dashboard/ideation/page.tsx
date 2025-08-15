import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Ideation() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Ideation</h1>
        <p className="text-gray-500">Brainstorm and manage your content ideas.</p>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>New Idea</CardTitle>
              <CardDescription>Add a new content idea to your board.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input placeholder="Title" />
                <Textarea placeholder="Description" />
                <Input placeholder="Tags (comma separated)" />
                <Button>Add Idea</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Idea Board</CardTitle>
              <CardDescription>Your saved content ideas.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">New Feature Announcement</h3>
                    <p className="text-sm text-gray-500">Announce the launch of our new collaboration tools.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">Customer Spotlight</h3>
                    <p className="text-sm text-gray-500">Highlight a success story from one of our customers.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">Behind the Scenes</h3>
                    <p className="text-sm text-gray-500">Show a day in the life at our company.</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}