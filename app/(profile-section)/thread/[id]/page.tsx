"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, MessageCircle, Plus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ContributionModal from "@/components/ContributionModal"
import axios from "axios"

interface Node {
  id: string
  title: string
  content: string
  userId: string
  parentId: string | null
  createdAt: string
  updatedAt: string
  children: Node[]
}

interface Story {
  id: string
  title: string
  content: string
  userId: string
  parentId: string | null
  createdAt: string
  updatedAt: string
  children: Node[]
  createdBy: {
    name: string
  }
}

export default function Page({ params }: { params: { id: string } }) {
  const [storyData, setStoryData] = useState<Story | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/getStory/e822dbf0-d7a0-4dc8-ac18-bea90eb0b08b`)
        setStoryData(response.data)
      } catch (error) {
        console.error("Error fetching story:", error)
      }
    }

    fetchStory()
  }, [params.id])

  const handleContribute = (nodeId: string) => {
    setSelectedNodeId(nodeId)
    setIsModalOpen(true)
  }

  const renderNodes = (nodes: Node[]) => {
    return (
      <div className="space-y-8 pl-4 border-l border-gray-700">
        <AnimatePresence>
          {nodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-l-4 border-pink-500">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">{storyData?.createdBy.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{node.content}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Button onClick={() => handleContribute(node.id)} variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-1" /> Contribute
                  </Button>
                </CardFooter>

                {/* Recursive Rendering of Children */}
                {node.children && node.children.length > 0 && renderNodes(node.children)}
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    )
  }

  if (!storyData) {
    return <p>Loading story...</p>
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        {storyData.title}
      </h1>
      <p className="text-xl text-gray-400 mb-8">by {storyData.createdBy.name}</p>

      {/* Render the root nodes */}
      {renderNodes(storyData.children)}

      <ContributionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} nodeId={selectedNodeId} />
    </div>
  )
}
