"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, User } from "lucide-react"
import Image from "next/image"
export default function Header() {
  const pathname = usePathname()
  const isLandingPage = pathname === "/"

  return (
    <header className="border-b border-gray-800 py-4 bg-black bg-opacity-30 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt=""
          />

        </Link>
        <div className="flex items-center space-x-4">
          {!isLandingPage && (
            <>
              <div className="relative hidden md:block">
                <Input
                  type="search"
                  placeholder="Search threads..."
                  className="pl-10 pr-4 py-2 w-64 bg-gray-800 text-white rounded-full border-amber-500/50 focus:border-amber-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500" />
              </div>
              <nav className="hidden md:flex space-x-4">
                <Link href="/home" className="hover:text-amber-500">
                  Home
                </Link>
                <Link href="/explore" className="hover:text-amber-500">
                  Explore
                </Link>
                <Link href="/create" className="hover:text-amber-500">
                  Create
                </Link>
              </nav>
              <Link href="/profile">

                <Image
                  src="/user.jpeg"
                  alt="Profile Picture"
                  width={40}
                  height={40}
                  className="rounded-full"
                />

              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

