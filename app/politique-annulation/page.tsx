import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AlertTriangle, CheckCircle, Clock } from "lucide-react"

export const metadata = {
  title: "Politique d'Annulation | EG Quad Location",
  description: "Politique d'annulation de EG Quad Location",
}

export default function PolitiqueAnnulation() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h1 className="text-3xl font-bold text-foreground mb-8">{"Politique d'Annulation"}</h1>
            
            <div className="space-y-8">
              <div className="bg-secondary rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-2">Delai d annulation</h2>
                    <p className="text-muted-foreground">
                      Toute annulation doit etre faite au moins 24 heures avant la date de reservation prevue.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-2">Annulation dans les delais</h2>
                    <p className="text-muted-foreground">
                      {"Si vous annulez au moins 24 heures avant la date prevue, aucun frais ne sera applique. Vous pourrez reporter votre reservation a une date ulterieure."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-2">Annulation tardive ou absence</h2>
                    <p className="text-muted-foreground">
                      {"En cas d'annulation moins de 24 heures avant ou de non-presentation, la reservation peut etre consideree comme perdue."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Comment annuler ?</h2>
                <p className="text-muted-foreground mb-4">
                  Pour annuler votre reservation, contactez-nous par :
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>- Telephone : 07 74 20 63 69</li>
                  <li>- Email : egquadlocation@outlook.fr</li>
                </ul>
              </div>

              <div className="border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Cas de force majeure</h2>
                <p className="text-muted-foreground">
                  {"En cas de conditions meteorologiques dangereuses ou de circonstances exceptionnelles, EG Quad Location se reserve le droit d'annuler une sortie pour des raisons de securite. Dans ce cas, un report ou un remboursement sera propose."}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
