"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import TrendingThreads from "@/components/TrendingThreads"
import { BookOpen, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <div className="container mx-auto py-12">
      <motion.section
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500">
          Threaded Tales
        </h1>
        <p className="text-xl text-purple-300 mb-8">Weave your stories, branch your narratives</p>
        <div className="space-x-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:from-amber-600 hover:to-orange-600"
          >
            <Link href="/create">
              <BookOpen className="mr-2" />
              Start a New Thread
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
          >
            <Link href="/explore">
              <Sparkles className="mr-2" />
              Explore Threads
            </Link>
          </Button>
        </div>
      </motion.section>
      <TrendingThreads />
    </div>
  )
}

