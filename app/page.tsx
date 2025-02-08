import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Feather, Users, Sparkles } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            width={200}
            height={200}
            alt=""
          />
        </div>
        <nav className="space-x-4">
          <Link href="/login" className="text-yellow-500 hover:text-yellow-400">
            Login
          </Link>
          <Link href="/signup">
            <Button
              variant="outline"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
            >
              Sign Up
            </Button>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight gradient-text">
              Weave Your Stories, Connect Through Words
            </h1>
            <p className="text-xl text-gray-300">
              Join Threaded Tales, where every story is a collaborative journey. Create, continue, and explore
              narratives that span across imaginations.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" className="gradient-bg text-black">
                <Link href="/home">Start Your Journey</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
              >
                <Link href="/explore">Explore Stories</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/quantum.jpeg"
              alt="Storytelling"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Feather className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Craft Your Tale</h3>
            <p className="text-purple-300">
              Start a story and watch it grow with contributions from writers worldwide.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Users className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaborate</h3>
            <p className="text-purple-300">Join forces with other writers to create intricate, branching narratives.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Sparkles className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Discover</h3>
            <p className="text-purple-300">Explore a vast library of user-generated stories across all genres.</p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 py-8 mt-16">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2023 Threaded Tales. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

