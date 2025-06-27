"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, GraduationCap, Coins, Globe, Shield, Users, Star, ExternalLink } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import ScaleIn from "@/components/animations/scale-in"
import StaggerContainer from "@/components/animations/stagger-container"

type PartnerCategory = "all" | "universities" | "protocols" | "enterprises" | "governments" | "ngos"

interface Partner {
  id: string
  name: string
  logo: string
  category: PartnerCategory
  description: string
  partnership: string
  website: string
  featured: boolean
  tags: string[]
}

export default function PartnersSection() {
  const [activeCategory, setActiveCategory] = useState<PartnerCategory>("all")
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null)

  const partners: Partner[] = [
    // Universities
    {
      id: "university-cape-town",
      name: "University of Cape Town",
      logo: "/placeholder.svg?height=80&width=200&text=UCT",
      category: "universities",
      description: "Leading research collaboration on blockchain applications in African contexts",
      partnership: "Research & Education Partner",
      website: "https://uct.ac.za",
      featured: true,
      tags: ["Research", "Education", "Innovation"],
    },
    {
      id: "university-witwatersrand",
      name: "University of the Witwatersrand",
      logo: "/placeholder.svg?height=80&width=200&text=Wits",
      category: "universities",
      description: "Joint blockchain curriculum development and student exchange programs",
      partnership: "Academic Partner",
      website: "https://wits.ac.za",
      featured: false,
      
      tags: ["Curriculum", "Research", "Students"],
    },
    {
      id: "university-lagos",
      name: "University of Lagos",
      logo: "/placeholder.svg?height=80&width=200&text=UNILAG",
      category: "universities",
      description: "West African blockchain research hub and talent development center",
      partnership: "Regional Hub Partner",
      website: "https://unilag.edu.ng",
      featured: true,
      
      tags: ["West Africa", "Talent", "Hub"],
    },

    // Blockchain Protocols
    {
      id: "ethereum-foundation",
      name: "Ethereum Foundation",
      logo: "/placeholder.svg?height=80&width=200&text=Ethereum",
      category: "protocols",
      description: "Supporting African Ethereum development through grants and technical mentorship",
      partnership: "Technology Partner",
      website: "https://ethereum.org",
      featured: true,
      
      tags: ["Ethereum", "Grants", "Development"],
    },
    {
      id: "polygon",
      name: "Polygon",
      logo: "/placeholder.svg?height=80&width=200&text=Polygon",
      category: "protocols",
      description: "Scaling solutions and infrastructure support for African dApps",
      partnership: "Infrastructure Partner",
      website: "https://polygon.technology",
      featured: true,
      
      tags: ["Scaling", "Infrastructure", "dApps"],
    },
    {
      id: "chainlink",
      name: "Chainlink",
      logo: "/placeholder.svg?height=80&width=200&text=Chainlink",
      category: "protocols",
      description: "Oracle solutions and real-world data integration for African blockchain projects",
      partnership: "Oracle Partner",
      website: "https://chain.link",
      featured: false,
     
      tags: ["Oracles", "Data", "Integration"],
    },

    
  ]

  const categories = [
    { id: "all", label: "All Partners", icon: <Globe className="h-4 w-4" />, count: partners.length },
    {
      id: "universities",
      label: "Universities",
      icon: <GraduationCap className="h-4 w-4" />,
      count: partners.filter((p) => p.category === "universities").length,
    },
    {
      id: "protocols",
      label: "Protocols",
      icon: <Coins className="h-4 w-4" />,
      count: partners.filter((p) => p.category === "protocols").length,
    },
    {
      id: "enterprises",
      label: "Enterprises",
      icon: <Building2 className="h-4 w-4" />,
      count: partners.filter((p) => p.category === "enterprises").length,
    },
    {
      id: "governments",
      label: "Governments",
      icon: <Shield className="h-4 w-4" />,
      count: partners.filter((p) => p.category === "governments").length,
    },
    {
      id: "ngos",
      label: "NGOs",
      icon: <Users className="h-4 w-4" />,
      count: partners.filter((p) => p.category === "ngos").length,
    },
  ]

  const filteredPartners = partners.filter((partner) => {
    if (activeCategory === "all") return true
    return partner.category === activeCategory
  })

  const featuredPartners = partners.filter((partner) => partner.featured)

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn direction="up">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-6 py-3 text-amber-600 border border-amber-500/20">
              <Building2 className="h-5 w-5" />
              <span className="text-sm font-medium">Trusted by Industry Leaders</span>
            </div>

            <h2 className="mb-6 font-mono text-4xl font-bold md:text-5xl lg:text-6xl">
              Our <span className="text-amber-500">Partners</span>
            </h2>

            <p className="mx-auto max-w-3xl text-xl text-neutral-600 leading-relaxed">
              We collaborate with world-class universities, cutting-edge blockchain protocols, innovative enterprises,
              and forward-thinking organizations to accelerate blockchain adoption across Africa.
            </p>
          </div>
        </FadeIn>

        {/* Featured Partners Carousel */}
        <FadeIn direction="up" delay={200}>
          <div className="mb-16">
            <h3 className="mb-8 text-center font-mono text-2xl font-bold">Featured Partnerships</h3>
            <div className="relative">
              <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
                {featuredPartners.map((partner, index) => (
                  <ScaleIn key={partner.id} delay={index * 100}>
                    <Card className="min-w-[350px] group hover:shadow-2xl transition-all duration-500 border-2 hover:border-amber-500/30 bg-gradient-to-br from-white to-amber-50/30">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div className="relative h-16 w-32 overflow-hidden rounded-lg bg-white shadow-sm border">
                            <Image
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              fill
                              className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <Badge variant="secondary" className="bg-amber-500 text-white">
                            <Star className="mr-1 h-3 w-3" />
                            Featured
                          </Badge>
                        </div>

                        <h4 className="mb-2 font-bold text-lg group-hover:text-amber-600 transition-colors">
                          {partner.name}
                        </h4>
                        <p className="mb-4 text-sm text-amber-600 font-medium">{partner.partnership}</p>
                        <p className="mb-6 text-neutral-600 text-sm leading-relaxed">{partner.description}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {partner.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs border-amber-500/30">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full text-amber-600 hover:text-amber-700 hover:bg-amber-50 group/btn"
                          onClick={() => window.open(partner.website, "_blank")}
                        >
                          Learn More
                          <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </ScaleIn>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn direction="up" delay={400}>
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id as PartnerCategory)}
                  className={`group transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-amber-500 text-black hover:bg-amber-400 shadow-lg scale-105"
                      : "hover:border-amber-500 hover:text-amber-600"
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.label}</span>
                  <Badge
                    variant="secondary"
                    className={`ml-2 ${activeCategory === category.id ? "bg-black/20 text-black" : "bg-neutral-100"}`}
                  >
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPartners.map((partner, index) => (
            <ScaleIn key={partner.id} delay={index * 100}>
              <Card
                className="group cursor-pointer hover:shadow-xl transition-all duration-500 border-2 hover:border-amber-500/30 hover:-translate-y-2"
                onMouseEnter={() => setHoveredPartner(partner.id)}
                onMouseLeave={() => setHoveredPartner(null)}
                onClick={() => window.open(partner.website, "_blank")}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative h-12 w-24 overflow-hidden rounded bg-white shadow-sm border">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        fill
                        className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    {partner.featured && (
                      <Badge variant="secondary" className="bg-amber-500 text-white">
                        <Star className="mr-1 h-3 w-3" />
                      </Badge>
                    )}
                  </div>

                  <h4 className="mb-2 font-semibold group-hover:text-amber-600 transition-colors">{partner.name}</h4>
                  <p className="mb-3 text-xs text-amber-600 font-medium">{partner.partnership}</p>
                  <p className="mb-4 text-sm text-neutral-600 line-clamp-3">{partner.description}</p>


                  <div className="flex flex-wrap gap-1 mb-4">
                    {partner.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-amber-500/30">
                        {tag}
                      </Badge>
                    ))}
                    {partner.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs border-amber-500/30">
                        +{partner.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-neutral-500">
                      {partner.category === "universities" && <GraduationCap className="mr-1 h-3 w-3" />}
                      {partner.category === "protocols" && <Coins className="mr-1 h-3 w-3" />}
                      {partner.category === "enterprises" && <Building2 className="mr-1 h-3 w-3" />}
                      {partner.category === "governments" && <Shield className="mr-1 h-3 w-3" />}
                      {partner.category === "ngos" && <Users className="mr-1 h-3 w-3" />}
                      <span className="capitalize">{partner.category}</span>
                    </div>

                    <ExternalLink
                      className={`h-4 w-4 transition-all duration-300 ${
                        hoveredPartner === partner.id
                          ? "text-amber-600 translate-x-1"
                          : "text-neutral-400 group-hover:text-amber-600"
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </ScaleIn>
          ))}
        </div>

        {/* Partnership Stats */}
        <FadeIn direction="up" delay={600}>
          <div className="mt-20 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="mb-4 font-mono text-3xl font-bold">Partnership Impact</h3>
              <p className="text-amber-100 text-lg max-w-2xl mx-auto">
                Together with our partners, we're building the future of blockchain in Africa
              </p>
            </div>

            <StaggerContainer staggerDelay={200} className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <ScaleIn delay={200}>
                <div className="text-center">
                  <div className="mb-2 font-mono text-4xl font-bold">{partners.length}+</div>
                  <div className="text-amber-100">Global Partners</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={400}>
                <div className="text-center">
                  <div className="mb-2 font-mono text-4xl font-bold">15+</div>
                  <div className="text-amber-100">Countries</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={600}>
                <div className="text-center">
                  <div className="mb-2 font-mono text-4xl font-bold">$10M+</div>
                  <div className="text-amber-100">Value Created</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={800}>
                <div className="text-center">
                  <div className="mb-2 font-mono text-4xl font-bold">1000+</div>
                  <div className="text-amber-100">Lives Impacted</div>
                </div>
              </ScaleIn>
            </StaggerContainer>
          </div>
        </FadeIn>

        {/* Call to Action */}
        <FadeIn direction="up" delay={800}>
          <div className="mt-16 text-center">
            <h3 className="mb-4 font-mono text-2xl font-bold">Become a Partner</h3>
            <p className="mb-8 text-neutral-600 max-w-2xl mx-auto">
              Join our ecosystem of innovative organizations driving blockchain adoption across Africa. Let's build the
              future together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-amber-500 text-black hover:bg-amber-400 transform hover:scale-105 transition-all duration-200">
                <Building2 className="mr-2 h-4 w-4" />
                Partner With Us
              </Button>
              <Button
                variant="outline"
                className="border-amber-500 text-amber-600 hover:bg-amber-50 transform hover:scale-105 transition-all duration-200 bg-transparent"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Partnership Deck
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
