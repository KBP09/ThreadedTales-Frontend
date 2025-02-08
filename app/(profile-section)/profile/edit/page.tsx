"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Facebook, Instagram, Upload } from "lucide-react"

export default function EditProfilePage() {
  const router = useRouter()
  const [name, setName] = useState("kanak")
  const [bio, setBio] = useState("Storyteller Extraordinaire")
  const [github, setGithub] = useState("")
  const [facebook, setFacebook] = useState("")
  const [instagram, setInstagram] = useState("")
  const [avatar, setAvatar] = useState<File | null>(null)

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Profile update:", { name, bio, github, facebook, instagram, avatar })
    router.push("/profile")
  }

  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-2xl mx-auto bg-gray-800 border-amber-500/50">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center gradient-text">Edit Your Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="shrink-0">
                <Image
                  src="/user.jpeg"
                  alt="Current profile photo"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <Label htmlFor="avatar" className="cursor-pointer">
                <span className="flex items-center space-x-2 text-amber-500">
                  <Upload className="w-6 h-6" />
                  <span>Change Avatar</span>
                </span>
                <Input id="avatar" type="file" className="hidden" onChange={handleAvatarChange} accept="image/*" />
              </Label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-amber-500">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-700 text-white border-amber-500/50 focus:border-amber-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio" className="text-amber-500">
                Bio
              </Label>
              <Textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="bg-gray-700 text-white border-amber-500/50 focus:border-amber-500"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="github" className="text-amber-500">
                GitHub
              </Label>
              <div className="relative">
                <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  id="github"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  className="bg-gray-700 text-white pl-10 border-amber-500/50 focus:border-amber-500"
                  placeholder="Your GitHub username"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="facebook" className="text-amber-500">
                Facebook
              </Label>
              <div className="relative">
                <Facebook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  id="facebook"
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                  className="bg-gray-700 text-white pl-10 border-amber-500/50 focus:border-amber-500"
                  placeholder="Your Facebook profile URL"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="instagram" className="text-amber-500">
                Instagram
              </Label>
              <div className="relative">
                <Instagram className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  id="instagram"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  className="bg-gray-700 text-white pl-10 border-amber-500/50 focus:border-amber-500"
                  placeholder="Your Instagram username"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="ghost"
            onClick={() => router.push("/profile")}
            className="text-gray-400 hover:text-amber-500"
          >
            Cancel
          </Button>
          <Button type="submit" className="gradient-bg text-black" onClick={handleSubmit}>
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

