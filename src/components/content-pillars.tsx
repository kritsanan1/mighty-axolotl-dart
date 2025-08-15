"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const pillars = [
  { title: "Educational Content", description: "Tutorials, guides, and informative posts.", tags: ["How-To", "Tips", "Learn"] },
  { title: "Promotional Content", description: "Product launches, special offers, and announcements.", tags: ["New", "Sale", "Deals"] },
  { title: "Community Building", description: "User-generated content, testimonials, and engagement.", tags: ["Community", "UGC", "Social Proof"] },
  { title: "Brand Storytelling", description: "Behind-the-scenes, company culture, and mission.", tags: ["Culture", "Mission", "Team"] },
]

export function ContentPillars() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {pillars.map((pillar, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{pillar.title}</CardTitle>
            <CardDescription>{pillar.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {pillar.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}