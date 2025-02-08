"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Mail, Lock } from "lucide-react"
import { login } from "@/actions/auth/signin.action"
import { useNetwork } from "@/store/NetworkProvider"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const networkContext = useNetwork()
  const { toast } = useToast()
  const router = useRouter()

  // Show a toast when the page loads
  useEffect(() => {
    toast({
      title: "Backend disconnected",
      description: "The backend is currently unavailable. You will be redirected to the home page.",
      variant: "destructive"
    })
    setTimeout(() => {
      router.push("/home")
    }, 3000) // Delay before redirecting to home page
  }, [toast, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await login({
      email,
      password
    }).then((response) => {
      setLoading(false)
      networkContext?.setCurrentUser(response.user)
      const accessToken = response.accessToken
      localStorage.setItem("accessToken", accessToken)
      router.push('/home')
    }).catch((error) => {
      console.log(error)
      toast({
        title: "Error",
        description: "An error occurred",
        variant: "destructive"
      })
      setLoading(false)
    })
    console.log("Login attempt:", { email, password })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex items-center flex-col text-center">
          <Image
            src="/logo.svg"
            width={200}
            height={200}
            alt=""
          />
          <h2 className="text-3xl font-extrabold gradient-text">Welcome back to Threaded Tales</h2>
        </div>
        <Card className="bg-gray-800 border-yellow-500">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-yellow-500">Sign in to your account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-yellow-500">
                  Email address
                </Label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="bg-gray-700 text-white pl-10"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-yellow-500">
                  Password
                </Label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="bg-gray-700 text-white pl-10"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full gradient-bg text-black">
                  Sign in
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/signup" className="text-yellow-500 hover:text-yellow-400 text-sm">
              Don't have an account? Sign up
            </Link>
            <Link href="/forgot-password" className="text-yellow-500 hover:text-yellow-400 text-sm">
              Forgot password?
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
