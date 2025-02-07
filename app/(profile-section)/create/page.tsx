"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload } from "lucide-react"

export default function Page() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState<File | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Submitting story:", { title, content, image })
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Create a New Story</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
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
          <Label htmlFor="image">Cover Image</Label>
          <div className="flex items-center space-x-4">
            <Input
              id="image"
              type="file"
              onChange={handleImageChange}
              className="bg-gray-800 text-white"
              accept="image/*"
            />
            <Button type="button" variant="outline" className="text-yellow-500">
              <Upload className="mr-2 h-4 w-4" /> Upload
            </Button>
          </div>
        </div>
        <Button type="submit" className="gradient-bg text-black">
          Create Story
        </Button>
      </form>
    </div>
  )
}

