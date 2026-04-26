"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, Tag, Copy, Check } from "lucide-react"

export function PromoBanner() {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard?.writeText('TOPDEALS')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#1F4FBF] via-[#2563EB] to-[#1F4FBF] py-8">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBjeD0iMjAiIGN5PSIyMCIgcj0iMyIvPjwvZz48L3N2Zz4=')] opacity-50" />
      <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg animate-bounce">
              <Tag className="h-8 w-8 text-[#1F4FBF]" />
            </div>
            <div>
              <p className="text-sm font-medium text-white/80 uppercase tracking-wider">Code Promo Exclusif</p>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-4xl font-black text-white tracking-tight">TOPDEALS</span>
                <Badge className="bg-amber-400 text-[#0F1F3D] text-lg px-3 py-1 animate-pulse">-10%</Badge>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-white font-medium">{"10% de reduction supplementaire sur tous nos tarifs !"}</p>
            <Button 
              variant="outline" 
              className="bg-white hover:bg-white/90 text-[#1F4FBF] border-white font-semibold"
              onClick={copyCode}
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  Code copie !
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copier le code
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
      <Sparkles className="absolute top-4 left-8 h-6 w-6 text-white/60 animate-pulse" />
      <Sparkles className="absolute bottom-4 right-8 h-6 w-6 text-white/60 animate-pulse" />
      <Sparkles className="absolute top-6 right-24 h-4 w-4 text-white/40" />
      <Sparkles className="absolute bottom-6 left-24 h-4 w-4 text-white/40" />
    </section>
  )
}
