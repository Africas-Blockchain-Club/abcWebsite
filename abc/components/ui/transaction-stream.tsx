"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface Transaction {
  id: string
  from: string
  to: string
  amount: string
  timestamp: number
}

export default function TransactionStream() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    // Generate random wallet address
    const generateWallet = () => {
      return "0x" + Math.random().toString(16).substring(2, 14)
    }

    // Generate random transaction
    const generateTransaction = (): Transaction => {
      return {
        id: Math.random().toString(16).substring(2, 10),
        from: generateWallet(),
        to: generateWallet(),
        amount: (Math.random() * 10).toFixed(4) + " ETH",
        timestamp: Date.now(),
      }
    }

    // Initial transactions
    setTransactions(Array(5).fill(null).map(generateTransaction))

    // Add new transaction every few seconds
    const interval = setInterval(() => {
      setTransactions((prev) => {
        const newTransactions = [...prev, generateTransaction()]
        // Keep only the most recent 5 transactions
        return newTransactions.slice(-5)
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full overflow-hidden rounded-lg border bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-mono text-sm font-semibold">Live Transactions</h3>
        <Badge variant="outline" className="bg-green-50 text-green-600">
          Live
        </Badge>
      </div>
      <div className="space-y-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between text-xs">
            <div className="w-24 overflow-hidden text-ellipsis font-mono text-neutral-500">{tx.from}</div>
            <ArrowRight className="h-3 w-3 text-amber-500" />
            <div className="w-24 overflow-hidden text-ellipsis font-mono text-neutral-500">{tx.to}</div>
            <div className="font-mono font-medium">{tx.amount}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
