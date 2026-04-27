"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react" // Ajout de useEffect
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { name: "Nous trouver", href: "/nous-trouver" },
  { name: "Suivez-nous", href: "/suivez-nous" },
  { name: "Informations", href: "/informations" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // EMPECHE LE SCROLL QUAND LE MENU EST OUVERT
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-primary/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <div className="flex lg:flex-none lg:ml-12">
            <Link href="/" className="-m-1.5 flex items-center gap-3 p-1.5">
              <Image
                src="/images/logo.png"
                alt="EG Quad Location"
                width={150}
                height={100}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-primary-foreground/80 transition-all duration-200 hover:text-primary-foreground whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-none lg:items-center lg:gap-x-6 lg:mr-12">
            <a
              href="tel:0774206369"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground whitespace-nowrap"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span className="tabular-nums">07 74 20 63 69</span>
            </a>
            <Button asChild className="rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 shrink-0">
              <Link href="/reserver">Réserver</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* VERSION MOBILE OPTIMISÉE */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden"> {/* Z-index plus haut que le header */}
          <div className="fixed inset-0 bg-primary flex flex-col h-full">
            {/* Header du menu mobile */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/10">
              <Link
                href="/"
                className="-m-1.5 flex items-center gap-3 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  src="/images/logo.png"
                  alt="EG Quad"
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <span className="text-lg font-bold text-primary-foreground">EG QUAD</span>
              </Link>

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-primary-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>

            {/* Liens centrés verticalement pour plus de confort */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-semibold text-primary-foreground hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="w-full h-px bg-white/10 my-4" />

              <a
                href="tel:0774206369"
                className="flex items-center gap-3 text-xl text-primary-foreground/80"
              >
                <Phone className="h-6 w-6 text-accent" />
                07 74 20 63 69
              </a>

              <Button
                asChild
                className="w-full max-w-xs rounded-xl bg-accent text-accent-foreground text-xl py-7"
              >
                <Link href="/reserver" onClick={() => setMobileMenuOpen(false)}>
                  Réserver maintenant
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}