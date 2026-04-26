import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Phone, Clock, Navigation } from "lucide-react"

export default function NousTrouverPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
              Nous trouver
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Venez nous retrouver à La Valette-du-Var pour votre prochaine aventure en quad
            </p>
          </div>
        </section>

        {/* Map and Info */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Info Cards */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Adresse</h3>
                        <p className="mt-1 text-muted-foreground">
                          EG Quad Location<br />
                          789 Avenue Pablo Picasso<br />
                          La Valette-du-Var
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Téléphone</h3>
                        <a 
                          href="tel:0774206369" 
                          className="mt-1 text-lg font-medium text-accent hover:underline block"
                        >
                          07 74 20 63 69
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Horaires</h3>
                        <p className="mt-1 text-muted-foreground">
                          Ouvert tous les jours
                        </p>
                        <p className="text-lg font-medium text-foreground">
                          9h — 18h
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=789+Avenue+Pablo+Picasso+La+Valette-du-Var" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Navigation className="mr-2 h-5 w-5" />
                    Ouvrir dans Google Maps
                  </a>
                </Button>
              </div>

              {/* Map */}
              <div className="lg:col-span-2">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.7!2d5.98!3d43.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA4JzI0LjAiTiA1wrA1OCc0OC4wIkU!5e0!3m2!1sfr!2sfr!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation EG Quad Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground">
                Comment venir ?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {"Nous sommes situés à La Valette-du-Var, facilement accessible depuis Toulon et ses environs. Parking gratuit disponible sur place."}
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-3 text-left">
                <div className="bg-card p-6 rounded-xl shadow-lg">
                  <h3 className="font-semibold text-foreground mb-2">En voiture</h3>
                  <p className="text-sm text-muted-foreground">
                    {"À 10 minutes du centre de Toulon. Parking gratuit sur place pour garer votre véhicule."}
                  </p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-lg">
                  <h3 className="font-semibold text-foreground mb-2">Stationnement</h3>
                  <p className="text-sm text-muted-foreground">
                    Grand parking disponible gratuitement pour tous nos clients.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-lg">
                  <h3 className="font-semibold text-foreground mb-2">Réservation</h3>
                  <p className="text-sm text-muted-foreground">
                    {"Pensez à réserver au moins 24h à l'avance pour garantir votre créneau."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground">
              {"Prêt à partir à l'aventure ?"}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {"Réservez dès maintenant et venez nous retrouver pour une expérience quad inoubliable."}
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
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
