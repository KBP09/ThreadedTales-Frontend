"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Search } from "lucide-react"

const threads = [
  {
    id: "1",
    title: "The Quantum Paradox",
    author: "Jane Doe",
    likes: 1200,
    comments: 89,
    genres: ["Sci-Fi", "Mystery"],
  },
  {
    id: "2",
    title: "Echoes of Eternity",
    author: "John Smith",
    likes: 980,
    comments: 65,
    genres: ["Fantasy", "Adventure"],
  },
  {
    id: "3",
    title: "Whispers in the Wind",
    author: "Alice Johnson",
    likes: 1500,
    comments: 112,
    genres: ["Romance", "Drama"],
  },
  {
    id: "4",
    title: "Neon Nights",
    author: "Mike Wilson",
    likes: 750,
    comments: 43,
    genres: ["Cyberpunk", "Thriller"],
  },
  {
    id: "5",
    title: "The Lost Expedition",
    author: "Emily Brown",
    likes: 1100,
    comments: 78,
    genres: ["Adventure", "Historical"],
  },
  {
    id: "6",
    title: "Shadows of the Mind",
    author: "David Lee",
    likes: 890,
    comments: 56,
    genres: ["Psychological", "Horror"],
  },
]

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredThreads = threads.filter(
    (thread) =>
      thread.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      thread.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      thread.genres.some((genre) => genre.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="container mx-auto py-12">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredThreads.map((thread, index) => (
          <motion.div
            key={thread.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/thread/${thread.id}`}>
              <Card className="bg-gray-800 hover:bg-gray-700 transition-colors overflow-hidden group cursor-pointer">
                <CardHeader className="gradient-bg group-hover:from-violet-500 group-hover:to-pink-500 transition-all duration-300">
                  <CardTitle className="text-white">{thread.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-400">by {thread.author}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    {thread.genres.map((genre) => (
                      <Badge key={genre} variant="secondary" className="bg-gray-700 text-gray-300">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4 text-gray-400">
                    <span className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" /> {thread.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" /> {thread.comments}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

