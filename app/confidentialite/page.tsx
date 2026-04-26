import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Politique de Confidentialite | EG Quad Location",
  description: "Politique de confidentialite de EG Quad Location",
}

export default function Confidentialite() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h1 className="text-3xl font-bold text-foreground mb-8">Politique de Confidentialite</h1>
            
            <div className="prose prose-slate max-w-none space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Collecte des donnees</h2>
                <p className="text-muted-foreground">
                  {"EG Quad Location collecte uniquement les donnees necessaires au traitement de votre demande de reservation : nom, prenom, numero de telephone, adresse email, et informations relatives a votre location."}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Utilisation des donnees</h2>
                <p className="text-muted-foreground mb-2">Vos donnees sont utilisees pour :</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Traiter et confirmer vos demandes de reservation</li>
                  <li>Vous contacter concernant votre location</li>
                  <li>Vous informer de nos offres et promotions (avec votre consentement)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Conservation des donnees</h2>
                <p className="text-muted-foreground">
                  {"Vos donnees personnelles sont conservees pendant une duree de 3 ans a compter de votre derniere interaction avec EG Quad Location."}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Partage des donnees</h2>
                <p className="text-muted-foreground">
                  {"Vos donnees ne sont jamais vendues ni partagees avec des tiers a des fins commerciales. Elles peuvent etre transmises a nos prestataires techniques dans le cadre de la gestion des reservations."}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Vos droits</h2>
                <p className="text-muted-foreground mb-2">{"Conformement au RGPD, vous disposez des droits suivants :"}</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Droit d acces a vos donnees</li>
                  <li>Droit de rectification</li>
                  <li>Droit a l effacement</li>
                  <li>Droit a la limitation du traitement</li>
                  <li>Droit a la portabilite</li>
                  <li>Droit d opposition</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Contact</h2>
                <p className="text-muted-foreground">
                  {"Pour exercer vos droits ou pour toute question concernant la protection de vos donnees, contactez-nous a : egquadlocation@outlook.fr"}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Cookies</h2>
                <p className="text-muted-foreground">
                  {"Ce site utilise des cookies techniques necessaires a son bon fonctionnement. Aucun cookie publicitaire n'est utilise."}
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
