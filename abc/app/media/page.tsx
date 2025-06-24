"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  ExternalLink,
  Calendar,
  Clock,
  Eye,
  ThumbsUp,
  BookOpen,
  Video,
  FileText,
  Search,
  Filter,
} from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import ScaleIn from "@/components/animations/scale-in"
import StaggerContainer from "@/components/animations/stagger-container"
import BlockchainPattern from "@/components/blockchain-pattern"

type MediaItem = {
  id: string
  title: string
  description: string
  thumbnail: string
  url: string
  publishedAt: string
  duration?: string
  views?: string
  likes?: string
  category: string
  tags: string[]
  type: "youtube" | "medium"
  author?: string
  readTime?: string
}

export default function MediaPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "youtube" | "medium">("all")
  const [searchTerm, setSearchTerm] = useState("")

  const mediaItems: MediaItem[] = [
    // YouTube Videos
    {
      id: "yt-3",
      title: "Zero Knowledge Proofs Explained | ABC Online Class with Scroll | Episode 1 Part 1",
      description:
        "Live coding session showing how to build and deploy smart contracts on Ethereum, with practical examples.",
      thumbnail: "/media/zkThumbnail.jpg",
      url: "https://www.youtube.com/watch?v=atcbzxIdVMM",
      publishedAt: "2024-03-10",
      duration: "45:18",
      views: "15.7K",
      likes: "1.2K",
      category: "Development",
      tags: ["Smart Contracts", "Ethereum", "Solidity", "Workshop"],
      type: "youtube",
      author: "David Mwangi",
    },
    {
      id: "yt-4",
      title: "Zero Knowledge Proofs Explained | ABC Online Class with Scroll |  Part 2",
      description:
        "Recap of our annual hackathon featuring the most innovative blockchain projects built by African developers.",
      thumbnail: "/media/zkThumbnail.jpg",
      url: "https://www.youtube.com/watch?v=x2C7L7MVLd0&t=23s",
      publishedAt: "2024-04-05",
      duration: "12:20",
      views: "9.8K",
      likes: "743",
      category: "Events",
      tags: ["Hackathon", "Innovation", "Community", "Projects"],
      type: "youtube",
      author: "Fatima Diallo",
    },
    {
      id: "yt-5",
      title: "Africa's Blockchain Club x Lisk Blockchain - Closing Party/Event in Sandton, Johannesburg, SA [2024]",
      description:
      "Exploring the growing job market in blockchain and Web3 across African countries and how to prepare for these roles.",
      thumbnail: "/media/thumbnail.jpg",
      url: "https://www.youtube.com/watch?v=d_xhC6QJyvA&t=3s",
      publishedAt: "2024-12-12",
      duration: "04:00",
      views: "73",
      likes: "19",
      category: "Career",
      tags: ["Web3", "Career", "Jobs", "Skills"],
      type: "youtube",
      author: "Africa's Blockchain Club",
    },
    
    // Medium Articles

    {
      id: "medium-5",
      title: "The breach that rocked the crypto world: Bybit’s $1.5 Billion Heist",
      description:
        "Bybit fell victim to a sophisticated cyberattack that resulted in the theft of over 400,000 ETH — valued at nearly $1.5 billion at the time -unraveling critical questions about security in the DeFi space.",
      thumbnail: "/media/Articles/ByBit.jpg",
      url: "https://medium.com/@africablockchainclub/the-breach-that-rocked-the-crypto-world-bybits-1-5-billion-heist-9a1b0d50ebd3",
      publishedAt: "2025-04-24",
      category: "Exchanges",
      tags: ["Payments", "Remittances", "Cross-border", "Cryptocurrencies"],
      type: "medium",
      author: " Lethabo Mokoena, Sandile M’remi, Sandile Siwundla and Karabo Kayak.",
      readTime: "6 min read",
    },
    {
      id: "medium-4",
      title: "CEX or DEX? The FTX collapse disruption!",
      description:
        "Exploring The shocking downfall of a crypto trading platform called FTX Trading Ltd, amidst allegations of insider trading and fraud, exposed the vulnerabilities such as lack of transparency, and misuse of customer funds in centralised exchanges (CEXs).",
      thumbnail: "/media/Articles/CEX.jpg",
      url: "https://medium.com/@africablockchainclub/cex-or-dex-the-ftx-collapse-disruption-f20a863f416a",
      publishedAt: "2024-08-01",
      category: "Exchanges",
      tags: ["CEX", "Blockchain", "DeFi", "DEX"],
      type: "medium",
      author: "Peter Manda, Karabo Kayak Sandile M’remi, Sandile Siwundla, Lethabo Mokoena and Yankho Saliji",
      readTime: "8 min read",
    },
    {
      id: "medium-6",
      title: "Unlocking Value in Web3 Gaming",
      description:
      "The gaming world is entering an exciting new phase with the rise of Web3 technologies, especially through GameFi — a mix of online gaming and decentralised finance (DeFi). ",
      thumbnail: "/media/Articles/gaming.jpg",
      url: "https://medium.com/@africablockchainclub/unlocking-value-in-web3-gaming-e92401d553ff",
      publishedAt: "2024-11-24",
      category: "GamiFi",
      tags: ["Research", "Universities", "Innovation", "Development"],
      type: "medium",
      author: "Sandile M’remi, Sandile Siwundla, Lethabo Mokoena, Rahaman Kazembe and Peter Manda,",
      readTime: "9 min read",
    },
    {
      id: "medium-3",
      title: "SAM: Smart Asset Management",
      description:
      "A research paper exploring blockchain-driven solutions for automating asset lifecycle management.",
      thumbnail: "/abcWork/sam6.png",
      url: "https://medium.com/@abc/smart-contract-security-practices",
      publishedAt: "2024-03-18",
      category: "Development",
      tags: ["Security", "Smart Contracts", "Best Practices", "Development"],
      type: "medium",
      author: "David Mwangi",
      readTime: "15 min read",
    },
    {
      id: "medium-2",
      title: "DeFi Strategies: A Case Study",
      description:
        "This paper evaluates popular decentralized finance mechanisms and their economic implications.",
      thumbnail: "",
      url: "https://medium.com/@abc/inclusive-financial-systems-defi",
      publishedAt: "2024-02-14",
      category: "DeFi",
      tags: ["DeFi", "Financial Inclusion", "Africa", "Innovation"],
      type: "medium",
      author: "Zainab Osei",
      readTime: "12 min read",
    },
  ]

  const filteredItems = mediaItems.filter((item) => {
    const matchesFilter = activeFilter === "all" || item.type === activeFilter
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const categories = Array.from(new Set(mediaItems.map((item) => item.category)))

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 text-white min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Bg_media.JPG"
            alt="Media Studio Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-black/60 to-black/70"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <BlockchainPattern className="opacity-20" />

          {/* Floating Media Icons */}
          <div className="absolute top-20 left-10 animate-bounce opacity-30">
            <Video className="h-12 w-12 text-amber-500" />
          </div>
          <div className="absolute top-32 right-20 animate-bounce opacity-30" style={{ animationDelay: "1s" }}>
            <FileText className="h-10 w-10 text-amber-400" />
          </div>
          <div className="absolute bottom-32 left-20 animate-bounce opacity-30" style={{ animationDelay: "2s" }}>
            <Play className="h-8 w-8 text-amber-300" />
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce opacity-30" style={{ animationDelay: "0.5s" }}>
            <BookOpen className="h-14 w-14 text-amber-600" />
          </div>

          {/* Geometric Shapes */}
          <div className="absolute top-1/4 left-1/4 h-20 w-20 rotate-45 bg-amber-500/20 animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 h-16 w-16 rotate-12 bg-amber-400/20 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 h-12 w-12 rounded-full bg-amber-300/20 animate-pulse"
            style={{ animationDelay: "0.8s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <FadeIn direction="up">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/20 backdrop-blur-sm px-6 py-2 text-amber-300 border border-amber-500/30">
                <Video className="h-4 w-4" />
                <span className="text-sm font-medium">Educational Content Hub</span>
              </div>

              <h1 className="mb-6 font-mono text-5xl font-bold md:text-6xl lg:text-7xl">
                Media &<span className="block text-amber-400">Resources</span>
              </h1>

              <p className="mb-8 text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
                Explore our collection of educational videos, insightful articles, and thought leadership content on
                blockchain technology in Africa. Learn from experts and stay updated with the latest trends.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 text-black hover:bg-amber-400 transform hover:scale-105 transition-all duration-200 px-8 py-3 text-lg">
                  <Video className="mr-2 h-5 w-5" />
                  Watch Videos
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-200 px-8 py-3 text-lg backdrop-blur-sm"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Read Articles
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">50+</div>
                  <div className="text-sm text-neutral-300">Videos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">100+</div>
                  <div className="text-sm text-neutral-300">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">500K+</div>
                  <div className="text-sm text-neutral-300">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">25K+</div>
                  <div className="text-sm text-neutral-300">Readers</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="h-8 w-5 rounded-full border-2 border-white/50 flex justify-center">
              <div className="h-2 w-1 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Removed since it's now in hero */}

      {/* Search and Filter Section */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search videos and articles..."
                    className="w-full rounded-lg border border-neutral-300 bg-black/50 py-2 pl-10 pr-4 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={activeFilter === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter("all")}
                    className={activeFilter === "all" ? "bg-amber-500 text-black hover:bg-amber-400" : ""}
                  >
                    All Content
                  </Button>
                  <Button
                    variant={activeFilter === "youtube" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter("youtube")}
                    className={activeFilter === "youtube" ? "bg-amber-500 text-black hover:bg-amber-400" : ""}
                  >
                    <Video className="mr-1 h-3 w-3" />
                    Videos
                  </Button>
                  <Button
                    variant={activeFilter === "medium" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter("medium")}
                    className={activeFilter === "medium" ? "bg-amber-500 text-black hover:bg-amber-400" : ""}
                  >
                    <FileText className="mr-1 h-3 w-3" />
                    Articles
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gradient-to-br from-amber-900 via-neutral-800 to-neutral-900 py-10">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mb-8 text-center">
              <h2 className="mb-4 font-mono text-3xl font-bold md:text-4xl">
                {activeFilter === "all"
                  ? "All Content"
                  : activeFilter === "youtube"
                    ? "Video Content"
                    : "Articles & Insights"}
              </h2>
              <p className="text-white">
                {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"} found
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <ScaleIn key={item.id} delay={index * 100}>
                <MediaCard item={item} />
              </ScaleIn>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <FadeIn direction="up">
              <div className="py-16 text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center">
                  <Search className="h-8 w-8 text-neutral-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">No content found</h3>
                <p className="text-neutral-600">
                  {`Try adjusting your search terms or filters to find what you're looking for`}.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("")
                    setActiveFilter("all")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-mono text-3xl font-bold md:text-4xl">Browse by Category</h2>
              <p className="mx-auto max-w-2xl text-lg text-white">
                Explore content organized by topics and themes
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={100} className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category, index) => (
              <ScaleIn key={category} delay={index * 100}>
                <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 group-hover:bg-amber-400 transition-colors">
                        {category === "Education" && <BookOpen className="h-6 w-6 text-white" />}
                        {category === "DeFi" && <Filter className="h-6 w-6 text-white" />}
                        {category === "Development" && <Video className="h-6 w-6 text-white" />}
                        {category === "Events" && <Calendar className="h-6 w-6 text-white" />}
                        {category === "Career" && <ExternalLink className="h-6 w-6 text-white" />}
                        {(category === "Social Impact" ||
                          category === "Analysis" ||
                          category === "Identity" ||
                          category === "Payments" ||
                          category === "Research") && <FileText className="h-6 w-6 text-white" />}
                      </div>
                    </div>
                    <h3 className="font-semibold group-hover:text-amber-600 transition-colors">{category}</h3>
                    <p className="text-sm text-neutral-500">
                      {mediaItems.filter((item) => item.category === category).length} items
                    </p>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-neutral-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 font-mono text-3xl font-bold md:text-4xl">Stay Updated</h2>
              <p className="mb-8 text-lg text-neutral-300">
                Subscribe to our newsletter to get notified about new videos, articles, and blockchain insights.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />
                <Button className="bg-amber-500 text-black hover:bg-amber-400 px-8">Subscribe</Button>
              </div>
              <p className="mt-4 text-sm text-neutral-400">
                Join 5,000+ blockchain enthusiasts who get our weekly updates.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

// Media Card Component
function MediaCard({ item }: { item: MediaItem }) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={item.thumbnail || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay for video type */}
        {item.type === "youtube" && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600">
              <Play className="h-8 w-8 text-white ml-1" />
            </div>
          </div>
        )}

        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <Badge
            variant="secondary"
            className={`${item.type === "youtube" ? "bg-red-600 text-white" : "bg-green-600 text-white"}`}
          >
            {item.type === "youtube" ? (
              <>
                <Video className="mr-1 h-3 w-3" />
                Video
              </>
            ) : (
              <>
                <FileText className="mr-1 h-3 w-3" />
                Article
              </>
            )}
          </Badge>
        </div>

        {/* Duration or read time */}
        {(item.duration || item.readTime) && (
          <div className="absolute bottom-3 right-3">
            <Badge variant="secondary" className="bg-black/70 text-white">
              <Clock className="mr-1 h-3 w-3" />
              {item.duration || item.readTime}
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="bg-gray-800/40 p-6">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {item.category}
          </Badge>
          <span className="text-xs text-neutral-500">{new Date(item.publishedAt).toLocaleDateString()}</span>
        </div>

        <h3 className="mb-2 font-semibold line-clamp-2 group-hover:text-amber-600 transition-colors">{item.title}</h3>

        <p className="mb-4 text-sm text-neutral-500 line-clamp-3">{item.description}</p>

        <div className="mb-4 flex flex-wrap gap-1">
          {item.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {item.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{item.tags.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between">

          <Link href={item.url} target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="ghost" className="text-amber-600 hover:text-amber-700">
              {item.type === "youtube" ? "Watch" : "Read"}
              <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
