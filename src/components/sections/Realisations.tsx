import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4";

const ITEMS: Gallery4Item[] = [
  {
    id: "interieur",
    title: "Peinture intérieure",
    description: "Murs, plafonds et boiseries — finitions soignées et protection complète de vos pièces.",
    href: "#contact",
    image: "/realisations/interieur.jpg",
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
      label="(réalisations)"
      title="Quelques chantiers récents"
      description="Aperçu de nos prestations. Photos d'exemple — bientôt remplacées par de vrais chantiers."
      items={ITEMS}
      className="bg-secondary"
    />
  );
}
