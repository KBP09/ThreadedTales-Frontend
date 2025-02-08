"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Menu } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const isLandingPage = pathname === "/"
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-800 py-4 bg-black bg-opacity-30 backdrop-blur-md relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="Logo"
          />
        </Link>

        <div className="flex items-center space-x-4">
          {!isLandingPage && (
            <>
              {/* Search Input on larger screens */}
              <div className="relative hidden md:block">
                <Input
                  type="search"
                  placeholder="Search threads..."
                  className="pl-10 pr-4 py-2 w-64 bg-gray-800 text-white rounded-full border-amber-500/50 focus:border-amber-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500" />
              </div>

              {/* Mobile Menu Toggle */}
              <Button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="md:hidden text-amber-100 p-2"
              >
                <Menu className="w-6 h-6" />
              </Button>

              {/* Desktop Navigation Links */}
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

              {/* Profile Image */}
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

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-black z-60 p-4 transition-all duration-300 transform ease-in-out mt-12">
          <nav className="space-y-4 text-center">
            <Link href="/home" className="block text-amber-500 py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/explore" className="block text-amber-500 py-2" onClick={() => setIsMenuOpen(false)}>
              Explore
            </Link>
            <Link href="/create" className="block text-amber-500 py-2" onClick={() => setIsMenuOpen(false)}>
              Create
            </Link>
            <Link href="/profile" className="block text-amber-500 py-2" onClick={() => setIsMenuOpen(false)}>
              Profile
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
