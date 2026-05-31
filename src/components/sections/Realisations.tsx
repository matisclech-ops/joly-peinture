import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4";

const ITEMS: Gallery4Item[] = [
  {
    id: "salon-avant-apres",
    title: "Salon · Avant / Après",
    description: "Murs et escalier intégralement rénovés — peinture intérieure et finitions bicolores.",
    href: "#contact",
    image: "/realisations/salon-avant-apres.jpg",
  },
  {
    id: "chambre-avant-apres",
    title: "Chambre · Avant / Après",
    description: "Lambris peint en blanc, mur d'accent bleu pétrole — relooking complet d'une chambre sous combles.",
    href: "#contact",
    image: "/realisations/chambre-avant-apres.jpg",
  },
  {
    id: "facade",
    title: "Ravalement de façade",
    description: "Façades, pignons et volets protégés durablement contre les intempéries.",
    href: "#contact",
    image: "/realisations/facade.jpg",
  },
  {
    id: "decoration",
    title: "Décoration & enduits",
    description: "Enduits décoratifs, effets de matière et béton ciré pour personnaliser vos espaces.",
    href: "#contact",
    image: "/realisations/decoration.jpg",
  },
  {
    id: "boiseries",
    title: "Boiseries & menuiseries",
    description: "Portes, plinthes et menuiseries repeintes avec un rendu net et durable.",
    href: "#contact",
    image: "/realisations/boiseries.jpg",
  },
  {
    id: "plafonds",
    title: "Plafonds & préparation",
    description: "Préparation minutieuse des supports et mise en peinture des plafonds.",
    href: "#contact",
    image: "/realisations/plafonds.jpg",
  },
  {
    id: "papierpeint",
    title: "Pose de papier peint",
    description: "Pose précise de papier peint et revêtements muraux.",
    href: "#contact",
    image: "/realisations/papierpeint.jpg",
  },
];

export default function Realisations() {
  return (
    <Gallery4
      id="realisations"
      label="(avant / après)"
      title="Exemples de travaux"
      description="Du chantier brut à la finition impeccable — chaque pièce reprend vie."
      items={ITEMS}
      className="bg-secondary"
    />
  );
}
