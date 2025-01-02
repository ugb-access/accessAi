'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const logos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    alt: "Amazon",
    width: 120,
    className: "py-4"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google",
    width: 120,
    className: "py-4"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    alt: "Netflix",
    width: 120,
    className: "py-4"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    alt: "Apple",
    width: 40,
    className: "py-4"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    alt: "Microsoft",
    width: 120,
    className: "py-4"
  },
]

export function LogoCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (logos.length * 2))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-medium text-muted-foreground mb-8">
          Join 100k+ websites worldwide that are already accessible to everyone
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-1000"
            style={{
              transform: `translateX(-${(scrollPosition * 100) / logos.length}%)`,
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className={cn(
                  "flex-none w-[200px] h-[80px]",
                  "flex items-center justify-center",
                  "grayscale hover:grayscale-0 transition-all",
                )}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={40}
                  className={cn("object-contain", logo.className)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

