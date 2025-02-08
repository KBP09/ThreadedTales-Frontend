"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Search } from "lucide-react"

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("")

  const threads = [
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
  ]

  const renderThread = (thread: any) => (
    <motion.div
      key={thread.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <Link href={`/thread/`}>
        <Card className="bg-gray-800 hover:bg-gray-700 transition-colors overflow-hidden cursor-pointer">
          <CardHeader className="gradient-bg">
            <CardTitle className="text-white">{thread.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mt-4 text-sm text-gray-500">Created by {thread.createdBy?.name || "Unknown"}</p>
          </CardContent>
          {thread.children && thread.children.length > 0 && (
            <CardFooter className="ml-6 border-l border-gray-600">
              {thread.children.map(renderThread)}
            </CardFooter>
          )}
        </Card>
      </Link>
    </motion.div>
  )

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 md:px-8">
    <h1 className="text-4xl font-bold mb-8 gradient-text">Explore Threads</h1>
  
    <div className="mb-8 flex items-center">
      <Input
        type="text"
        placeholder="Search threads..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mr-4 bg-gray-800 text-white"
      />
      <Button className="gradient-bg">
        <Search className="w-4 h-4 mr-2" /> Search
      </Button>
    </div>
  
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {threads.map(renderThread)}
    </div>
  </div>
  
  )
}
