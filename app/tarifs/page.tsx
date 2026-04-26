import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, Sparkles } from "lucide-react"
import {
  HelmetIcon,
  GloveIcon,
  BriefingIcon,
  FuelIcon,
  TerrainIcon,
  SafetyIcon,
} from "@/components/quad-icons"

interface FeaturedOfferCardProps {
  title: string
  subtitle?: string
  description: string
  price: string
  popular?: boolean
  dark?: boolean
}

function FeaturedOfferCard({
  title,
  subtitle,
  description,
  price,
  popular = false,
  dark = false,
}: FeaturedOfferCardProps) {
  return (
    <Card
      className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        dark
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card"
      }`}
    >
      {popular && (
        <div className="absolute right-4 top-4 z-10">
          <Badge className="rounded-full bg-accent px-3 py-1 text-accent-foreground shadow-md">
            Populaire
          </Badge>
        </div>
      )}

      <CardContent className="p-8">
        <div
          className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${
            dark ? "bg-primary-foreground/10" : "bg-accent/10"
          }`}
        >
          <Clock className={`h-7 w-7 ${dark ? "text-accent" : "text-accent"}`} />
        </div>

        <h2 className={`text-2xl font-bold ${dark ? "text-primary-foreground" : "text-foreground"}`}>
          {title}
        </h2>

        {subtitle && (
          <p className={`mt-2 text-sm ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        )}

        <div
          className={`mt-6 rounded-2xl p-5 ${
            dark ? "bg-primary-foreground/5" : "bg-secondary"
          }`}
        >
          <p className={`leading-relaxed ${dark ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
            {description}
          </p>
          <p className={`mt-5 text-4xl font-extrabold ${dark ? "text-accent" : "text-foreground"}`}>
            {price}
          </p>
        </div>

        <Button
          asChild
          className={`mt-6 w-full rounded-xl transition-all duration-300 ${
            dark
              ? "bg-accent text-accent-foreground hover:bg-accent/90"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          <Link href="/reserver">Réserver</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

interface CompactOfferCardProps {
  title: string
  subtitle: string
  price: string
  cta?: string
}

function CompactOfferCard({
  title,
  subtitle,
  price,
  cta = "Réserver",
}: CompactOfferCardProps) {
  return (
    <Card className="group rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
        <p className="mt-4 text-3xl font-bold text-accent">{price}</p>

        <Button asChild className="mt-5 w-full rounded-xl bg-primary hover:bg-primary/90">
          <Link href="/reserver">{cta}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-accent blur-3xl" />
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-5xl px-4 text-center lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground/80">
              <Sparkles className="h-4 w-4" />
              Des expériences pensées pour l’évasion
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Nos Tarifs
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              Choisissez la formule qui vous ressemble et vivez une aventure quad entre liberté,
              sensations et découverte.
            </p>
          </div>
        </section>

        {/* Featured offers */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-foreground">Nos expériences phares</h2>
              <p className="mt-3 text-muted-foreground">
                Les offres les plus demandées par nos clients
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <FeaturedOfferCard
                title="Balade immersion"
                subtitle="1 heure"
                description="Une heure d’évasion pour découvrir le plaisir du quad en pleine nature."
                price="60 €"
              />

              <FeaturedOfferCard
                title="Offre Duo"
                subtitle="1 quad / 2 personnes / 1 heure"
                description="Idéal pour partager une aventure à deux et profiter d’un moment unique."
                price="80 €"
                popular
                dark
              />

              <FeaturedOfferCard
                title="Pack coucher de soleil"
                subtitle="1 heure au sunset"
                description="Une balade unique pour profiter d’un moment inoubliable dans une ambiance exceptionnelle."
                price="70 €"
              />
            </div>
          </div>
        </section>

        {/* Secondary offers */}
        <section className="bg-secondary/50 py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-foreground">Autres formules</h2>
              <p className="mt-3 text-muted-foreground">
                Des options adaptées à votre rythme et à vos envies
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CompactOfferCard
                title="Balade découverte"
                subtitle="30 minutes"
                price="35 €"
              />

              <CompactOfferCard
                title="Balade aventure"
                subtitle="2 heures"
                price="100 €"
              />

              <CompactOfferCard
                title="Balade évasion"
                subtitle="3 heures"
                price="120 €"
              />

              <CompactOfferCard
                title="Balade horizon"
                subtitle="6 heures"
                price="150 €"
              />

              <CompactOfferCard
                title="Pack 12h"
                subtitle="Journée longue aventure"
                price="180 €"
              />

              <CompactOfferCard
                title="Pack balade + pause café ou thé"
                subtitle="Une expérience conviviale à partager"
                price="Sur demande"
                cta="Demander"
              />
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-4 text-center text-3xl font-bold">Ce qui est inclus</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Tout l’équipement nécessaire pour profiter de votre aventure en toute sécurité.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center gap-4 rounded-2xl bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <HelmetIcon className="h-10 w-10 text-accent" />
                </div>
                <span className="text-center font-medium text-foreground">Casque homologué</span>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-2xl bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <GloveIcon className="h-10 w-10 text-accent" />
                </div>
                <span className="text-center font-medium text-foreground">Gants de protection</span>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-2xl bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <svg
                    className="h-10 w-10 text-accent"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v12M6 12h12" />
                  </svg>
                </div>
                <span className="text-center font-medium text-foreground">Charlotte hygiénique</span>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-2xl bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <BriefingIcon className="h-10 w-10 text-accent" />
                </div>
                <span className="text-center font-medium text-foreground">Briefing sécurité (10 min)</span>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-2xl bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <FuelIcon className="h-10 w-10 text-accent" />
                </div>
                <span className="text-center font-medium text-foreground">Quad avec le plein</span>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-2xl bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <TerrainIcon className="h-10 w-10 text-accent" />
                </div>
                <span className="text-center font-medium text-foreground">Conseils de parcours</span>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-2xl bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <SafetyIcon className="h-10 w-10 text-accent" />
                </div>
                <span className="text-center font-medium text-foreground">Assistance incluse</span>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-2xl bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <svg
                    className="h-10 w-10 text-accent"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-center font-medium text-foreground">Liberté de parcours</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <div className="rounded-3xl bg-primary p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-primary-foreground">
                Prêt pour l’aventure ?
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
                Contactez-nous pour réserver votre balade ou demander plus d’informations sur nos formules.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 rounded-xl bg-accent px-8 text-accent-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-accent/90"
              >
                <Link href="/reserver">Réserver maintenant</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}