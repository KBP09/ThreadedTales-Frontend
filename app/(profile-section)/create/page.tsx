"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { User } from "@/types/types"

export default function Page() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [royalty, setRoyalty] = useState<number>(5)
  const [userAddress, setUserAddress] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-16">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Create a New Story</h1>
      <form className="space-y-6">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your story title"
            className="bg-gray-800 text-white"
            required
          />
        </div>
        <div>
          <Label htmlFor="content">Story Content</Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start your story here..."
            className="bg-gray-800 text-white min-h-[200px]"
            required
          />
        </div>
        <div>
          <Label htmlFor="royalty">Royalty Percentage (5% to 25%)</Label>
          <Input
            id="royalty"
            type="number"
            value={royalty}
            onChange={(e) => setRoyalty(parseInt(e.target.value, 10))}
            min={5}
            max={25}
            className="bg-gray-800 text-white"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button type="button" variant="outline" className="w-full sm:w-40">
            Connect Wallet
          </Button>
          <Button type="submit" className="gradient-bg text-black w-full sm:w-auto" >
           Create Story
          </Button>
        </div>
      </form>
    </div>
  )
}
