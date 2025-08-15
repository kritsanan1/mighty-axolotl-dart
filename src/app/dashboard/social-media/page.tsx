import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function SocialMedia() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Social Media</h1>
        <p className="text-gray-500">Create and publish your content.</p>
      </div>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>New Post</CardTitle>
            <CardDescription>Draft a new post for your social media accounts.</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea placeholder="What's on your mind?" className="min-h-[200px]" />
            <div className="flex justify-between items-center mt-4">
              <div>
                {/* Add platform selectors here */}
              </div>
              <Button>Publish</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}