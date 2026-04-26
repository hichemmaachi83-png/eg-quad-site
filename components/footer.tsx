import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Clock, Mail } from "lucide-react"
import { TikTokIcon, SnapchatIcon } from "@/components/social-icons"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-eg-quad.jpg"
                alt="EG Quad Location"
                width={60}
                height={60}
                className="rounded-full"
              />
              <span className="text-2xl font-bold">
                EG <span className="text-accent">QUAD</span>
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Location de quads pour des expériences outdoor mêlant aventure, nature et adrénaline.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">Accueil</Link></li>
              <li><Link href="/tarifs" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">Tarifs</Link></li>
              <li><Link href="/qui-sommes-nous" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">Qui sommes-nous</Link></li>
              <li><Link href="/reserver" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">Réserver</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  789 Avenue Pablo Picasso<br />
                  La Valette-du-Var
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="tel:0774206369" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">
                  07 74 20 63 69
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="mailto:egquadlocation@outlook.fr" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">
                  egquadlocation@outlook.fr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  Tous les jours: 9h - 18h
                </span>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Suivez-nous</h3>
            <div className="space-y-3">
              <a
                href="https://www.tiktok.com/@eg.quad.location"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-primary-foreground/10 px-4 py-2.5 text-sm transition-colors hover:bg-primary-foreground/20"
              >
                <TikTokIcon className="h-5 w-5" />
                <span>@eg.quad.location</span>
              </a>
              <a
                href="https://www.snapchat.com/add/eg.quad.location"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-[#FFFC00] px-4 py-2.5 text-sm text-black transition-opacity hover:opacity-90"
              >
                <SnapchatIcon className="h-5 w-5" />
                <span>eg.quad.location</span>
              </a>
              <a
                href="mailto:egquadlocation@outlook.fr"
                className="flex items-center gap-3 rounded-lg bg-primary-foreground/10 px-4 py-2.5 text-sm transition-colors hover:bg-primary-foreground/20"
              >
                <Mail className="h-5 w-5" />
                <span>egquadlocation@outlook.fr</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="/mentions-legales" className="text-xs text-primary-foreground/50 hover:text-primary-foreground">
              Mentions legales
            </Link>
            <span className="text-primary-foreground/30">|</span>
            <Link href="/cgv" className="text-xs text-primary-foreground/50 hover:text-primary-foreground">
              CGV
            </Link>
            <span className="text-primary-foreground/30">|</span>
            <Link href="/politique-annulation" className="text-xs text-primary-foreground/50 hover:text-primary-foreground">
              Politique d annulation
            </Link>
            <span className="text-primary-foreground/30">|</span>
            <Link href="/confidentialite" className="text-xs text-primary-foreground/50 hover:text-primary-foreground">
              Confidentialite
            </Link>
          </div>
          <p className="text-center text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} EG Quad Location. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  )
}
