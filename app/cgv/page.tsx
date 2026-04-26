import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Conditions Generales de Vente | EG Quad Location",
  description: "Conditions generales de vente de EG Quad Location",
}

export default function CGV() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h1 className="text-3xl font-bold text-foreground mb-8">Conditions Generales de Vente</h1>
            
            <div className="prose prose-slate max-w-none space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Article 1 - Objet</h2>
                <p className="text-muted-foreground">
                  Les presentes conditions generales de vente regissent les relations contractuelles entre EG Quad Location et ses clients dans le cadre de la location de quads.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Article 2 - Conditions de location</h2>
                <p className="text-muted-foreground mb-2">Pour louer un quad, le client doit :</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Etre majeur (18 ans minimum)</li>
                  <li>Posseder un permis B valide</li>
                  <li>Presenter le jour du depart : permis de conduire original et piece d identite valide</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Article 3 - Caution</h2>
                <p className="text-muted-foreground">
                  Une caution de 900 euros est demandee avant le depart. Elle peut etre reglee par empreinte bancaire ou en especes. La caution est restituee a la fin de la location si le vehicule est rendu en bon etat.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Article 4 - Carburant</h2>
                <p className="text-muted-foreground">
                  Le quad est fourni avec le plein de carburant et doit etre restitue avec le plein. En cas de non-respect, des frais de carburant seront deduits de la caution.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Article 5 - Reservation</h2>
                <p className="text-muted-foreground">
                  {"La reservation doit etre faite au minimum 24 heures a l'avance. La reservation n'est pas automatique : toute demande envoyee via le site doit etre confirmee par EG Quad Location par telephone ou par email."}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Article 6 - Tarifs</h2>
                <p className="text-muted-foreground">
                  Les tarifs sont indiques sur le site et peuvent etre modifies a tout moment. Le prix applicable est celui en vigueur au moment de la reservation.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Article 7 - Responsabilite du locataire</h2>
                <p className="text-muted-foreground">
                  {"Le locataire s'engage a utiliser le quad de maniere responsable et conformement au code de la route. Il est responsable de tout dommage cause au vehicule pendant la duree de la location."}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Article 8 - Assurance</h2>
                <p className="text-muted-foreground">
                  {"Une assurance responsabilite civile est incluse dans la location. Elle couvre les dommages causes aux tiers. Les dommages au vehicule restent a la charge du locataire."}
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
