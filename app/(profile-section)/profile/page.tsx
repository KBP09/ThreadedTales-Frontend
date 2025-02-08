"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageCircle, Edit, Github, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import axios from "axios"
import { User } from "@/types/types"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("stories")
  const [github, setGithub] = useState("")
  const [facebook, setFacebook] = useState("")
  const [instagram, setInstagram] = useState("")
  const [userStories, setUserStories] = useState([])
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/stories/")
        setUserStories(response.data)
      } catch (error) {
        console.error("Error fetching stories:", error)
      }
    }

    fetchStories()
  }, [])

  useEffect(() => {
    const userData = localStorage.getItem("userAccounts");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const imageUrls = [
    "/quantum.jpeg",
    "/wind.jpg",
    "/echoes.jpeg",
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Image
            src="/user.jpeg"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div>
            <h1 className="text-4xl font-bold gradient-text">{user?.name}</h1>
            <p className="text-gray-400">Storyteller Extraordinaire</p>
          </div>
        </div>
        <div className="flex space-x-4">
          {user?.social.twitter && (
            <Link href={`https://github.com/${user.social.twitter}`} target="_blank">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-500">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
          )}
          {user?.social.facebook && (
            <Link href={user.social.facebook} target="_blank">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-500">
                <Facebook className="h-5 w-5" />
              </Button>
            </Link>
          )}
          {user?.social.instagram && (
            <Link href={`https://instagram.com/${user.social.instagram}`} target="_blank">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-500">
                <Instagram className="h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
        <Link href="/profile/edit">
          <Button className="gradient-bg text-black">
            <Edit className="mr-2 h-4 w-4" /> Edit Profile
          </Button>
        </Link>
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
            {userStories.length > 0 ? (
              userStories.map((story: any,index:number) => (
                <Card key={story.id} className="bg-gray-800 hover:bg-gray-700 transition-colors overflow-hidden">
                  <CardHeader className="p-0">
                    <Image
                      src={imageUrls[index % imageUrls.length]}
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
                        <Heart className="w-4 h-4 mr-1 text-yellow-500" /> {story.likes || 0}
                      </span>
                      <span className="flex items-center text-gray-400">
                        <MessageCircle className="w-4 h-4 mr-1 text-yellow-500" /> {story.comments || 0}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-gray-500">No stories available.</p>
            )}
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
                Total Likes: {userStories.reduce((sum: number, story: any) => sum + (story.likes || 0), 0)}
              </p>
              <p className="text-2xl font-bold mt-4">
                Total Comments: {userStories.reduce((sum: number, story: any) => sum + (story.comments || 0), 0)}
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
