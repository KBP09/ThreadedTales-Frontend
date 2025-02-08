"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, MessageCircle, Plus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ContributionModal from "@/components/ContributionModal"
import { Story, Node } from "@/types/types"

// Static story data
const storyData: Story = {
  id: "e822dbf0-d7a0-4dc8-ac18-bea90eb0b08b",
  title: "Echoes of the Forgotten Kingdom",
  content: "Princess Kaelira's heart pounded as she raced through the dense forest on the outskirts of Aralos. The air was thick with the scent of damp leaves and wildflowers, but all she could hear was the thunder of her own footsteps and the distant clanging of steel. The coup had happened in a blur—loyal guards slain, the throne room drenched in chaos, and General Malvok's triumphant sneer as he declared himself ruler. Clutching the ancient locket that her mother had given her before vanishing years ago, Kaelira knew one thing: she had to survive.",
  userId: "416da0b3-c3da-41b6-96ab-013e0d51adb6",
  parentId: null,
  createdAt: "2025-02-08T08:33:57.479Z",
  updatedAt: "2025-02-08T19:20:20.649Z",
  children: [
    {
      id: "18ce70e8-1512-4d1e-b438-9ad3df2df54c",
      title: "My New Story",
      content: "In the distant kingdom of Aralos, the last heir to the throne, Princess Kaelira, flees the palace after a coup led by a treacherous general. With only a mystical locket to guide her, she ventures into the forgotten lands where ancient spirits dwell. As Kaelira faces mythical beasts and hidden realms, she learns that her destiny is entwined with the very magic that once ruled Aralos",
      userId: "416da0b3-c3da-41b6-96ab-013e0d51adb6",
      parentId: "e822dbf0-d7a0-4dc8-ac18-bea90eb0b08b",
      createdAt: "2025-02-08T08:34:27.490Z",
      updatedAt: "2025-02-08T19:22:22.092Z",
      children: [
        {
          id: "f1fd4a83-1463-4143-8dfe-21523893db39",
          title: "My New Story",
          content: "Princess Kaelira's heart pounded as she raced through the dense forest on the outskirts of Aralos. The air was thick with the scent of damp leaves and wildflowers, but all she could hear was the thunder of her own footsteps and the distant clanging of steel. The coup had happened in a blur—loyal guards slain, the throne room drenched in chaos, and General Malvok's triumphant sneer as he declared himself ruler. Clutching the ancient locket that her mother had given her before vanishing years ago, Kaelira knew one thing: she had to survive.",
          userId: "416da0b3-c3da-41b6-96ab-013e0d51adb6",
          parentId: "18ce70e8-1512-4d1e-b438-9ad3df2df54c",
          createdAt: "2025-02-08T09:29:41.086Z",
          updatedAt: "2025-02-08T19:20:41.417Z",
          children: [],
        }
      ]
    },
    {
      id: "8f81667f-49ce-4fb4-9093-527484f0bf55",
      title: "My New Story",
      content: "The locket was no ordinary trinket. It pulsed with a faint, ethereal glow that seemed to respond to Kaelira's emotions. As night fell and shadows crept through the forest, the light from the locket intensified, illuminating a narrow path through the trees. 'Trust the light,' her mother's words echoed in her mind. Trembling but resolute, Kaelira followed the shimmering trail deeper into the forgotten lands, where few dared to tread. Stories of ancient spirits and enchanted beasts lingered in her memory, warnings told to children to keep them close to the safety of the kingdom.",
      userId: "416da0b3-c3da-41b6-96ab-013e0d51adb6",
      parentId: "e822dbf0-d7a0-4dc8-ac18-bea90eb0b08b",
      createdAt: "2025-02-08T08:34:31.401Z",
      updatedAt: "2025-02-08T19:22:25.131Z",
      children: []
    }
  ],
  createdBy: {
    name: "Kanak"
  }
}

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)

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
                  <CardTitle className="text-lg font-medium">{storyData.createdBy.name}</CardTitle>
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

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        {storyData.title}
      </h1>
      <p className="text-xl text-gray-400 mb-8">by {storyData.createdBy.name}</p>

      {renderNodes(storyData.children)}

      <ContributionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} nodeId={selectedNodeId} />
    </div>
  )
}
