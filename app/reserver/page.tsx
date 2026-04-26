"use client"

import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { CalendarIcon, Clock, Users, Check, AlertCircle, Phone, Sparkles, Loader2 } from "lucide-react"
import Link from "next/link"

const offers = [
  {
    id: "30min",
    label: "Balade découverte",
    subtitle: "30 minutes",
    price1: "35 €",
    price2: "35 €",
    category: "classic",
  },
  {
    id: "1h",
    label: "Balade immersion",
    subtitle: "1 heure",
    price1: "60 €",
    price2: "60 €",
    category: "classic",
  },
  {
    id: "2h",
    label: "Balade aventure",
    subtitle: "2 heures",
    price1: "100 €",
    price2: "100 €",
    category: "classic",
  },
  {
    id: "3h",
    label: "Balade évasion",
    subtitle: "3 heures",
    price1: "120 €",
    price2: "120 €",
    category: "classic",
  },
  {
    id: "6h",
    label: "Balade horizon",
    subtitle: "6 heures",
    price1: "150 €",
    price2: "150 €",
    category: "classic",
  },
  {
    id: "12h",
    label: "Pack 12h",
    subtitle: "Journée longue aventure",
    price1: "180 €",
    price2: "180 €",
    category: "classic",
  },
  {
    id: "duo",
    label: "Offre Duo",
    subtitle: "1 quad / 2 personnes / 1 heure",
    price1: "80 €",
    price2: "80 €",
    category: "special",
  },
  {
    id: "sunset",
    label: "Pack coucher de soleil",
    subtitle: "1 heure au sunset",
    price1: "70 €",
    price2: "70 €",
    category: "special",
  },
  {
    id: "cafe",
    label: "Pack balade + pause café ou thé",
    subtitle: "Formule conviviale",
    price1: "Sur demande",
    price2: "Sur demande",
    category: "special",
  },
]

export default function ReserverPage() {
  const [date, setDate] = useState<Date>()
  const [selectedOffer, setSelectedOffer] = useState("1h")
  const [persons, setPersons] = useState("1")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Gestion automatique du nombre de personnes pour l'offre Duo
  useEffect(() => {
    if (selectedOffer === "duo") {
      setPersons("2")
    }
  }, [selectedOffer])

  const selected = offers.find((offer) => offer.id === selectedOffer)
  const price = persons === "1" ? selected?.price1 : selected?.price2

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation des données obligatoires
    if (!date) {
      alert("Veuillez sélectionner une date pour votre réservation.")
      return
    }

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert("Veuillez remplir tous les champs obligatoires (Prénom, Nom, Email et Téléphone).")
      return
    }

    setIsLoading(true)

    const templateParams = {
      to_name: "EG Quad Location",
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      offer_label: selected?.label,
      offer_duration: selected?.subtitle,
      persons: persons,
      reservation_date: format(date, "PPP", { locale: fr }),
      price_estimated: price,
      message: formData.message,
    }

    try {
      await emailjs.send(
        "service_bclge8i",
        "template_e2n7g1x",
        templateParams,
        "a7qgCULr4vaHnWdNo"
      )
      setSubmitted(true)
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error)
      alert("Une erreur est survenue. Merci de nous contacter par téléphone.")
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="mx-auto max-w-2xl px-4 py-16 lg:px-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-8 w-8 text-green-600" />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-foreground">
                  Votre demande a bien été envoyée
                </h2>

                <p className="mt-4 text-muted-foreground">
                  Notre équipe vous recontactera rapidement pour confirmer la disponibilité et finaliser votre réservation.
                </p>

                <div className="mt-8 rounded-lg bg-secondary p-4 text-left">
                  <h3 className="mb-2 font-semibold text-foreground">Récapitulatif :</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>
                      <strong>Date :</strong> {date ? format(date, "PPP", { locale: fr }) : "Non spécifiée"}
                    </li>
                    <li>
                      <strong>Offre :</strong> {selected?.label}
                    </li>
                    <li>
                      <strong>Personnes :</strong> {persons}
                    </li>
                    <li>
                      <strong>Prix estimé :</strong> {price}
                    </li>
                  </ul>
                </div>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button asChild>
                    <Link href="/">Retour à l'accueil</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="tel:0774206369">
                      <Phone className="mr-2 h-4 w-4" />
                      Nous appeler
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const classicOffers = offers.filter((offer) => offer.category === "classic")
  const specialOffers = offers.filter((offer) => offer.category === "special")

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
              Comment réserver ?
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Envoyez votre demande de réservation directement depuis le formulaire ci-dessous ou contactez-nous par téléphone. Après réception, EG Quad Location vous recontacte pour confirmer les disponibilités et valider définitivement votre sortie.
            </p>
          </div>
        </section>

        {/* Notice Section */}
        <section className="border-y border-amber-200 bg-amber-50 py-4">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="text-center font-medium text-amber-800">
              La réservation n'est pas automatique. Toute demande envoyée via le site doit être confirmée par EG Quad Location par téléphone ou par e-mail.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Form Column */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Demande de réservation</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Formula Selection - Classic */}
                      <div className="space-y-3">
                        <Label className="text-base font-semibold">Choisissez votre formule</Label>
                        <RadioGroup
                          value={selectedOffer}
                          onValueChange={setSelectedOffer}
                          className="grid gap-3 md:grid-cols-2 xl:grid-cols-3"
                        >
                          {classicOffers.map((offer) => (
                            <div key={offer.id}>
                              <RadioGroupItem value={offer.id} id={offer.id} className="peer sr-only" />
                              <Label
                                htmlFor={offer.id}
                                className="flex min-h-[130px] cursor-pointer flex-col justify-between rounded-lg border-2 border-muted bg-card p-4 transition-colors hover:bg-secondary peer-data-[state=checked]:border-accent"
                              >
                                <div>
                                  <Clock className="mb-2 h-6 w-6 text-accent" />
                                  <span className="block font-semibold">{offer.label}</span>
                                  <span className="mt-1 block text-sm text-muted-foreground">
                                    {offer.subtitle}
                                  </span>
                                </div>
                                <span className="mt-3 text-sm font-medium text-accent">
                                  {offer.price1}
                                </span>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      {/* Formula Selection - Special */}
                      <div className="space-y-3">
                        <Label className="flex items-center gap-2 text-base font-semibold">
                          <Sparkles className="h-4 w-4 text-accent" />
                          Formules spéciales
                        </Label>
                        <RadioGroup
                          value={selectedOffer}
                          onValueChange={setSelectedOffer}
                          className="grid gap-3 md:grid-cols-1 xl:grid-cols-3"
                        >
                          {specialOffers.map((offer) => (
                            <div key={offer.id}>
                              <RadioGroupItem value={offer.id} id={offer.id} className="peer sr-only" />
                              <Label
                                htmlFor={offer.id}
                                className="flex min-h-[130px] cursor-pointer flex-col justify-between rounded-lg border-2 border-muted bg-card p-4 transition-colors hover:bg-secondary peer-data-[state=checked]:border-accent"
                              >
                                <div>
                                  <Sparkles className="mb-2 h-6 w-6 text-accent" />
                                  <span className="block font-semibold">{offer.label}</span>
                                  <span className="mt-1 block text-sm text-muted-foreground">
                                    {offer.subtitle}
                                  </span>
                                </div>
                                <span className="mt-3 text-sm font-medium text-accent">
                                  {offer.price1}
                                </span>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      {/* Persons Selection */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-base font-semibold">Nombre de personnes</Label>
                          {selectedOffer === "duo" && (
                            <span className="text-xs font-bold text-accent italic underline">
                              Offre Duo : Verrouillé sur 2 personnes
                            </span>
                          )}
                        </div>
                        <RadioGroup
                          value={persons}
                          onValueChange={setPersons}
                          className="grid gap-3 md:grid-cols-2"
                          disabled={selectedOffer === "duo"}
                        >
                          <div>
                            <RadioGroupItem
                              value="1"
                              id="1person"
                              className="peer sr-only"
                              disabled={selectedOffer === "duo"}
                            />
                            <Label
                              htmlFor="1person"
                              className={cn(
                                "flex cursor-pointer items-center justify-center gap-3 rounded-lg border-2 border-muted bg-card p-4 transition-colors hover:bg-secondary peer-data-[state=checked]:border-accent",
                                selectedOffer === "duo" && "opacity-50 cursor-not-allowed"
                              )}
                            >
                              <Users className="h-5 w-5 text-accent" />
                              <span className="font-semibold">1 personne</span>
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="2" id="2persons" className="peer sr-only" />
                            <Label
                              htmlFor="2persons"
                              className={cn(
                                "flex cursor-pointer items-center justify-center gap-3 rounded-lg border-2 border-muted bg-card p-4 transition-colors hover:bg-secondary peer-data-[state=checked]:border-accent",
                                selectedOffer === "duo" && "border-accent bg-accent/5"
                              )}
                            >
                              <Users className="h-5 w-5 text-accent" />
                              <span className="font-semibold">2 personnes</span>
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {/* Date Selection */}
                      <div className="space-y-3">
                        <Label className="text-base font-semibold">Date souhaitée *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP", { locale: fr }) : "Sélectionner une date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      {/* Contact Information */}
                      <div className="space-y-4">
                        <Label className="text-base font-semibold">Vos coordonnées</Label>

                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">Prénom *</Label>
                            <Input
                              id="firstName"
                              required
                              value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Nom *</Label>
                            <Input
                              id="lastName"
                              required
                              value={formData.lastName}
                              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Téléphone *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message (optionnel)</Label>
                          <Textarea
                            id="message"
                            placeholder="Précisions sur votre réservation, questions..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isLoading}
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          "Envoyer ma demande"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Recap */}
              <div className="space-y-6">
                <Card className="border-0 bg-primary text-primary-foreground shadow-lg">
                  <CardHeader>
                    <CardTitle>Récapitulatif</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-primary-foreground/70">Offre</span>
                      <span className="max-w-[180px] text-right font-semibold">{selected?.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary-foreground/70">Durée</span>
                      <span className="font-semibold">{selected?.subtitle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary-foreground/70">Personnes</span>
                      <span className="font-semibold">{persons}</span>
                    </div>
                    <div className="border-t border-primary-foreground/20 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-primary-foreground/70">Prix estimé</span>
                        <span className="text-2xl font-bold text-accent">{price}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-accent" />
                      Important
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Réservation obligatoire 24h à l'avance minimum.</p>
                    <p>Documents requis : permis B + pièce d'identité.</p>
                    <p>Caution de 900 € demandée au départ.</p>
                    <p>Annulation gratuite jusqu'à 24h avant.</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Une question ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      N'hésitez pas à nous appeler pour toute question ou demande spécifique.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <a href="tel:0774206369">
                        <Phone className="mr-2 h-4 w-4" />
                        07 74 20 63 69
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}