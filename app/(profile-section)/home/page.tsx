"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import TrendingThreads from "@/components/TrendingThreads"
import { BookOpen, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-16">
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
        <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:from-amber-600 hover:to-orange-600 w-full sm:w-auto"
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
            className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black w-full sm:w-auto"
          >
            <Link href="/explore">
              <Sparkles className="mr-2" />
              Explore Threads
            </Link>
          </Button>
        </div>
      </motion.section>

      <h2 className="text-3xl font-bold mb-8 gradient-text">Trending Threads</h2>
      <TrendingThreads />

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Because you like sci-fi</h2>
        <TrendingThreads />
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Because you like thriller</h2>
        <TrendingThreads />
      </div>
    </div>
  )
}
