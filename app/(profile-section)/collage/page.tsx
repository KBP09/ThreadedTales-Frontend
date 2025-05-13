import ImageCollage from "@/components/image-colllage"

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-200">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 text-center">Data Leak Incidents Through Insider Threats</h1>
        <ImageCollage />
      </div>
    </main>
  )
}

