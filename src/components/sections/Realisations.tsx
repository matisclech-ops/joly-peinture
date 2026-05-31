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
    id: "chambre-combles-avant-apres",
    title: "Chambre sous combles · Avant / Après",
    description: "Lambris peint en blanc, mur d'accent bleu pétrole — relooking complet d'une chambre mansardée.",
    href: "#contact",
    image: "/realisations/chambre-avant-apres.jpg",
  },
  {
    id: "chambre-avant-apres",
    title: "Chambre · Avant / Après",
    description: "Papier peint déposé, mur d'accent bleu, pose de parquet — transformation totale d'une chambre.",
    href: "#contact",
    image: "/realisations/chambre2-avant-apres.jpg",
  },
  {
    id: "cage-escalier-avant-apres",
    title: "Cage d'escalier · Avant / Après",
    description: "Lambris bois intégral repeint en blanc — circulation transformée en espace lumineux.",
    href: "#contact",
    image: "/realisations/cage-escalier-avant-apres.jpg",
  },
  {
    id: "papier-peint",
    title: "Papier peint d'art",
    description: "Pose précise de fresques murales — comme cette wisteria dans une chambre sous combles.",
    href: "#contact",
    image: "/realisations/papier-peint-wisteria.jpg",
  },
  {
    id: "facade",
    title: "Ravalement de façade",
    description: "Façades, pignons et volets protégés durablement contre les intempéries.",
    href: "#contact",
    image: "/realisations/facade.jpg",
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
