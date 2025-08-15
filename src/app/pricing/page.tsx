import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="p-4 text-center">
        <h1 className="text-4xl font-bold">Pricing</h1>
        <p className="text-gray-500">Choose the plan that's right for you.</p>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <CardDescription>For individuals and small teams.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">$29/month</p>
            <ul className="mt-4 space-y-2">
              <li>10 social accounts</li>
              <li>1 user</li>
              <li>Analytics</li>
              <li>Content scheduling</li>
            </ul>
            <Button className="w-full mt-6">Choose Plan</Button>
          </CardContent>
        </Card>
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>For growing businesses and agencies.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">$99/month</p>
            <ul className="mt-4 space-y-2">
              <li>50 social accounts</li>
              <li>5 users</li>
              <li>Advanced analytics</li>
              <li>Collaboration tools</li>
            </ul>
            <Button className="w-full mt-6">Choose Plan</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>For large organizations.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">Custom</p>
            <ul className="mt-4 space-y-2">
              <li>Unlimited social accounts</li>
              <li>Unlimited users</li>
              <li>Dedicated support</li>
              <li>Custom integrations</li>
            </ul>
            <Button className="w-full mt-6">Contact Us</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}