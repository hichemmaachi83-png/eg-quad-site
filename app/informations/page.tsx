import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, AlertTriangle } from "lucide-react"
import { 
  LicenseIcon, 
  CautionIcon, 
  CalendarIcon, 
  CancelIcon, 
  HelmetIcon, 
  GloveIcon,
  FuelIcon,
  BriefingIcon,
  QuadIcon,
  ChronoIcon,
  TerrainIcon
} from "@/components/quad-icons"

export default function InformationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
              Informations importantes
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Tout ce que vous devez savoir avant votre location de quad
            </p>
          </div>
        </section>

        {/* Conditions de location */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Conditions requises */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                      <LicenseIcon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle>Conditions de location</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Être majeur (18 ans minimum)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Posséder un permis B valide</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
                    <LicenseIcon className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Documents à présenter le jour J :</p>
                      <ul className="mt-2 space-y-1 text-muted-foreground">
                        <li>- Original du permis de conduire</li>
                        <li>- Pièce d'identité valide</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Caution */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                      <CautionIcon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle>Caution</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Une caution de <span className="font-bold text-foreground">900 €</span> est demandée au moment du départ.
                  </p>
                  <div>
                    <p className="font-medium text-foreground mb-2">Modes de paiement acceptés :</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>- Empreinte bancaire</li>
                      <li>- Espèces</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground bg-secondary p-3 rounded-lg">
                    La caution est restituée intégralement au retour du quad en bon état.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Réservation et annulation */}
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Réservation et annulation
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
                      <CalendarIcon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle>Réservation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg">
                    <ChronoIcon className="h-6 w-6 text-accent" />
                    <span className="font-medium text-foreground">
                      Réservation obligatoire au moins 24h à l'avance
                    </span>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong className="text-foreground">Validité :</strong> 3 mois à partir de la date d'achat</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
                      <CancelIcon className="h-8 w-8 text-red-600" />
                    </div>
                    <CardTitle>Annulation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">
                      {"Annulation possible jusqu'à 24h avant la réservation"}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      {"Si ce délai n'est pas respecté, le coupon devient invalide."}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Équipement et carburant */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Équipement */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                      <HelmetIcon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle>Équipement fourni</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 p-3 bg-secondary/50 rounded-lg">
                      <HelmetIcon className="h-8 w-8 text-accent flex-shrink-0" />
                      <span className="text-foreground font-medium">Casque homologué</span>
                    </li>
                    <li className="flex items-center gap-4 p-3 bg-secondary/50 rounded-lg">
                      <GloveIcon className="h-8 w-8 text-accent flex-shrink-0" />
                      <span className="text-foreground font-medium">Gants de protection</span>
                    </li>
                    <li className="flex items-center gap-4 p-3 bg-secondary/50 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 ml-1" />
                      <span className="text-foreground font-medium">Charlotte hygiénique</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-sm text-amber-800">
                      <strong>Recommandation :</strong> Chaussures fermées fortement recommandées.
                    </p>
                  </div>
                  <div className="mt-4 p-4 bg-secondary rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      {"Note : Il n'y a pas de douche dans les locaux."}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Carburant */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                      <FuelIcon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle>Carburant</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-4">
                        <FuelIcon className="h-8 w-8 text-green-600" />
                        <span className="font-medium text-foreground">Le quad est fourni avec le plein</span>
                      </div>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <div className="flex items-center gap-4">
                        <FuelIcon className="h-8 w-8 text-amber-600" />
                        <span className="font-medium text-foreground">Il doit être restitué avec le plein</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Briefing sécurité */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                Briefing sécurité
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Avant chaque départ, un briefing de 10 minutes est effectué pour vous assurer une expérience en toute sécurité.
              </p>
              <div className="grid gap-6 md:grid-cols-3 text-left">
                <div className="bg-primary-foreground/10 p-6 rounded-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/10 mb-4">
                    <QuadIcon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">Fonctionnement</h3>
                  <p className="text-sm text-primary-foreground/70">
                    Explication détaillée du fonctionnement du quad
                  </p>
                </div>
                <div className="bg-primary-foreground/10 p-6 rounded-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/10 mb-4">
                    <BriefingIcon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">Conseils</h3>
                  <p className="text-sm text-primary-foreground/70">
                    Conseils personnalisés selon votre niveau
                  </p>
                </div>
                <div className="bg-primary-foreground/10 p-6 rounded-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/10 mb-4">
                    <TerrainIcon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">Parcours</h3>
                  <p className="text-sm text-primary-foreground/70">
                    Recommandations de parcours adaptées
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
              Des questions ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {"N'hésitez pas à nous contacter pour toute question complémentaire."}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/nous-trouver">Nous contacter</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
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
