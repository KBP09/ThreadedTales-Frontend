import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/footer"
import type React from "react"
import { NetworkProvider } from "@/store/NetworkProvider"
import { Toaster } from "@/components/ui/toaster"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Threaded Tales",
  description: "Explore and create interactive story threads",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a0a] text-white min-h-screen flex flex-col`}>
        <div className="fixed inset-0 bg-[url('/images/dark-texture.png')] opacity-10 z-0"></div>
        <Header />
        <NetworkProvider>
          <main className="flex-grow relative z-10">{children}</main>
        </NetworkProvider>
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
