"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle } from "lucide-react"

const trendingThreads = [
  {
    id: 1,
    title: "The Quantum Paradox",
    author: "Jane Doe",
    likes: 1200,
    comments: 89,
    genres: ["Sci-Fi", "Mystery"],
    image: "/quantum.jpeg",
  },
  {
    id: 2,
    title: "Echoes of Eternity",
    author: "John Smith",
    likes: 980,
    comments: 65,
    genres: ["Fantasy", "Adventure"],
    image: "/echoes.jpeg",
  },
  {
    id: 3,
    title: "Whispers in the Wind",
    author: "Alice Johnson",
    likes: 1500,
    comments: 112,
    genres: ["Romance", "Drama"],
    image: "/quantum.jpeg",
  },
]

export default function TrendingThreads() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 gradient-text">Trending Threads</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trendingThreads.map((thread, index) => (
          <motion.div
            key={thread.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gray-800 hover:bg-gray-700 transition-colors overflow-hidden group">
              <CardHeader className="p-0">
                <Image
                  src={thread.image || "/placeholder.svg"}
                  alt={thread.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-yellow-500">{thread.title}</CardTitle>
                <p className="text-gray-400 mt-2">by {thread.author}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {thread.genres.map((genre) => (
                    <Badge key={genre} variant="secondary" className="bg-gray-700 text-yellow-500">
                      {genre}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4 text-gray-400">
                  <span className="flex items-center">
                    <Heart className="w-4 h-4 mr-1 text-yellow-500" /> {thread.likes}
                  </span>
                  <span className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1 text-yellow-500" /> {thread.comments}
                  </span>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

