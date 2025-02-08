"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageCircle, Edit } from "lucide-react"
import Link from "next/link"
import { User } from "@/types/types"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("stories")
  const [userStories, setUserStories] = useState([
    {
        "id": "34282457-1547-412e-8c2b-5a2cfb79cb67",
        "title": "The Starlit Voyage",
        "content": "Captain Eira stood at the helm of the starship Aurora, her eyes fixed on the shimmering nebula ahead. Their mission was simple: retrieve the lost star map hidden in the heart of the Nebula of Nightfall. But when the crew encounters a celestial entity guarding the map, alliances are tested, and Eira must decide whether to risk her crew's lives for the secrets of the universe.",
        "userId": "416da0b3-c3da-41b6-96ab-013e0d51adb6",
        "parentId": null,
        "createdAt": "2025-02-08T19:07:09.567Z",
        "updatedAt": "2025-02-08T19:16:46.687Z",
        "createdBy": {
            "name": "Kanak"
        }
    },
    {
        "id": "4ce42dd8-02d4-427a-abeb-6eb767bd7f60",
        "title": "The Whispers of Eldermoor",
        "content": "Deep in the ancient woods of Eldermoor, a curious young scholar named Finn discovered an ancient oak tree that spoke in riddles. When the whispers led Finn to an ancient relic hidden beneath the forest floor, he unknowingly unleashed a dark power bound by ancient spells. To protect his village, Finn embarks on a journey guided by cryptic whispers and forgotten magic",
        "userId": "416da0b3-c3da-41b6-96ab-013e0d51adb6",
        "parentId": null,
        "createdAt": "2025-02-08T19:05:08.020Z",
        "updatedAt": "2025-02-08T19:17:09.824Z",
        "createdBy": {
            "name": "Kanak"
        }
    },
    {
        "id": "87048e9a-b914-4cdc-9dc2-ac2e49e3df67",
        "title": "The Lost Symphony",
        "content": "Amelia, a struggling violinist, discovers a dusty music score hidden in the attic of an old theater. As she plays the haunting melody, the theater transforms, revealing echoes of a forgotten past. With every note, Amelia unravels the tragic love story of a composer and a ballerina, trapped between worlds. But will finishing the symphony break the curse—or bind her forever?",
        "userId": "416da0b3-c3da-41b6-96ab-013e0d51adb6",
        "parentId": null,
        "createdAt": "2025-02-08T19:04:19.098Z",
        "updatedAt": "2025-02-08T19:17:29.840Z",
        "createdBy": {
            "name": "Kanak"
        }
    },
    {
        "id": "baf37544-e3dc-4115-ab8e-ec772e027ce1",
        "title": "A Taste of Midnight",
        "content": "In the bustling streets of Verona, a mysterious café opens its doors only at midnight. Alina, a curious journalist, decides to investigate the café's secret. Each dish served reveals a memory from the past of the person who tastes it. As Alina samples forbidden flavors, she uncovers her own long-lost memories—and a dangerous truth that ties the café to her family's legacy.",
        "userId": "416da0b3-c3da-41b6-96ab-013e0d51adb6",
        "parentId": null,
        "createdAt": "2025-02-08T19:07:18.415Z",
        "updatedAt": "2025-02-08T19:18:07.013Z",
        "createdBy": {
            "name": "Kanak"
        }
    },
    {
        "id": "f1d00e97-ff8e-42e8-9333-40bf67f67ee0",
        "title": "My story",
        "content": "This is my story",
        "userId": "416da0b3-c3da-41b6-96ab-013e0d51adb6",
        "parentId": null,
        "createdAt": "2025-02-08T20:20:05.582Z",
        "updatedAt": "2025-02-08T20:20:05.582Z",
        "createdBy": {
            "name": "Kanak"
        }
    },
    {
        "id": "7f6fe28b-385b-45f7-9267-2516e3a288a9",
        "title": "My story",
        "content": "This is my story",
        "userId": "416da0b3-c3da-41b6-96ab-013e0d51adb6",
        "parentId": null,
        "createdAt": "2025-02-08T20:31:09.224Z",
        "updatedAt": "2025-02-08T20:31:09.224Z",
        "createdBy": {
            "name": "Kanak"
        }
    },
    {
        "id": "e822dbf0-d7a0-4dc8-ac18-bea90eb0b08b",
        "title": "Echoes of the Forgotten Kingdom",
        "content": "Princess Kaelira's heart pounded as she raced through the dense forest on the outskirts of Aralos. The air was thick with the scent of damp leaves and wildflowers, but all she could hear was the thunder of her own footsteps and the distant clanging of steel. The coup had happened in a blur—loyal guards slain, the throne room drenched in chaos, and General Malvok's triumphant sneer as he declared himself ruler. Clutching the ancient locket that her mother had given her before vanishing years ago, Kaelira knew one thing: she had to survive.",
        "userId": "416da0b3-c3da-41b6-96ab-013e0d51adb6",
        "parentId": null,
        "createdAt": "2025-02-08T08:33:57.479Z",
        "updatedAt": "2025-02-08T19:20:20.649Z",
        "createdBy": {
            "name": "Kanak"
        }
    }
]);
  const [user, setUser] = useState<User | null>(null);

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
            <h1 className="text-4xl font-bold gradient-text">Kanak</h1>
            <p className="text-gray-400">Storyteller Extraordinaire</p>
          </div>
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
              userStories.map((story, index) => (
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
                        <Heart className="w-4 h-4 mr-1 text-yellow-500" /> 0
                      </span>
                      <span className="flex items-center text-gray-400">
                        <MessageCircle className="w-4 h-4 mr-1 text-yellow-500" />0
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
