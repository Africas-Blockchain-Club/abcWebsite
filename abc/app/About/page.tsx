import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Target,
  Globe,
  Award,
  BookOpen,
  Code,
  Heart,
  Lightbulb,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import SlideIn from "@/components/animations/scale-in"
import ScaleIn from "@/components/animations/scale-in"
import StaggerContainer from "@/components/animations/stagger-container"
import BlockchainPattern from "@/components/blockchain-pattern"
import SocialLinks from "@/components/social-links"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Nkosi",
      role: "Founder & CEO",
      bio: "Blockchain enthusiast with 8+ years in fintech. Previously led digital transformation at major South African banks. Passionate about democratizing financial services through blockchain technology.",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "https://linkedin.com/in/alexnkosi",
      twitter: "https://twitter.com/alexnkosi",
      github: "https://github.com/alexnkosi",
      expertise: ["DeFi", "Smart Contracts", "Tokenomics", "Leadership"],
    },
    {
      name: "Zainab Osei",
      role: "Technical Lead & CTO",
      bio: "Full-stack developer and blockchain architect. PhD in Computer Science from University of Cape Town. Expert in Ethereum, Solidity, and Layer 2 solutions.",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "https://linkedin.com/in/zainabosei",
      twitter: "https://twitter.com/zainabosei",
      github: "https://github.com/zainabosei",
      expertise: ["Solidity", "Web3", "Architecture", "Security"],
    },
    {
      name: "David Mwangi",
      role: "Community Manager",
      bio: "Community builder and educator with a passion for blockchain adoption. Former tech journalist and event organizer. Fluent in English, Swahili, and French.",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "https://linkedin.com/in/davidmwangi",
      twitter: "https://twitter.com/davidmwangi",
      github: "https://github.com/davidmwangi",
      expertise: ["Community Building", "Education", "Content Creation", "Events"],
    },
    {
      name: "Fatima Diallo",
      role: "Education Coordinator",
      bio: "Former university lecturer turned blockchain educator. Specializes in making complex blockchain concepts accessible to beginners. Speaks 5 languages.",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "https://linkedin.com/in/fatimadiallo",
      twitter: "https://twitter.com/fatimadiallo",
      github: "https://github.com/fatimadiallo",
      expertise: ["Education", "Curriculum Design", "Research", "Mentoring"],
    },
    {
      name: "Kwame Asante",
      role: "Partnerships Director",
      bio: "Business development expert with extensive network across African tech ecosystem. Former consultant at McKinsey & Company with focus on emerging markets.",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "https://linkedin.com/in/kwameasante",
      twitter: "https://twitter.com/kwameasante",
      github: "https://github.com/kwameasante",
      expertise: ["Business Development", "Strategy", "Partnerships", "Finance"],
    },
    {
      name: "Amara Kone",
      role: "Research Lead",
      bio: "Blockchain researcher and academic. PhD in Cryptography from MIT. Published 20+ papers on blockchain scalability and privacy. Advisor to multiple African governments.",
      image: "/placeholder.svg?height=400&width=400",
      linkedin: "https://linkedin.com/in/amarakone",
      twitter: "https://twitter.com/amarakone",
      github: "https://github.com/amarakone",
      expertise: ["Research", "Cryptography", "Policy", "Academia"],
    },
  ]

  const advisors = [
    {
      name: "Dr. Sarah Johnson",
      role: "Strategic Advisor",
      company: "Former VP at Coinbase Africa",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Prof. Michael Okafor",
      role: "Academic Advisor",
      company: "University of Lagos",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Lisa Chen",
      role: "Technical Advisor",
      company: "Ethereum Foundation",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "ABC was founded in Johannesburg with 5 founding members",
    },
    {
      year: "2021",
      title: "First Hackathon",
      description: "Organized our first hackathon with 100+ participants",
    },
    {
      year: "2022",
      title: "Pan-African Expansion",
      description: "Expanded to 10 African countries with local ambassadors",
    },
    {
      year: "2023",
      title: "1000+ Members",
      description: "Reached 1000+ active community members across Africa",
    },
    {
      year: "2024",
      title: "Research Initiative",
      description: "Launched ABC Research Lab focusing on African blockchain solutions",
    },
    {
      year: "2025",
      title: "Global Recognition",
      description: "Recognized as leading blockchain community in Africa",
    },
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community First",
      description: "We believe in the power of community to drive innovation and create lasting change across Africa.",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Education & Empowerment",
      description: "Knowledge sharing and skill development are at the core of everything we do.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Pan-African Vision",
      description: "We're building bridges across African countries to create a unified blockchain ecosystem.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation & Impact",
      description: "We focus on practical blockchain solutions that solve real African challenges.",
    },
  ]

  const stats = [
    { number: "2000+", label: "Community Members" },
    { number: "15", label: "African Countries" },
    { number: "50+", label: "Projects Built" },
    { number: "100+", label: "Events Organized" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900 py-20 text-white">
        <BlockchainPattern className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn direction="up">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 font-mono text-5xl font-bold md:text-6xl">About Africa's Blockchain Club</h1>
              <p className="mb-8 text-xl text-neutral-200">
                Empowering Africa's next generation of blockchain innovators, developers, and entrepreneurs to build the
                decentralized future of the continent.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 text-black hover:bg-amber-400">Join Our Community</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  View Our Projects
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-amber-500 py-16">
        <div className="container mx-auto px-4">
          <StaggerContainer staggerDelay={200} className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <ScaleIn key={stat.label} delay={index * 200}>
                <div className="text-center">
                  <div className="mb-2 font-mono text-4xl font-bold text-black md:text-5xl">{stat.number}</div>
                  <div className="text-black/80 font-medium">{stat.label}</div>
                </div>
              </ScaleIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <SlideIn direction="left">
              <div>
                <h2 className="mb-6 font-mono text-3xl font-bold md:text-4xl">Our Story</h2>
                <div className="space-y-6 text-lg text-neutral-700">
                  <p>
                    Africa's Blockchain Club (ABC) was born from a simple yet powerful vision: to position Africa at the
                    forefront of the global blockchain revolution. Founded in 2020 in Johannesburg, South Africa, we
                    started as a small group of passionate developers and entrepreneurs who believed that blockchain
                    technology could solve many of Africa's most pressing challenges.
                  </p>
                  <p>
                    What began as weekend meetups in a small co-working space has grown into a pan-African movement
                    spanning 15 countries, with over 2,000 active members including developers, researchers,
                    entrepreneurs, and blockchain enthusiasts.
                  </p>
                  <p>
                    Our journey has been marked by significant milestones: from organizing our first hackathon with 100
                    participants to launching groundbreaking projects that address real African challenges like
                    financial inclusion, digital identity, and cross-border payments.
                  </p>
                  <p>
                    Today, ABC stands as Africa's premier blockchain community, fostering innovation, education, and
                    collaboration across the continent. We're not just building technology; we're building the future of
                    Africa.
                  </p>
                </div>
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="ABC Community Meeting"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 rounded-lg bg-amber-500 p-6 text-black">
                  <div className="font-mono text-2xl font-bold">5 Years</div>
                  <div className="text-sm">of Innovation</div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-neutral-50 py-20">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-mono text-3xl font-bold md:text-4xl">Our Mission & Vision</h2>
              <p className="mx-auto max-w-3xl text-lg text-neutral-600">
                Driving blockchain adoption across Africa through education, innovation, and community building
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ScaleIn delay={200}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-mono text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">
                    To accelerate blockchain technology adoption across Africa by building inclusive communities,
                    providing world-class education, and fostering innovation that addresses real African challenges. We
                    empower individuals and organizations to leverage blockchain for economic growth, financial
                    inclusion, and social impact.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={400}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-mono text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">
                    To establish Africa as a global leader in blockchain innovation and adoption. We envision a future
                    where every African has access to decentralized financial services, where African solutions lead
                    global blockchain development, and where the continent leapfrogs traditional systems through
                    blockchain technology.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>
          </div>

          <div className="mt-16">
            <FadeIn direction="up">
              <h3 className="mb-8 text-center font-mono text-2xl font-bold">Our Core Values</h3>
            </FadeIn>
            <StaggerContainer staggerDelay={200} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <ScaleIn key={value.title} delay={index * 200}>
                  <Card className="text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4 flex justify-center text-amber-500">{value.icon}</div>
                      <h4 className="mb-3 font-semibold">{value.title}</h4>
                      <p className="text-sm text-neutral-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </ScaleIn>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-mono text-3xl font-bold md:text-4xl">Our Journey</h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                Key milestones in our mission to transform Africa through blockchain technology
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-amber-500 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <FadeIn key={milestone.year} direction={index % 2 === 0 ? "left" : "right"} delay={index * 200}>
                  <div className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="flex-1">
                      <Card
                        className={`${index % 2 === 0 ? "md:mr-8" : "md:ml-8"} hover:shadow-lg transition-all duration-300`}
                      >
                        <CardContent className="p-6">
                          <div className="mb-2 font-mono text-2xl font-bold text-amber-600">{milestone.year}</div>
                          <h3 className="mb-2 text-xl font-semibold">{milestone.title}</h3>
                          <p className="text-neutral-600">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-amber-500 border-4 border-white shadow-lg"></div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-neutral-50 py-20">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-mono text-3xl font-bold md:text-4xl">Meet Our Team</h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                Passionate individuals driving blockchain innovation across Africa
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <ScaleIn key={member.name} delay={index * 150}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="mb-4 text-center">
                      <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-mono text-xl font-bold">{member.name}</h3>
                      <p className="text-amber-600 font-medium">{member.role}</p>
                    </div>

                    <p className="mb-4 text-sm text-neutral-600">{member.bio}</p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-center space-x-3">
                      <Link href={member.linkedin} className="text-neutral-400 hover:text-blue-600 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link href={member.twitter} className="text-neutral-400 hover:text-blue-400 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </Link>
                      <Link href={member.github} className="text-neutral-400 hover:text-neutral-800 transition-colors">
                        <Github className="h-5 w-5" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-mono text-3xl font-bold md:text-4xl">Our Advisors</h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                Industry leaders and experts guiding our strategic direction
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={200} className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {advisors.map((advisor, index) => (
              <ScaleIn key={advisor.name} delay={index * 200}>
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                      <Image
                        src={advisor.image || "/placeholder.svg"}
                        alt={advisor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold">{advisor.name}</h3>
                    <p className="text-amber-600 text-sm font-medium">{advisor.role}</p>
                    <p className="text-neutral-600 text-sm">{advisor.company}</p>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-neutral-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-mono text-3xl font-bold md:text-4xl">What We Do</h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-300">
                Our comprehensive approach to blockchain education and innovation
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScaleIn delay={200}>
              <Card className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                    <BookOpen className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-white">Education & Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">
                    Comprehensive blockchain education programs, workshops, and certification courses designed for all
                    skill levels from beginners to advanced developers.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={400}>
              <Card className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                    <Code className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-white">Project Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">
                    Collaborative development of blockchain solutions addressing African challenges in finance,
                    identity, agriculture, and governance.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={600}>
              <Card className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-white">Community Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">
                    Creating vibrant local communities across Africa through meetups, hackathons, and networking events
                    that connect blockchain enthusiasts.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={800}>
              <Card className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                    <Award className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-white">Research & Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">
                    Cutting-edge research on blockchain applications, scalability solutions, and policy recommendations
                    for African governments and institutions.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={1000}>
              <Card className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                    <Globe className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-white">Policy Advocacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">
                    Working with governments and regulatory bodies to create favorable blockchain policies that foster
                    innovation while protecting consumers.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={1200}>
              <Card className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                    <Lightbulb className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-white">Startup Incubation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">
                    Supporting blockchain startups through mentorship, funding connections, and access to our extensive
                    network of industry partners.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-mono text-3xl font-bold md:text-4xl">Get In Touch</h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                Ready to join Africa's blockchain revolution? We'd love to hear from you.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <SlideIn direction="left">
              <Card>
                <CardHeader>
                  <CardTitle className="font-mono text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Headquarters</h4>
                      <p className="text-neutral-600">Johannesburg, South Africa</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-neutral-600">info@africasblockchainclub.org</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-neutral-600">+27 11 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Weekly Meetups</h4>
                      <p className="text-neutral-600">Every Saturday, 2:00 PM SAST</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h4 className="mb-4 font-semibold">Follow Us</h4>
                    <SocialLinks />
                  </div>
                </CardContent>
              </Card>
            </SlideIn>

            <SlideIn direction="right">
              <Card>
                <CardHeader>
                  <CardTitle className="font-mono text-2xl">Join Our Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-neutral-600">
                      Whether you're a developer, entrepreneur, student, or blockchain enthusiast, there's a place for
                      you in our community.
                    </p>

                    <div className="space-y-4">
                      <Button className="w-full bg-amber-500 text-black hover:bg-amber-400">Join Our Discord</Button>
                      <Button variant="outline" className="w-full">
                        Subscribe to Newsletter
                      </Button>
                      <Button variant="outline" className="w-full">
                        Attend Next Meetup
                      </Button>
                    </div>

                    <div className="rounded-lg bg-neutral-50 p-4">
                      <h5 className="mb-2 font-semibold">Become an Ambassador</h5>
                      <p className="text-sm text-neutral-600">
                        Help us expand ABC to your city or country. We provide training, resources, and support to
                        community leaders.
                      </p>
                      <Button variant="ghost" className="mt-2 p-0 text-amber-600 hover:text-amber-700">
                        Learn More →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SlideIn>
          </div>
        </div>
      </section>
    </div>
  )
}
