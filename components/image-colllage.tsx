"use client"

import { useState } from "react"
import Image from "next/image"

export default function ImageCollage() {
    // This array will hold our 8 image configurations
    const images = [
        {
            id: 2,
            src: "/news13.jpg",
            alt: "Image 2",
            rotation: "rotate-2",
            zIndex: 2,
            position: "top-[8%] left-[5%]",
        },
        {
            id: 3,
            src: "/news10.jpg",
            alt: "Image 3",
            rotation: "-rotate-1",
            zIndex: 3,
            position: "top-[5%] left-[30%]",
        },
        {
            id: 4,
            src: "/news12.jpg",
            alt: "Image 4",
            rotation: "rotate-3",
            zIndex: 4,
            position: "top-[15%] left-[45%]",
        },
        {
            id: 5,
            src: "/news14.png",
            alt: "Image 5",
            rotation: "-rotate-2",
            zIndex: 5,
            position: "top-[25%] left-[2%]",
        },
        {
            id: 6,
            src: "/news6.png",
            alt: "Image 6",
            rotation: "rotate-1",
            zIndex: 6,
            position: "top-[35%] left-[25%]",
        },
        {
            id: 7,
            src: "/news3.png",
            alt: "Image 7",
            rotation: "-rotate-3",
            zIndex: 7,
            position: "top-[45%] left-[40%]",
        },
        {
            id: 8,
            src: "/news8.png",
            alt: "Image 8",
            rotation: "rotate-2",
            zIndex: 8,
            position: "top-[55%] left-[20%]",
        },
    ]

    // State to track which image is being hovered
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    return (
        <div className="mt-8 ml-24 relative w-full h-[1200px] md:h-[800px] overflow-hidden">
            {images.map((image) => (
                <div
                    key={image.id}
                    className={`absolute ${image.position} ${image.rotation} transition-all duration-300 ease-in-out ${
                        hoveredId === image.id ? "scale-110 shadow-2xl z-[100]" : "z-" + image.zIndex
                    }`}
                    onMouseEnter={() => setHoveredId(image.id)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <div className="shadow-lg relative w-[300px] md:w-[400px] h-[200px] md:h-[250px] rounded-lg overflow-hidden border-2 border-black border-white bg-white">
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            width={500}
                            height={500}
                            className="object-cover"
                            priority={image.id <= 4}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
