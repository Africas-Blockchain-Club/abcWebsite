"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

const blockchainTerms = [
  {
    term: "Blockchain",
    definition: "A distributed, decentralized, public ledger that exists across a network.",
  },
  {
    term: "Smart Contract",
    definition: "Self-executing contracts with the terms directly written into code.",
  },
  {
    term: "DeFi",
    definition: "Decentralized Finance - financial services using smart contracts on blockchains.",
  },
  {
    term: "NFT",
    definition: "Non-Fungible Token - a unique digital asset that represents ownership of a specific item.",
  },
  {
    term: "DAO",
    definition:
      "Decentralized Autonomous Organization - an organization represented by rules encoded as a computer program.",
  },
  {
    term: "Web3",
    definition: "The next evolution of the internet built on decentralized blockchains.",
  },
]

export default function BlockchainTerms() {
  const [activeTerm, setActiveTerm] = useState(0)

  const nextTerm = () => {
    setActiveTerm((prev) => (prev + 1) % blockchainTerms.length)
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-mono">Blockchain Glossary</CardTitle>
        <CardDescription>Essential blockchain terminology</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="font-semibold text-amber-600">{blockchainTerms[activeTerm].term}</div>
          <p className="text-sm text-neutral-600">{blockchainTerms[activeTerm].definition}</p>
          <Button variant="ghost" size="sm" className="mt-2 text-xs" onClick={nextTerm}>
            Next Term <ChevronRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
