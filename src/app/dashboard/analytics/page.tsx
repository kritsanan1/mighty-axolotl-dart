import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-gray-500">Track your performance and growth.</p>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Followers</CardTitle>
            <CardDescription>Total followers across all platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12,345</p>
            <p className="text-sm text-green-500">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Engagement</CardTitle>
            <CardDescription>Total likes, comments, and shares</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">5,678</p>
            <p className="text-sm text-green-500">+8.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Impressions</CardTitle>
            <CardDescription>Total number of times your content was seen</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">123,456</p>
            <p className="text-sm text-red-500">-2.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Reach</CardTitle>
            <CardDescription>Total unique users who saw your content</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">89,012</p>
            <p className="text-sm text-green-500">+5.7% from last month</p>
          </CardContent>
        </Card>
      </div>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Follower Growth</CardTitle>
            <CardDescription>Follower growth over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                followers: {
                  label: "Followers",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px] w-full"
            >
              <BarChart
                data={[
                  { month: "January", followers: 186 },
                  { month: "February", followers: 305 },
                  { month: "March", followers: 237 },
                  { month: "April", followers: 73 },
                  { month: "May", followers: 209 },
                  { month: "June", followers: 214 },
                ]}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value: string) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="followers" fill="var(--color-followers)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}