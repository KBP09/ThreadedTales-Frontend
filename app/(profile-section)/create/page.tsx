"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Web3 from "web3"
import axios from "axios"
import { User } from "@/types/types"

const web3 = new Web3(window.ethereum);

export default function Page() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [royalty, setRoyalty] = useState<number>(5)
  const [userAddress, setUserAddress] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null);

  const connectWallet = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" })
      const accounts = await web3.eth.getAccounts()
      setUserAddress(accounts[0])
      alert(`Wallet connected: ${accounts[0]}`)
    } catch (error) {
      console.error("Wallet connection failed", error)
      alert("Failed to connect wallet")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!userAddress) {
      alert("Please connect your wallet first.")
      return
    }

    setLoading(true)
    try {
      const userData = localStorage.getItem("userAccounts");
      if (userData) {
        setUser(JSON.parse(userData));
      }
      const payload = {
        userAddress,
        storyAddress: "threaded_tales_stories",
        storyName: title,
        royaltyPercentage: royalty,
        content,
        userId:user?.id,
        title
      }

      const response = await axios.post('http://localhost:5000/api/create/', payload)
      alert(`Story created successfully! Transaction Hash: ${response.data.transactionHash}`)
    } catch (error) {
      console.error("Error creating story:", error)
      alert("Failed to create the story. Please try again.")
    } finally {
      setLoading(false)
    }
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
        <div className="flex gap-4">
          <Button type="button" onClick={connectWallet} variant="outline" className="w-40">
            {userAddress ? "Wallet Connected" : "Connect Wallet"}
          </Button>
          <Button type="submit" className="gradient-bg text-black" disabled={loading}>
            {loading ? "Creating Story..." : "Create Story"}
          </Button>
        </div>
      </form>
    </div>
  )
}
