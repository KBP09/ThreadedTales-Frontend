"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ContributionModalProps {
  isOpen: boolean
  onClose: () => void
  nodeId: string | null
}

export default function ContributionModal({ isOpen, onClose, nodeId }: ContributionModalProps) {
  const [content, setContent] = useState("")

  const handleSubmit = () => {
    // Here you would typically send the content to your backend
    console.log("Submitting contribution:", { nodeId, content })
    setContent("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white">
        <DialogHeader>
          <DialogTitle>Contribute to the Story</DialogTitle>
          <DialogDescription>Add your part to continue the thread. Be creative and respectful!</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            placeholder="Type your contribution here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="bg-gray-700 text-white"
            rows={5}
          />
        </div>
        <DialogFooter>
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="bg-gradient-to-r from-pink-500 to-violet-500">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

