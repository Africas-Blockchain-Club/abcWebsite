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
  registrationUrl?: string
  detailsUrl?: string
}

export default function UpcomingEvents() {
  const [activeFilter, setActiveFilter] = useState<"all" | "upcoming" | "ongoing" | "past">("all")
  
  const events: Event[] = [
    {
      id: "Party Event",
      title: "5th Global Pizza Party 2025",
      description: "In celebration of Bitcoin Pizza Day, join us and thousands around the world as PizzaDAO throws its 5th Global Pizza Party – and yes, it’s as legendary as it sounds!",
      image: "/Events/PizzaDOA.png",
      date: "May 22, 2025",
      location: "The Wild Side Resturant, Ranburg",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7329186438976004096",
    },
    {
      id: "Expeditions",
      title: "Edge Vity South Africa: 10 Days Expedition",
      description: "Attended as part of the 10 days expedition in Cape Town, Networking with Industry experts from all over the world",
      image: "/Events/EdgeCity.jpg",
      date: "April 3-13, 2025",
      location: "Cape Town & Stellenbosch, South Africa",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/posts/africa-s-blockchain-club_edgecity-africablockchainclub-blockchain-activity-7318225332753317888-2_CG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADc4tN4B5Q2YdTN2Yte0JKHBi7u_DS0f5l8",
    },
    {
      id: "Party",
      title: "ABC x Lisk Closing party",
      description: "End of the year closing party for Africa's blockchain Club partnered with Lisk Blockchain",
      image: "/Events/LiskClosing.jpg",
      date: "December 22, 2024",
      location: "Inanda Club Business Park, Sandton, Johannesburg",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/posts/africa-s-blockchain-club_blockchain-lisk-africablockchainclub-activity-7280975333825142784-AdYW?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: "Bootcamp",
      title: "Lisk x TUT :Lisk Blockchain Introduction Event",
      description: "fun activities, playing sweep stake game that was launched on Lisk. We had exciting giveaways, and great prizes for answering questions—plus, refreshing drinks to keep the energy upp",
      image: "/Events/TUT.jpg",
      date: "Mar 6, 2025",
      location: "Tshwane University of Technology, Pretoria",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7308150155097042944",
    },
    {
      id: "Blockchain Bootcamp",
      title: "UJ Blockchain Bootcamp x ABC x Alephium",
      description: "In an exciting collaboration with Africa's Blockchain Club, the fourth week of the South Africa-Swiss Bilateral Research Chair in Blockchain Technology (hashtag#UJBlockchain) masterclass featured Maud Bannwart, the Chief Operating Officer of Alephium. ",
      image: "/Events/UJ Kingsway campus Virtual Online(1).png",
      date: "Feb - Mar 08, 2025 (4 weeks)",
      location: "University of Johannesburg (APK) and virtual",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7303719866069352448",
    },
    {
      id: "Blockchain Conf",
      title: "Blockchain Africa Conference 2024",
      description: "Our members had a great time ✨ enjoying the 10th annual Blockchain Africa Conference 2024 that at Council for Scientific and Industrial Research (CSIR) hosted by Bitcoin Events 🎉",
      image: "/Events/BlockchainConf.jpg",
      date: "Feb - Mar 08, 2025 (4 weeks)",
      location: "University of Johannesburg (APK) and virtual",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7266030468754460672/",
    },
    {
      id: "DevCon",
      title: "Thailand 🇹🇭 for DevCon7",
      description: "co-founder, Karabo Kayak , is currently in Thailand 🇹🇭 for DevCon7, diving into the heart of the Web3 world",
      image: "/Events/devCon.jpg",
      date: "October 5, 2024",
      location: "132 Jan Smuts Ave, WeThinkCode, Rosebank, Johannesburg",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/posts/africa-s-blockchain-club_devcon-web3-activity-7261930179151745025-YR-9/?utm_source=share&utm_medium=member_android",
    },
    {
      id: "Hackathon",
      title: "EthCapeTown x W3Node : Hackathon & Conference",
      description: "co-founder, Karabo Kayak , is currently in Thailand 🇹🇭 for DevCon7, diving into the heart of the Web3 world",
      image: "/Events/EthCapetown.png",
      date: "September 20-22, 2024",
      location: "Dock Road, Cape Town",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/posts/africa-s-blockchain-club_devcon-web3-activity-7261930179151745025-YR-9/?utm_source=share&utm_medium=member_android",
    },
    {
      id: "Showcase",
      title: "UJ Blockchain Demo Day",
      description: " Karabo Kayak, co-founder of Africa's Blockchain Club and OffConnectX, delivered an insightful speech at the UJBlockchain DemoDay, aimed at encouraging attendees to advance their blockchain skills. ",
      image: "/Events/UJ showcase.jpg",
      date: "September 5, 2024",
      location: "UJ Business School, Auckland Park, Johannesburg",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/posts/south-africa-swiss-bilateral-research-chair-in-blockchain-technology_ujblockchain-demoday-ujblockchain-ugcPost-7247953485042790401-f3tS/?utm_source=share&utm_medium=member_android",
    },
    {
      id: "Partnership",
      title: "Biptap and ABC Partnership Announcement",
      description: "Launch Event Announvcing Biptap and Africa's Blockchain Club Partnership",
      image: "/Events/biptap.png",
      date: "October 5, 2024",
      location: "132 Jan Smuts Ave, WeThinkCode, Rosebank, Johannesburg",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/posts/africa-s-blockchain-club_we-have-exciting-big-news-to-share-activity-7246578705085435906-tZij?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: "Workshop/Meetup",
      title: "Avalanche x ABC Worksho/MeetUp",
      description: "Introduction to Avalanche blockchain and its ecosystem. ABC meetup and refreshments",
      image: "/Events/Avax.png",
      date: "July 20, 2024",
      location: "132 Jan Smuts,WeThinkCode, Rosebank, Johannesburg",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7218907051127689217",
    },
    {
      id: "Zero-Knowledge-Proofs",
      title: "Scroll x ABC : Zero-Knowledge Proofs (ZK)",
      description: "Learn the fundamentals of Zero Knowledge proofs technology and its applications.",
      image: "/Events/scroll.png",
      date: "June 29, 2022",
      location: "Hybrid",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/posts/africa-s-blockchain-club_blockchain-scroll-zks-activity-7213243972964524032-0r1q?utm_source=share&utm_medium=member_desktop",
    },
  ]
  
  const filteredEvents = events.filter((event) => {
    if (activeFilter === "all") return true
    return event.type === activeFilter
  })

  return (
    <div className="w-full ">
      <h2 className="mb- text-center font-mono text-4xl font-bold text-white md:text-5xl">Community Events</h2>
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

    </div>
  )
}

// Helper component for event cards
function EventCard({ event }: { event: Event }) {
  const handleRegisterClick = () => {
    if (event.registrationUrl) {
      window.open(event.registrationUrl, "_blank", "noopener,noreferrer")
    } else {
      // Fallback to internal registration page
      window.location.href = `/events/${event.id}/register`
    }
  }

  const handleViewDetailsClick = () => {
    if (event.detailsUrl) {
      window.location.href = event.detailsUrl
    } else {
      // Fallback to internal event details page
      window.location.href = `/events/${event.id}`
    }
  }

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
          <Button className="w-full bg-amber-500 text-black hover:bg-amber-400" onClick={handleRegisterClick}>
            Register
          </Button>
        ) : (
          <Button
            variant="outline"
            className="w-full border-neutral-700 text-neutral-300 hover:bg-neutral-800"
            onClick={handleViewDetailsClick}
          >
            View Details
          </Button>
        )}
      </div>
    </div>
  )
}

