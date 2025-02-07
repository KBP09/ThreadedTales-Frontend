"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, User } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b border-gray-800 py-4 bg-black bg-opacity-30 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <BookOpen className="mr-2 text-yellow-500" />
          <span className="gradient-text">Threaded Tales</span>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Input
              type="search"
              placeholder="Search threads..."
              className="pl-10 pr-4 py-2 w-64 bg-gray-800 text-white rounded-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/explore" className="hover:text-yellow-500">
              Explore
            </Link>
            <Link href="/create" className="hover:text-yellow-500">
              Create
            </Link>
          </nav>
          <Button variant="outline" className="bg-yellow-500 text-black hover:bg-yellow-600">
            Sign In
          </Button>
          <Link href="/profile">
            <Button variant="ghost" className="text-yellow-500 hover:text-yellow-600">
              <User />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

