"use client"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageCircle, Heart, Repeat } from "lucide-react"

const posts = [
  {
    id: 1,
    author: "Acme Inc.",
    handle: "@acme",
    avatar: "/avatars/01.png",
    content: "Excited to launch our new product next week! Stay tuned for more details. #productlaunch #newtech",
    likes: 120,
    comments: 15,
    retweets: 30,
  },
  {
    id: 2,
    author: "Jane Doe",
    handle: "@janedoe",
    avatar: "/avatars/02.png",
    content: "Just had a great experience with @acme's customer service. Highly recommend! 🚀",
    likes: 250,
    comments: 45,
    retweets: 60,
  },
]

export function SocialFeed() {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar>
              <AvatarImage src={post.avatar} alt={post.author} />
              <AvatarFallback>{post.author.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{post.author}</p>
              <p className="text-sm text-muted-foreground">{post.handle}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> {post.comments}
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Repeat className="h-4 w-4" /> {post.retweets}
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Heart className="h-4 w-4" /> {post.likes}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}