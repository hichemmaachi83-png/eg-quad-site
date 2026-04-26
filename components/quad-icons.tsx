"use client"

import { SVGProps } from "react"

// Icone Quad/ATV
export function QuadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Roues */}
      <circle cx="14" cy="44" r="10" />
      <circle cx="14" cy="44" r="5" />
      <circle cx="50" cy="44" r="10" />
      <circle cx="50" cy="44" r="5" />
      {/* Chassis */}
      <path d="M24 44h16" />
      <path d="M20 36l-6 8" />
      <path d="M44 36l6 8" />
      {/* Corps */}
      <path d="M20 36h24l4-8H16l4 8z" />
      {/* Guidon */}
      <path d="M28 28v-6" />
      <path d="M22 22h12" />
      {/* Siege */}
      <path d="M34 28h8v4H30v-4h4z" />
      {/* Phare */}
      <circle cx="32" cy="18" r="2" fill="currentColor" />
    </svg>
  )
}

// Icone Casque de moto
export function HelmetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Forme principale du casque */}
      <path d="M12 36c0-12 8-22 20-22s20 10 20 22v4c0 2-1 4-3 4H15c-2 0-3-2-3-4v-4z" />
      {/* Visiere */}
      <path d="M12 32h40" />
      <path d="M14 32c0-4 8-8 18-8s18 4 18 8" />
      {/* Ventilation */}
      <path d="M28 20h8" />
      {/* Mentonniere */}
      <path d="M16 44v4c0 2 2 4 4 4h24c2 0 4-2 4-4v-4" />
    </svg>
  )
}

// Icone Roue de quad
export function WheelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Pneu exterieur */}
      <circle cx="32" cy="32" r="26" />
      {/* Jante */}
      <circle cx="32" cy="32" r="16" />
      {/* Centre */}
      <circle cx="32" cy="32" r="6" fill="currentColor" />
      {/* Rayons */}
      <path d="M32 16v10" />
      <path d="M32 38v10" />
      <path d="M16 32h10" />
      <path d="M38 32h10" />
      <path d="M20 20l8 8" />
      <path d="M36 36l8 8" />
      <path d="M44 20l-8 8" />
      <path d="M28 36l-8 8" />
      {/* Crampons du pneu */}
      <path d="M8 26l4 2" />
      <path d="M8 38l4-2" />
      <path d="M56 26l-4 2" />
      <path d="M56 38l-4-2" />
      <path d="M26 8l2 4" />
      <path d="M38 8l-2 4" />
      <path d="M26 56l2-4" />
      <path d="M38 56l-2-4" />
    </svg>
  )
}

// Icone Montagne/Terrain
export function TerrainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Montagnes */}
      <path d="M4 52l16-32 8 12 12-20 20 40H4z" />
      <path d="M20 20l4 8" />
      {/* Soleil */}
      <circle cx="50" cy="14" r="6" />
      <path d="M50 4v2" />
      <path d="M50 22v2" />
      <path d="M40 14h2" />
      <path d="M56 14h2" />
      {/* Pin/Arbre */}
      <path d="M12 52v-8" />
      <path d="M8 48l4-6 4 6" />
    </svg>
  )
}

// Icone Gant
export function GloveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Paume */}
      <path d="M18 56c-4 0-6-2-6-6V30c0-2 2-4 4-4h28c2 0 4 2 4 4v20c0 4-2 6-6 6H18z" />
      {/* Doigts */}
      <path d="M16 26V14c0-2 2-4 4-4s4 2 4 4v12" />
      <path d="M24 26V10c0-2 2-4 4-4s4 2 4 4v16" />
      <path d="M32 26V10c0-2 2-4 4-4s4 2 4 4v16" />
      <path d="M40 26V14c0-2 2-4 4-4s4 2 4 4v12" />
      {/* Pouce */}
      <path d="M12 36l-4-6c-1-2 0-4 2-5s4 0 5 2l3 5" />
      {/* Protection */}
      <path d="M18 40h26" />
    </svg>
  )
}

// Icone Carburant/Essence
export function FuelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Pompe */}
      <rect x="10" y="18" width="28" height="40" rx="2" />
      {/* Ecran */}
      <rect x="16" y="24" width="16" height="10" rx="1" />
      {/* Poignee */}
      <path d="M38 30h8c2 0 4-2 4-4V16" />
      <path d="M50 16v-4c0-1-1-2-2-2h-4" />
      {/* Tuyau */}
      <path d="M46 30v16c0 2 2 4 4 4h2" />
      <path d="M52 46v8" />
      {/* Pistolet */}
      <path d="M48 54h8l2 4h-12l2-4z" />
      {/* Logo carburant */}
      <path d="M24 44c-2 0-4-2-4-4s2-4 4-4 4 4 4 4-2 4-4 4z" fill="currentColor" />
    </svg>
  )
}

// Icone Aventure/Boussole
export function AdventureIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Cercle boussole */}
      <circle cx="32" cy="32" r="26" />
      <circle cx="32" cy="32" r="22" />
      {/* Aiguille Nord */}
      <path d="M32 10l4 18h-8l4-18z" fill="currentColor" />
      {/* Aiguille Sud */}
      <path d="M32 54l-4-18h8l-4 18z" />
      {/* Directions */}
      <text x="32" y="9" textAnchor="middle" fontSize="6" fill="currentColor" stroke="none" fontWeight="bold">N</text>
      <text x="32" y="61" textAnchor="middle" fontSize="6" fill="currentColor" stroke="none" fontWeight="bold">S</text>
      <text x="7" y="34" textAnchor="middle" fontSize="6" fill="currentColor" stroke="none" fontWeight="bold">O</text>
      <text x="57" y="34" textAnchor="middle" fontSize="6" fill="currentColor" stroke="none" fontWeight="bold">E</text>
    </svg>
  )
}

// Icone Coeur/Passion
export function PassionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Coeur avec flamme */}
      <path d="M32 56s-20-12-20-28c0-8 6-14 14-14 4 0 6 2 6 2s2-2 6-2c8 0 14 6 14 14 0 16-20 28-20 28z" />
      {/* Flamme interieure */}
      <path d="M32 24c0 0-6 8-6 14s4 8 6 10c2-2 6-4 6-10s-6-14-6-14z" fill="currentColor" />
      <path d="M32 32c0 4-2 6-2 8s1 4 2 4 2-2 2-4 0-4 0-8" />
    </svg>
  )
}

// Icone Groupe/Convivialite
export function GroupIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Personne centrale */}
      <circle cx="32" cy="18" r="8" />
      <path d="M20 56v-10c0-6 5-10 12-10s12 4 12 10v10" />
      {/* Personne gauche */}
      <circle cx="12" cy="22" r="6" />
      <path d="M4 52v-8c0-4 4-8 8-8" />
      {/* Personne droite */}
      <circle cx="52" cy="22" r="6" />
      <path d="M60 52v-8c0-4-4-8-8-8" />
      {/* Lignes de connexion */}
      <path d="M18 28c-2 2-4 4-4 8" strokeDasharray="2 2" />
      <path d="M46 28c2 2 4 4 4 8" strokeDasharray="2 2" />
    </svg>
  )
}

// Icone Securite/Bouclier
export function SafetyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Bouclier */}
      <path d="M32 6L8 14v20c0 14 12 22 24 26 12-4 24-12 24-26V14L32 6z" />
      {/* Checkmark */}
      <path d="M22 32l8 8 14-16" strokeWidth="3" />
      {/* Details bouclier */}
      <path d="M32 6v50" strokeDasharray="4 4" opacity="0.3" />
    </svg>
  )
}

// Icone Chrono/Temps
export function ChronoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Corps du chrono */}
      <circle cx="32" cy="36" r="22" />
      {/* Bouton du haut */}
      <rect x="28" y="6" width="8" height="8" rx="1" />
      {/* Boutons lateraux */}
      <path d="M50 22l6-6" />
      <path d="M14 22l-6-6" />
      {/* Aiguilles */}
      <path d="M32 36V22" strokeWidth="3" />
      <path d="M32 36l10 6" strokeWidth="2" />
      {/* Centre */}
      <circle cx="32" cy="36" r="3" fill="currentColor" />
      {/* Marques */}
      <path d="M32 18v4" />
      <path d="M32 50v4" />
      <path d="M14 36h4" />
      <path d="M46 36h4" />
    </svg>
  )
}

// Icone Document/Permis
export function LicenseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Carte */}
      <rect x="6" y="14" width="52" height="36" rx="4" />
      {/* Photo */}
      <rect x="12" y="22" width="14" height="18" rx="2" />
      <circle cx="19" cy="28" r="4" />
      <path d="M12 40c0-4 3-6 7-6s7 2 7 6" />
      {/* Lignes texte */}
      <path d="M32 24h18" />
      <path d="M32 32h14" />
      <path d="M32 40h10" />
      {/* Permis B */}
      <text x="48" y="46" fontSize="8" fill="currentColor" stroke="none" fontWeight="bold">B</text>
    </svg>
  )
}

// Icone Caution/Argent
export function CautionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Coffre */}
      <rect x="8" y="24" width="48" height="32" rx="4" />
      {/* Couvercle */}
      <path d="M8 32h48" />
      {/* Serrure */}
      <circle cx="32" cy="44" r="8" />
      <path d="M32 40v8" />
      <path d="M28 44h8" />
      {/* Poignees */}
      <path d="M16 24v-8c0-4 4-8 8-8h16c4 0 8 4 8 8v8" />
      {/* Euro */}
      <text x="32" y="47" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none" fontWeight="bold">&#8364;</text>
    </svg>
  )
}

// Icone Calendrier
export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Corps calendrier */}
      <rect x="8" y="12" width="48" height="44" rx="4" />
      {/* Barre du haut */}
      <path d="M8 24h48" />
      {/* Anneaux */}
      <path d="M20 8v8" />
      <path d="M44 8v8" />
      {/* Jours */}
      <rect x="14" y="30" width="8" height="8" rx="1" />
      <rect x="28" y="30" width="8" height="8" rx="1" fill="currentColor" />
      <rect x="42" y="30" width="8" height="8" rx="1" />
      <rect x="14" y="42" width="8" height="8" rx="1" />
      <rect x="28" y="42" width="8" height="8" rx="1" />
      <rect x="42" y="42" width="8" height="8" rx="1" />
    </svg>
  )
}

// Icone Annulation
export function CancelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Cercle */}
      <circle cx="32" cy="32" r="26" />
      {/* X */}
      <path d="M22 22l20 20" strokeWidth="3" />
      <path d="M42 22l-20 20" strokeWidth="3" />
    </svg>
  )
}

// Icone Briefing/Instruction
export function BriefingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Personne */}
      <circle cx="20" cy="16" r="8" />
      <path d="M8 52v-16c0-6 5-10 12-10s12 4 12 10v16" />
      {/* Bulle de parole */}
      <path d="M36 12h20c2 0 4 2 4 4v16c0 2-2 4-4 4H44l-6 6v-6h-2c-2 0-4-2-4-4V16c0-2 2-4 4-4z" />
      {/* Points dans la bulle */}
      <circle cx="42" cy="24" r="2" fill="currentColor" />
      <circle cx="50" cy="24" r="2" fill="currentColor" />
      {/* Lignes d'info */}
      <path d="M40 20h14" />
      <path d="M40 28h10" />
    </svg>
  )
}
