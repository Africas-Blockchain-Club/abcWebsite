"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function FloatingNodes() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let nodes: Node[] = []

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initNodes()
    }

    // Initialize nodes
    const initNodes = () => {
      nodes = []
      const nodeCount = Math.floor((canvas.width * canvas.height) / 20000) // Adjust density

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: i % 3 === 0 ? "#f59e0b" : "#ffffff",
        })
      }
    }

    // Draw connections between nodes
    const drawConnections = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(245, 158, 11, ${0.1 - distance / 1000})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node) => {
        // Update position
        node.x += node.speedX
        node.y += node.speedY

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.speedX *= -1
        if (node.y < 0 || node.y > canvas.height) node.speedY *= -1

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()
      })

      drawConnections()

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20" />
}
