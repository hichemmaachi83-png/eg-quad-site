import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Mentions Legales | EG Quad Location",
  description: "Mentions legales de EG Quad Location",
}

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h1 className="text-3xl font-bold text-foreground mb-8">Mentions Legales</h1>
            
            <div className="prose prose-slate max-w-none space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Editeur du site</h2>
                <p className="text-muted-foreground">
                  EG Quad Location<br />
                  789 Avenue Pablo Picasso<br />
                  La Valette-du-Var<br />
                  Telephone : 07 74 20 63 69<br />
                  Email : egquadlocation@outlook.fr
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Activite</h2>
                <p className="text-muted-foreground">
                  Location de quads pour des experiences outdoor melant aventure, nature et adrenaline.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Hebergement</h2>
                <p className="text-muted-foreground">
                  Ce site est heberge par Vercel Inc.<br />
                  440 N Barranca Ave #4133<br />
                  Covina, CA 91723, USA
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Propriete intellectuelle</h2>
                <p className="text-muted-foreground">
                  {"L'ensemble du contenu de ce site (textes, images, logos, videos) est la propriete exclusive de EG Quad Location ou de ses partenaires. Toute reproduction, meme partielle, est interdite sans autorisation prealable."}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Responsabilite</h2>
                <p className="text-muted-foreground">
                  {"EG Quad Location s'efforce de fournir des informations exactes et a jour sur ce site. Cependant, nous ne pouvons garantir l'exactitude, la completude ou l'actualite des informations diffusees."}
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
