"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { FileText, Video, Image as ImageIcon, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const assets = [
  { id: 1, name: "Summer_Campaign.mp4", type: "video", pillar: "Promotion", starred: true },
  { id: 2, name: "New_Logo.png", type: "image", pillar: "Branding", starred: false },
  { id: 3, name: "Blog_Post_Q3.docx", type: "document", pillar: "Education", starred: false },
  { id: 4, name: "Testimonial_Clip.mp4", type: "video", pillar: "Social Proof", starred: true },
  { id: 5, name: "Website_Banner.jpg", type: "image", pillar: "Promotion", starred: false },
  { id: 6, name: "Infographic_Stats.png", type: "image", pillar: "Education", starred: false },
]

const AssetIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "video":
      return <Video className="h-8 w-8 text-muted-foreground" />
    case "image":
      return <ImageIcon className="h-8 w-8 text-muted-foreground" />
    case "document":
      return <FileText className="h-8 w-8 text-muted-foreground" />
    default:
      return null
  }
}

export function AssetGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {assets.map((asset) => (
        <Card key={asset.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <AssetIcon type={asset.type} />
              {asset.starred && <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />}
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-medium truncate">{asset.name}</p>
            <Badge variant="outline" className="mt-2">{asset.pillar}</Badge>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="ghost" size="sm">View</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}