"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Search } from "lucide-react"

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [threads, setThreads] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/stories/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        
        if (!response.ok) throw new Error("Failed to fetch threads")

        const data = await response.json()
        setThreads(data || [])
      } catch (err:any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchThreads()
  }, [])

  const renderThread = (thread: any) => (
    <motion.div
      key={thread.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <Link href={`/thread/${thread.id}`}>
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

  if (loading) return <p className="text-white text-center py-8">Loading threads...</p>
  if (error) return <p className="text-red-500 text-center py-8">{error}</p>

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

      <div className="grid grid-cols-1 gap-8">
        {threads.map(renderThread)}
      </div>
    </div>
  )
}
