import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { SafetyIcon, PassionIcon, TerrainIcon, GroupIcon, QuadIcon, HelmetIcon, BriefingIcon, AdventureIcon } from "@/components/quad-icons"

export default function QuiSommesNousPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image0%20%2815%29-x6HcFJJrrqum9gB2xPfjtM6s49j9at.jpeg"
            alt="Base EG Quad Location"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
                Qui sommes-nous
              </h1>
              <p className="mt-4 text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                {"Découvrez l'équipe passionnée derrière EG Quad Location"}
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                  {"Notre passion, votre aventure"}
                </h2>
                <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    {"La poussière qui s'élève derrière les roues, le moteur qui vibre sous vos mains, l'horizon qui s'ouvre devant vous... Chaque sortie en quad devient une véritable parenthèse d'évasion."}
                  </p>
                  <p>
                    {"Avec EG Quad Location, l'aventure se vit en toute confiance. Notre mission est simple : vous offrir une expérience inoubliable, alliant sensations fortes et sécurité."}
                  </p>
                  <p>
                    {"Basés à La Valette-du-Var, nous vous proposons de découvrir les magnifiques paysages de la région PACA au guidon de quads modernes et parfaitement entretenus."}
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image1%20%288%29-Fu5530LOE8HTovial7kjh8zSFp0Un9.jpeg"
                  alt="Quad CFMOTO"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Nos valeurs
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <SafetyIcon className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="mt-4 font-semibold text-card-foreground">Sécurité</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Équipement complet fourni et briefing personnalisé avant chaque départ.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <PassionIcon className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="mt-4 font-semibold text-card-foreground">Passion</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {"Une équipe passionnée qui partage son amour du quad avec vous."}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <AdventureIcon className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="mt-4 font-semibold text-card-foreground">Liberté</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Parcours libre pour une expérience personnalisée et immersive.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <GroupIcon className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="mt-4 font-semibold text-card-foreground">Convivialité</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {"Un accueil chaleureux pour les débutants comme les confirmés."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Pourquoi nous choisir ?
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2 text-left">
                <div className="flex gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <QuadIcon className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Des quads modernes</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Notre flotte est composée de quads récents, régulièrement entretenus et adaptés aussi bien aux débutants qu'aux confirmés.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <HelmetIcon className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Un matériel sécurisé</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {"Casque, gants et charlotte hygiénique fournis. Votre sécurité est notre priorité."}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <BriefingIcon className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Un briefing avant chaque départ</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      10 minutes de conseils personnalisés selon votre niveau avec des recommandations de parcours.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <TerrainIcon className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Une liberté totale de parcours</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {"Après le briefing, vous êtes libres d'explorer les routes et chemins selon vos envies."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">
              {"Prêt à vivre l'expérience ?"}
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
              {"Une expérience accessible pour une heure d'évasion, une demi-journée d'aventure ou une journée complète d'exploration."}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/reserver">Réserver maintenant</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/tarifs">Voir les tarifs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
