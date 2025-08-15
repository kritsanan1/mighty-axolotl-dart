"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const goals = [
  { title: "Increase Q3 Revenue by 15%", progress: 65, target: "$50,000", current: "$32,500" },
  { title: "Grow Social Media Following by 20%", progress: 80, target: "20k Followers", current: "18.2k Followers" },
  { title: "Launch New Feature 'X'", progress: 40, target: "Sept 30th", current: "In Development" },
]

export function StrategicGoals() {
  return (
    <div className="space-y-4">
      {goals.map((goal, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{goal.title}</CardTitle>
            <CardDescription>Target: {goal.target} | Current: {goal.current}</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={goal.progress} className="w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}