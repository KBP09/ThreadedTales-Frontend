"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Shield } from "lucide-react"

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the OTP verification logic
    console.log("OTP verification attempt:", { otp })
  }

  return (
    <div className="container mx-auto py-12 flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md bg-gray-800 border-yellow-500">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-yellow-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-center gradient-text">Verify Your Account</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 text-center mb-4">
            We've sent a verification code to your email. Please enter it below.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp" className="text-yellow-500">
                Verification Code
              </Label>
              <div className="relative">
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter your verification code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="bg-gray-700 text-white pl-10"
                  required
                />
                <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500 h-5 w-5" />
              </div>
            </div>
            <Button type="submit" className="w-full gradient-bg text-black">
              Verify
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-gray-400">
            Didn't receive the code?{" "}
            <Button variant="link" className="text-yellow-500 p-0">
              Resend
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

