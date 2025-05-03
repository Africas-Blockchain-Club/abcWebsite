"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlockchainTimeline() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const timelineEvents = [
    {
      year: "2008",
      title: "Bitcoin Whitepaper",
      description: "Satoshi Nakamoto publishes the Bitcoin whitepaper",
    },
    {
      year: "2009",
      title: "Bitcoin Launch",
      description: "The first Bitcoin block is mined",
    },
    {
      year: "2015",
      title: "Ethereum Launch",
      description: "Ethereum platform launches with smart contract functionality",
    },
    {
      year: "2017",
      title: "ICO Boom",
      description: "Initial Coin Offering boom brings blockchain to mainstream attention",
    },
    {
      year: "2020",
      title: "DeFi Summer",
      description: "Decentralized Finance applications gain massive adoption",
    },
    {
      year: "2021",
      title: "NFT Explosion",
      description: "Non-Fungible Tokens become a global phenomenon",
    },
    {
      year: "2023",
      title: "Africa's Blockchain Rise",
      description: "African blockchain adoption accelerates with local solutions",
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const scrollAmount = container.clientWidth * 0.8

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }

    // Check scroll position after animation
    setTimeout(() => {
      if (!scrollContainerRef.current) return
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }, 300)
  }

  const handleScroll = () => {
    if (!scrollContainerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  return (
    <div className="w-full">
      <h3 className="mb-6 text-center font-mono text-xl font-bold">Blockchain Evolution</h3>

      <div className="relative">
        {/* Navigation buttons */}
        <div className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 md:-left-6">
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full bg-white shadow-md ${!canScrollLeft ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Scroll left</span>
          </Button>
        </div>

        <div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 md:-right-6">
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full bg-white shadow-md ${!canScrollRight ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Scroll right</span>
          </Button>
        </div>

        {/* Timeline container */}
        <div
          ref={scrollContainerRef}
          className="relative flex overflow-x-auto pb-10 pt-10 scrollbar-hide"
          onScroll={handleScroll}
        >
          {/* Timeline line */}
          <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-amber-500"></div>

          {/* Timeline events */}
          <div className="flex space-x-16 px-4">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className="relative flex flex-col items-center" style={{ minWidth: "200px" }}>
                {/* Center dot */}
                <div className="absolute top-0 h-4 w-4 translate-y-[-50%] rounded-full bg-amber-500 z-10"></div>

                {/* Year above the line */}
                <div className="absolute -top-10 font-mono text-sm font-bold text-amber-600">{event.year}</div>

                {/* Content below the line */}
                <div className="mt-8 rounded-lg border bg-white p-4 shadow-sm">
                  <h4 className="font-semibold">{event.title}</h4>
                  <p className="text-sm text-neutral-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
