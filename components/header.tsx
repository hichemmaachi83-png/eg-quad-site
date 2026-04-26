"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
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

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-primary/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 flex items-center gap-3 p-1.5">
            <Image
              src="/images/logo-eg-quad.jpg"
              alt="EG Quad Location"
              width={52}
              height={52}
              className="rounded-full border-2 border-white/20 object-cover shadow-md"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-wide text-primary-foreground">
                EG <span className="text-accent">QUAD</span>
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                Location
              </span>
            </div>
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

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-primary-foreground/80 transition-all duration-200 hover:text-primary-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <a
            href="tel:0774206369"
            className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            07 74 20 63 69
          </a>
          <Button asChild className="rounded-xl bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/reserver">Réserver</Link>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-primary">
            <div className="flex items-center justify-between px-4 py-3">
              <Link
                href="/"
                className="-m-1.5 flex items-center gap-3 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  src="/images/logo-eg-quad.jpg"
                  alt="EG Quad Location"
                  width={52}
                  height={52}
                  className="rounded-full border-2 border-white/20 object-cover shadow-md"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-lg font-bold tracking-wide text-primary-foreground">
                    EG <span className="text-accent">QUAD</span>
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                    Location
                  </span>
                </div>
              </Link>

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-primary-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fermer le menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root px-6">
              <div className="-my-6 divide-y divide-primary-foreground/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-primary-foreground hover:bg-primary-foreground/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-4 py-6">
                  <a
                    href="tel:0774206369"
                    className="flex items-center gap-2 text-primary-foreground"
                  >
                    <Phone className="h-5 w-5" />
                    07 74 20 63 69
                  </a>

                  <Button
                    asChild
                    className="w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Link href="/reserver" onClick={() => setMobileMenuOpen(false)}>
                      Réserver
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}