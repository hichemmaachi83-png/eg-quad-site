import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { QuadIcon, SafetyIcon, GroupIcon, TerrainIcon, ChronoIcon } from "@/components/quad-icons"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image2%20%284%29-BotXxTL53pqozkC1OtK71zIo7yrBNl.jpeg"
            alt="Quads EG Quad Location"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-20 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl">
              EG Quad Location
            </h1>
            <p className="mt-4 text-xl font-medium text-accent sm:text-2xl">
              Vivez l’aventure en toute liberté
            </p>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
              Découvrez des balades en quad adaptées à toutes vos envies, entre nature, sensations et évasion.
              <br />
              <br />
              En solo ou à deux, partez explorer des paysages exceptionnels avec des quads modernes et performants.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                <Link href="/reserver">
                  Réserver maintenant
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
              >
                <Link href="/tarifs">Voir les tarifs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Besoin d’une activité outdoor qui allie aventure, nature et adrénaline ?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Que ce soit pour une courte escapade ou une aventure plus longue, partez à la découverte de paysages
              exceptionnels au guidon d’un quad moderne.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image0%20%2815%29-x6HcFJJrrqum9gB2xPfjtM6s49j9at.jpeg"
                alt="Base EG Quad Location"
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image4%20%286%29-5CQhmgySlnnyNShc7rWPhMdXx2ywh4.jpeg"
                alt="Quads sur chemin"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-2 lg:col-span-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image1%20%288%29-Fu5530LOE8HTovial7kjh8zSFp0Un9.jpeg"
                alt="Quad bleu CFMOTO"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Choisissez votre aventure
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Des formules adaptées à vos envies, à votre rythme et à votre budget
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Balade immersion */}
            <Card className="border-0 bg-card shadow-lg transition-shadow hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                  <ChronoIcon className="h-12 w-12 text-accent" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-card-foreground">Balade immersion</h3>
                <p className="mt-4 text-muted-foreground">
                  Une heure d’évasion pour découvrir le plaisir du quad en pleine nature.
                </p>
                <p className="mt-6 text-3xl font-bold text-accent">60 €</p>
              </CardContent>
            </Card>

            {/* Offre duo */}
            <Card className="relative border-0 bg-primary shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-sm font-semibold text-accent-foreground">
                Populaire
              </div>
              <CardContent className="p-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground/10">
                  <GroupIcon className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-primary-foreground">Offre Duo</h3>
                <p className="mt-4 text-primary-foreground/80">
                  1 quad pour 2 personnes, idéal pour partager une aventure à deux.
                </p>
                <p className="mt-6 text-3xl font-bold text-accent">80 €</p>
              </CardContent>
            </Card>

            {/* Pack coucher de soleil */}
            <Card className="border-0 bg-card shadow-lg transition-shadow hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                  <TerrainIcon className="h-12 w-12 text-accent" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-card-foreground">Pack coucher de soleil</h3>
                <p className="mt-4 text-muted-foreground">
                  Une balade d’une heure au sunset pour profiter d’un moment unique.
                </p>
                <p className="mt-6 text-3xl font-bold text-accent">70 €</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 bg-card shadow-sm">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold text-card-foreground">Balade découverte</h4>
                <p className="mt-2 text-muted-foreground">30 minutes</p>
                <p className="mt-4 text-2xl font-bold text-accent">35 €</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-sm">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold text-card-foreground">Balade aventure</h4>
                <p className="mt-2 text-muted-foreground">2 heures</p>
                <p className="mt-4 text-2xl font-bold text-accent">100 €</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-sm">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold text-card-foreground">Balade évasion</h4>
                <p className="mt-2 text-muted-foreground">3 heures</p>
                <p className="mt-4 text-2xl font-bold text-accent">120 €</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-sm">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold text-card-foreground">Balade horizon</h4>
                <p className="mt-2 text-muted-foreground">6 heures</p>
                <p className="mt-4 text-2xl font-bold text-accent">150 €</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-sm">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold text-card-foreground">Pack 12h</h4>
                <p className="mt-2 text-muted-foreground">Journée longue aventure</p>
                <p className="mt-4 text-2xl font-bold text-accent">180 €</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-sm">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold text-card-foreground">Pack balade + pause café ou thé</h4>
                <p className="mt-2 text-muted-foreground">Une expérience conviviale à partager</p>
                <p className="mt-4 text-lg font-medium text-card-foreground">Sur demande</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/tarifs">Voir tous les tarifs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Pourquoi choisir EG Quad Location
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              La poussière qui s’élève derrière les roues, le moteur qui vibre sous vos mains, l’horizon qui s’ouvre
              devant vous...
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <QuadIcon className="h-10 w-10 text-accent" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Quads modernes</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Véhicules récents, entretenus et adaptés à tous les niveaux.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <GroupIcon className="h-10 w-10 text-accent" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">1 ou 2 personnes</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Chaque quad peut accueillir une ou deux personnes pour partager l’expérience.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <TerrainIcon className="h-10 w-10 text-accent" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Liberté de parcours</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Explorez librement les routes et chemins selon vos envies.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <SafetyIcon className="h-10 w-10 text-accent" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Briefing sécurité</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                10 minutes de conseils personnalisés avant chaque départ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image4%20%286%29-5CQhmgySlnnyNShc7rWPhMdXx2ywh4.jpeg"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="relative py-24">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Prêt à vivre l’aventure ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              Réservez dès maintenant votre sortie quad et découvrez des paysages exceptionnels en toute liberté.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                <Link href="/reserver">Réserver maintenant</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
              >
                <Link href="/nous-trouver">Nous trouver</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
