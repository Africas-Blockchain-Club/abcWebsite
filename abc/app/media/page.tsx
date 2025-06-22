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
      id: "yt-1",
      title: "Introduction to Blockchain Technology in Africa",
      description:
        "A comprehensive overview of how blockchain technology is transforming various sectors across Africa, from finance to agriculture.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
      publishedAt: "2024-01-15",
      duration: "15:32",
      views: "12.5K",
      likes: "892",
      category: "Education",
      tags: ["Blockchain", "Africa", "Technology", "Education"],
      type: "youtube",
      author: "Alex Nkosi",
    },
    {
      id: "yt-2",
      title: "Building DeFi Solutions for African Markets",
      description:
        "Deep dive into decentralized finance applications specifically designed for African financial challenges and opportunities.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
      publishedAt: "2024-02-20",
      duration: "22:45",
      views: "8.3K",
      likes: "654",
      category: "DeFi",
      tags: ["DeFi", "Finance", "Smart Contracts", "Africa"],
      type: "youtube",
      author: "Zainab Osei",
    },
    {
      id: "yt-3",
      title: "Smart Contract Development Workshop",
      description:
        "Live coding session showing how to build and deploy smart contracts on Ethereum, with practical examples.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
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
      title: "ABC Hackathon 2024 Highlights",
      description:
        "Recap of our annual hackathon featuring the most innovative blockchain projects built by African developers.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
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
      title: "Web3 Career Opportunities in Africa",
      description:
        "Exploring the growing job market in blockchain and Web3 across African countries and how to prepare for these roles.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
      publishedAt: "2024-05-12",
      duration: "18:55",
      views: "11.2K",
      likes: "856",
      category: "Career",
      tags: ["Web3", "Career", "Jobs", "Skills"],
      type: "youtube",
      author: "Kwame Asante",
    },
    {
      id: "yt-6",
      title: "Blockchain for Social Impact in Africa",
      description:
        "How blockchain technology is being used to address social challenges like identity, healthcare, and education across Africa.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
      publishedAt: "2024-06-08",
      duration: "25:33",
      views: "7.9K",
      likes: "612",
      category: "Social Impact",
      tags: ["Social Impact", "Identity", "Healthcare", "Education"],
      type: "youtube",
      author: "Amara Kone",
    },

    // Medium Articles
    {
      id: "medium-1",
      title: "The Rise of Blockchain Adoption in South Africa",
      description:
        "An in-depth analysis of how South African businesses and individuals are embracing blockchain technology and cryptocurrency.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      url: "https://medium.com/@abc/blockchain-adoption-south-africa",
      publishedAt: "2024-01-22",
      category: "Analysis",
      tags: ["South Africa", "Adoption", "Cryptocurrency", "Business"],
      type: "medium",
      author: "Alex Nkosi",
      readTime: "8 min read",
    },
    {
      id: "medium-2",
      title: "Building Inclusive Financial Systems with DeFi",
      description:
        "How decentralized finance protocols can address financial inclusion challenges across African markets.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      url: "https://medium.com/@abc/inclusive-financial-systems-defi",
      publishedAt: "2024-02-14",
      category: "DeFi",
      tags: ["DeFi", "Financial Inclusion", "Africa", "Innovation"],
      type: "medium",
      author: "Zainab Osei",
      readTime: "12 min read",
    },
    {
      id: "medium-3",
      title: "Smart Contract Security Best Practices",
      description:
        "Essential security considerations and best practices for developing secure smart contracts in the African context.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      url: "https://medium.com/@abc/smart-contract-security-practices",
      publishedAt: "2024-03-18",
      category: "Development",
      tags: ["Security", "Smart Contracts", "Best Practices", "Development"],
      type: "medium",
      author: "David Mwangi",
      readTime: "15 min read",
    },
    {
      id: "medium-4",
      title: "The Future of Digital Identity in Africa",
      description:
        "Exploring blockchain-based identity solutions and their potential to transform identity management across the continent.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      url: "https://medium.com/@abc/future-digital-identity-africa",
      publishedAt: "2024-04-25",
      category: "Identity",
      tags: ["Digital Identity", "Blockchain", "Privacy", "Africa"],
      type: "medium",
      author: "Fatima Diallo",
      readTime: "10 min read",
    },
    {
      id: "medium-5",
      title: "Cross-Border Payments Revolution in Africa",
      description:
        "How blockchain technology is revolutionizing remittances and cross-border payments across African countries.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      url: "https://medium.com/@abc/cross-border-payments-revolution",
      publishedAt: "2024-05-30",
      category: "Payments",
      tags: ["Payments", "Remittances", "Cross-border", "Blockchain"],
      type: "medium",
      author: "Kwame Asante",
      readTime: "9 min read",
    },
    {
      id: "medium-6",
      title: "Blockchain Research and Development in Africa",
      description:
        "Current state of blockchain research across African universities and research institutions, highlighting key innovations.",
      thumbnail: "/placeholder.svg?height=200&width=350",
      url: "https://medium.com/@abc/blockchain-research-development-africa",
      publishedAt: "2024-06-15",
      category: "Research",
      tags: ["Research", "Universities", "Innovation", "Development"],
      type: "medium",
      author: "Amara Kone",
      readTime: "14 min read",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900 py-20 text-white">
        <BlockchainPattern className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn direction="up">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 font-mono text-5xl font-bold md:text-6xl">Media & Resources</h1>
              <p className="mb-8 text-xl text-neutral-200">
                Explore our collection of educational videos, insightful articles, and thought leadership content on
                blockchain technology in Africa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 text-black hover:bg-amber-400">
                  <Video className="mr-2 h-4 w-4" />
                  Watch Videos
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  <FileText className="mr-2 h-4 w-4" />
                  Read Articles
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-amber-500 py-12">
        <div className="container mx-auto px-4">
            <ScaleIn delay={200}>
              <div className="text-center">
                <div className="mb-2 font-mono text-3xl font-bold text-black md:text-4xl">50+</div>
                <div className="text-black/80 font-medium">Videos</div>
              </div>
            </ScaleIn>
            <ScaleIn delay={400}>
              <div className="text-center">
                <div className="mb-2 font-mono text-3xl font-bold text-black md:text-4xl">100+</div>
                <div className="text-black/80 font-medium">Articles</div>
              </div>
            </ScaleIn>
            <ScaleIn delay={600}>
              <div className="text-center">
                <div className="mb-2 font-mono text-3xl font-bold text-black md:text-4xl">500K+</div>
                <div className="text-black/80 font-medium">Views</div>
              </div>
            </ScaleIn>
            <ScaleIn delay={800}>
              <div className="text-center">
                <div className="mb-2 font-mono text-3xl font-bold text-black md:text-4xl">25K+</div>
                <div className="text-black/80 font-medium">Readers</div>
              </div>
            </ScaleIn>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-neutral-50 py-12">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search videos and articles..."
                    className="w-full rounded-lg border border-neutral-300 bg-white py-2 pl-10 pr-4 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
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
      <section className="py-20">
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
              <p className="text-neutral-600">
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
                  Try adjusting your search terms or filters to find what you're looking for.
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
      <section className="bg-neutral-50 py-20">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-mono text-3xl font-bold md:text-4xl">Browse by Category</h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                Explore content organized by topics and themes
              </p>
            </div>
          </FadeIn>

         
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

      <CardContent className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {item.category}
          </Badge>
          <span className="text-xs text-neutral-500">{new Date(item.publishedAt).toLocaleDateString()}</span>
        </div>

        <h3 className="mb-2 font-semibold line-clamp-2 group-hover:text-amber-600 transition-colors">{item.title}</h3>

        <p className="mb-4 text-sm text-neutral-600 line-clamp-3">{item.description}</p>

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
          <div className="flex items-center space-x-4 text-xs text-neutral-500">
            {item.author && <span>By {item.author}</span>}
            {item.views && (
              <div className="flex items-center">
                <Eye className="mr-1 h-3 w-3" />
                {item.views}
              </div>
            )}
            {item.likes && (
              <div className="flex items-center">
                <ThumbsUp className="mr-1 h-3 w-3" />
                {item.likes}
              </div>
            )}
          </div>

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
