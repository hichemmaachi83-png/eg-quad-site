import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Mail } from "lucide-react"
import { TikTokIcon, SnapchatIcon, EmailIcon } from "@/components/social-icons"

export default function SuivezNousPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
              Suivez-nous
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Découvrez nos aventures en quad sur les réseaux sociaux
            </p>
          </div>
        </section>

        {/* Social Media Cards */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* TikTok Card */}
              <Card className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow">
                <div className="bg-foreground p-8 text-center">
                  <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-background/10 mb-4">
                    <TikTokIcon className="h-10 w-10 text-background" />
                  </div>
                  <h2 className="text-2xl font-bold text-background">TikTok</h2>
                  <p className="text-background/70 mt-1">@eg.quad.location</p>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">
                    {"Découvrez nos vidéos de sorties quad, les paysages explorés et les expériences de nos clients."}
                  </p>
                  <Button asChild className="w-full bg-foreground hover:bg-foreground/90 text-background">
                    <a 
                      href="https://www.tiktok.com/@eg.quad.location" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <TikTokIcon className="mr-2 h-5 w-5" />
                      Suivre sur TikTok
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Snapchat Card */}
              <Card className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow">
                <div className="bg-[#FFFC00] p-8 text-center">
                  <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-white/30 mb-4">
                    <SnapchatIcon className="h-10 w-10 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-black">Snapchat</h2>
                  <p className="text-black/70 mt-1">eg.quad.location</p>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">
                    {"Ajoutez-nous sur Snapchat pour voir nos stories quotidiennes et nos moments exclusifs en temps réel."}
                  </p>
                  <Button asChild className="w-full bg-[#FFFC00] hover:bg-[#FFFC00]/90 text-black">
                    <a 
                      href="https://www.snapchat.com/add/eg.quad.location" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <SnapchatIcon className="mr-2 h-5 w-5" />
                      Ajouter sur Snapchat
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow md:col-span-2 lg:col-span-1">
                <div className="bg-accent p-8 text-center">
                  <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-white/20 mb-4">
                    <Mail className="h-10 w-10 text-accent-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-accent-foreground">Email</h2>
                  <p className="text-accent-foreground/70 mt-1">Contact direct</p>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">
                    {"Une question ? Contactez-nous directement par email pour toute demande d'information ou réservation."}
                  </p>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="mailto:egquadlocation@outlook.fr">
                      <Mail className="mr-2 h-5 w-5" />
                      egquadlocation@outlook.fr
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl transform rotate-3" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image0%20%2815%29-x6HcFJJrrqum9gB2xPfjtM6s49j9at.jpeg"
                  alt="EG Quad Location - Notre base"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Aperçu de nos aventures
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 overflow-hidden shadow-lg">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image2%20%284%29-BotXxTL53pqozkC1OtK71zIo7yrBNl.jpeg"
                    alt="Quads sur route"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Nos quads modernes prêts pour une nouvelle aventure
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 overflow-hidden shadow-lg">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image4%20%286%29-5CQhmgySlnnyNShc7rWPhMdXx2ywh4.jpeg"
                    alt="Quads sur chemin de terre"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Exploration des chemins de la région
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 overflow-hidden shadow-lg md:col-span-2 lg:col-span-1">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/quad1.jpg"
                    alt="Quad CFMOTO bleu"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Quad CFMOTO moderne et performant
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Join the adventure */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground">
              {"Rejoignez l'aventure"}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {"Suivez-nous sur les réseaux sociaux pour ne rien manquer de nos sorties et peut-être apparaître dans nos prochaines vidéos !"}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-background">
                <a 
                  href="https://www.tiktok.com/@eg.quad.location" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <TikTokIcon className="mr-2 h-5 w-5" />
                  TikTok
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[#FFFC00] hover:bg-[#FFFC00]/90 text-black">
                <a 
                  href="https://www.snapchat.com/add/eg.quad.location" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <SnapchatIcon className="mr-2 h-5 w-5" />
                  Snapchat
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/reserver">Reserver</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
