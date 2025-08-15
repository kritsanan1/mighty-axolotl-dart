import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Strategy() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Strategy</h1>
        <p className="text-gray-500">Define your content strategy and goals.</p>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Content Pillars</CardTitle>
            <CardDescription>Define the core themes of your content.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Input placeholder="Pillar 1: e.g., Product Updates" />
                <Textarea placeholder="Description" className="mt-2" />
              </div>
              <div>
                <Input placeholder="Pillar 2: e.g., Company Culture" />
                <Textarea placeholder="Description" className="mt-2" />
              </div>
              <div>
                <Input placeholder="Pillar 3: e.g., Industry News" />
                <Textarea placeholder="Description" className="mt-2" />
              </div>
              <Button>Save Pillars</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Goals</CardTitle>
            <CardDescription>Set your social media goals.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Input placeholder="Goal 1: e.g., Increase followers by 20%" />
              </div>
              <div>
                <Input placeholder="Goal 2: e.g., Drive 500 website clicks" />
              </div>
              <div>
                <Input placeholder="Goal 3: e.g., Reach 1M impressions" />
              </div>
              <Button>Save Goals</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}