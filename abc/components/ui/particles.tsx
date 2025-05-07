"use client"

import { useEffect, useRef } from "react"

export default function ExpansiveNetworkBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    // Set canvas to cover entire viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Color palette with modern tech colors
    const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b"]
    
    // Create more nodes for expansive feel
    const nodeCount = Math.min(80, Math.max(40, Math.floor(window.innerWidth / 15)))
    const nodes = Array.from({ length: nodeCount }, (_, i) => {
      const isHub = i % 7 === 0 // Hub nodes
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: isHub ? Math.random() * 6 + 6 : Math.random() * 4 + 2,
        color: isHub ? colors[Math.floor(Math.random() * colors.length)] : "#64748b",
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        connections: [] as number[],
        pulse: Math.random() * Math.PI * 2,
        isHub,
      }
    })

    // Create meaningful connections
    nodes.forEach((node, i) => {
      // Hubs connect to more nodes
      const connectionCount = node.isHub ? 
        Math.floor(Math.random() * 5) + 5 : 
        Math.floor(Math.random() * 3) + 2
        
      for (let j = 0; j < connectionCount; j++) {
        // Prefer connecting to hubs
        const target = node.isHub ? 
          Math.floor(Math.random() * nodes.length) :
          nodes.findIndex(n => n.isHub && n !== node) > -1 ? 
            nodes.findIndex(n => n.isHub && n !== node) :
            Math.floor(Math.random() * nodes.length)
            
        if (target !== i && !node.connections.includes(target)) {
          node.connections.push(target)
          // Make it bidirectional
          if (!nodes[target].connections.includes(i)) {
            nodes[target].connections.push(i)
          }
        }
      }
    })

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw connections with depth effect
      nodes.forEach((node, i) => {
        node.connections.forEach((targetIndex) => {
          const target = nodes[targetIndex]
          const dx = node.x - target.x
          const dy = node.y - target.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 300) { // Increased connection range
            const alpha = node.isHub || target.isHub ? 
              0.4 - distance/800 : 
              0.2 - distance/1000
            
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(target.x, target.y)
            ctx.strokeStyle = `rgba(100, 116, 139, ${alpha})`
            ctx.lineWidth = node.isHub || target.isHub ? 1.2 : 0.6
            ctx.stroke()
          }
        })
      })

      // Update and draw nodes
      nodes.forEach((node) => {
        // Update position with fluid movement
        node.x += node.vx
        node.y += node.vy
        
        // Elastic boundary with momentum preservation
        const bounceFactor = 0.7
        if (node.x < 0) {
          node.x = 0
          node.vx *= -bounceFactor
        } else if (node.x > canvas.width) {
          node.x = canvas.width
          node.vx *= -bounceFactor
        }
        if (node.y < 0) {
          node.y = 0
          node.vy *= -bounceFactor
        } else if (node.y > canvas.height) {
          node.y = canvas.height
          node.vy *= -bounceFactor
        }
        
        // Pulsing effect for hub nodes
        node.pulse += 0.03
        const pulseFactor = node.isHub ? 
          Math.sin(node.pulse) * 0.3 + 1 : 1

        // Glow effect for hubs
        if (node.isHub) {
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.radius * pulseFactor * 2, 0, Math.PI * 2)
          const gradient = ctx.createRadialGradient(
            node.x, node.y, node.radius * pulseFactor,
            node.x, node.y, node.radius * pulseFactor * 2
          )
          gradient.addColorStop(0, `${node.color}60`)
          gradient.addColorStop(1, `${node.color}00`)
          ctx.fillStyle = gradient
          ctx.fill()
        }
        
        // Main node body
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * pulseFactor, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(
          node.x - node.radius * 0.3,
          node.y - node.radius * 0.3,
          node.radius * 0.1,
          node.x,
          node.y,
          node.radius * pulseFactor
        )
        gradient.addColorStop(0, node.isHub ? "white" : "#e2e8f0")
        gradient.addColorStop(1, node.color)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Handle window resize
    const handleResize = () => {
      resizeCanvas()
      // Don't recreate nodes on resize to maintain connections
    }

    window.addEventListener("resize", handleResize)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full -z-10 opacity-30 ${className}`}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
      }}
    />
  )
}