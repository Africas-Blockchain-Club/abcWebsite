"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Event = {
  id: string
  title: string
  description: string
  image: string
  date: string
  location: string
  type: "upcoming" | "ongoing" | "past"
}

export default function UpcomingEvents() {
  const [activeFilter, setActiveFilter] = useState<"all" | "upcoming" | "ongoing" | "past">("all")

  const events: Event[] = [
    {
      id: "web3-hackathon",
      title: "Web3 Hackathon",
      description: "Join us for a weekend of building innovative Web3 projects.",
      image: "/images/web3-hackathon.jpg",
      date: "June 10-12, 2025",
      location: "Johannesburg, South Africa",
      type: "upcoming",
    },
    {
      id: "blockchain-basics",
      title: "Blockchain Basics Workshop",
      description: "Learn the fundamentals of blockchain technology and its applications.",
      image: "/images/blockchain-workshop.jpg",
      date: "May 25, 2025",
      location: "Cape Town, South Africa",
      type: "upcoming",
    },
    {
      id: "defi-deep-dive",
      title: "DeFi Deep Dive",
      description: "Explore the world of decentralized finance and its potential.",
      image: "/images/defi-workshop.jpg",
      date: "July 5, 2025",
      location: "Virtual Event",
      type: "upcoming",
    },
    {
      id: "smart-contract-course",
      title: "Smart Contract Development",
      description: "Weekly course on developing secure smart contracts on Ethereum.",
      image: "/images/web3-hackathon.jpg",
      date: "Every Saturday",
      location: "Johannesburg, South Africa",
      type: "ongoing",
    },
    {
      id: "blockchain-mentorship",
      title: "Blockchain Mentorship Program",
      description: "Ongoing mentorship program for aspiring blockchain developers.",
      image: "/images/blockchain-workshop.jpg",
      date: "Monthly Intake",
      location: "Virtual",
      type: "ongoing",
    },
    {
      id: "past-hackathon",
      title: "Africa Blockchain Hackathon 2024",
      description: "Our annual hackathon that brought together developers from across the continent.",
      image: "/images/defi-workshop.jpg",
      date: "March 15-17, 2024",
      location: "Lagos, Nigeria",
      type: "past",
    },
    {
      id: "past-conference",
      title: "Web3 Africa Conference",
      description: "The largest blockchain conference in Africa featuring speakers from around the world.",
      image: "/images/web3-hackathon.jpg",
      date: "February 5-7, 2024",
      location: "Nairobi, Kenya",
      type: "past",
    },
  ]

  const filteredEvents = events.filter((event) => {
    if (activeFilter === "all") return true
    return event.type === activeFilter
  })

  return (
    <div className="w-full ">
      <h2 className="mb-8 text-center font-mono text-4xl font-bold text-white md:text-5xl">Community Events</h2>
      <p className="mx-auto mb-8 max-w-3xl text-xl text-center text-neutral-300">
        Join our community events to learn, build, and connect with fellow blockchain enthusiasts across Africa
      </p>

      <Tabs defaultValue="all" className="mb-12" onValueChange={(value) => setActiveFilter(value as any)}>
        <div className="flex justify-center">
          <TabsList className="bg-neutral-700">
            <TabsTrigger value="all" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
              All Events
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="ongoing" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
              Ongoing
            </TabsTrigger>
            <TabsTrigger value="past" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
              Past Events
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="mt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ongoing" className="mt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="mt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-10 text-center">
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-neutral-900">
          Suggest an Event
        </Button>
      </div>
    </div>
  )
}

// Helper component for event cards
function EventCard({ event }: { event: Event }) {
  return (
    <div className="group overflow-hidden rounded-lg bg-neutral-900">
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        {/* Event type badge */}
        <div className="absolute right-3 top-3">
          {event.type === "upcoming" && (
            <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">Upcoming</span>
          )}
          {event.type === "ongoing" && (
            <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">Ongoing</span>
          )}
          {event.type === "past" && (
            <span className="rounded-full bg-neutral-500 px-3 py-1 text-xs font-medium text-white">Past</span>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 font-mono text-xl font-bold text-white">{event.title}</h3>
        <p className="mb-4 text-neutral-300">{event.description}</p>

        <div className="mb-4 space-y-2 text-sm text-neutral-400">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-amber-500" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4 text-amber-500" />
            <span>{event.location}</span>
          </div>
        </div>

        {event.type !== "past" ? (
          <Button className="w-full bg-amber-500 text-black hover:bg-amber-400">Register</Button>
        ) : (
          <Button variant="outline" className="w-full border-neutral-700 text-neutral-300 hover:bg-neutral-800">
            View Details
          </Button>
        )}
      </div>
    </div>
  )
}
