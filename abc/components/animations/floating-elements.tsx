"use client"

import { useEffect, useRef } from "react"

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll(".floating-element")

    elements.forEach((element, index) => {
      const htmlElement = element as HTMLElement
      htmlElement.style.animationDelay = `${index * 0.5}s`
      htmlElement.style.animationDuration = `${3 + Math.random() * 2}s`
    })
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="floating-element absolute animate-bounce opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          <div className="h-2 w-2 rounded-full bg-amber-500" />
        </div>
      ))}
    </div>
  )
}
