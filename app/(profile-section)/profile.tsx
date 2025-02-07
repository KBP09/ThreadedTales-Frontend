"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageCircle, Edit } from "lucide-react"

const userStories = [
  {
    id: 1,
    title: "The Quantum Paradox",
    likes: 1200,
    comments: 89,
    image: "https://source.unsplash.com/random/800x600?sci-fi",
  },
  {
    id: 2,
    title: "Echoes of Eternity",
    likes: 980,
    comments: 65,
    image: "https://source.unsplash.com/random/800x600?fantasy",
  },
  {
    id: 3,
    title: "Whispers in the Wind",
    likes: 1500,
    comments: 112,
    image: "https://source.unsplash.com/random/800x600?romance",
  },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("stories")

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Image
            src="https://source.unsplash.com/random/200x200?portrait"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div>
            <h1 className="text-4xl font-bold gradient-text">Jane Doe</h1>
            <p className="text-gray-400">Storyteller Extraordinaire</p>
          </div>
        </div>
        <Button className="gradient-bg text-black">
          <Edit className="mr-2 h-4 w-4" /> Edit Profile
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-gray-800">
          <TabsTrigger value="stories" className="text-yellow-500">
            Your Stories
          </TabsTrigger>
          <TabsTrigger value="stats" className="text-yellow-500">
            Stats
          </TabsTrigger>
        </TabsList>
        <TabsContent value="stories">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userStories.map((story) => (
              <Card key={story.id} className="bg-gray-800 hover:bg-gray-700 transition-colors overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-yellow-500">{story.title}</CardTitle>
                  <div className="flex justify-between items-center mt-4">
                    <span className="flex items-center text-gray-400">
                      <Heart className="w-4 h-4 mr-1 text-yellow-500" /> {story.likes}
                    </span>
                    <span className="flex items-center text-gray-400">
                      <MessageCircle className="w-4 h-4 mr-1 text-yellow-500" /> {story.comments}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="stats">
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="text-yellow-500">Your Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">Total Stories: {userStories.length}</p>
              <p className="text-2xl font-bold mt-4">
                Total Likes: {userStories.reduce((sum, story) => sum + story.likes, 0)}
              </p>
              <p className="text-2xl font-bold mt-4">
                Total Comments: {userStories.reduce((sum, story) => sum + story.comments, 0)}
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

