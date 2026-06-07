import { useState } from "react";
import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4";
import LightboxModal from "@/components/LightboxModal";

const ITEMS: Gallery4Item[] = [
  {
    id: "salon-avant-apres",
    title: "Salon · Avant / Après",
    description: "Murs et escalier intégralement rénovés — peinture intérieure et finitions bicolores.",
    image: "/realisations/salon-avant-apres.jpg",
    beforeImage: "/realisations/details/salon-avant.jpg",
    afterImage: "/realisations/details/salon-apres.jpg",
  },
  {
    id: "chambre-combles-avant-apres",
    title: "Chambre sous combles · Avant / Après",
    description: "Lambris peint en blanc, mur d'accent bleu pétrole — relooking complet d'une chambre mansardée.",
    image: "/realisations/chambre-avant-apres.jpg",
    beforeImage: "/realisations/details/chambre-combles-avant.jpg",
    afterImage: "/realisations/details/chambre-combles-apres.jpg",
  },
  {
    id: "chambre-avant-apres",
    title: "Chambre · Avant / Après",
    description: "Papier peint déposé, mur d'accent bleu, pose de parquet — transformation totale d'une chambre.",
    image: "/realisations/chambre2-avant-apres.jpg",
    beforeImage: "/realisations/details/chambre-avant.jpg",
    afterImage: "/realisations/details/chambre-apres.jpg",
  },
  {
    id: "cage-escalier-avant-apres",
    title: "Cage d'escalier · Avant / Après",
    description: "Lambris bois intégral repeint en blanc — circulation transformée en espace lumineux.",
    image: "/realisations/cage-escalier-avant-apres.jpg",
    beforeImage: "/realisations/details/cage-escalier-avant.jpg",
    afterImage: "/realisations/details/cage-escalier-apres.jpg",
  },
  {
    id: "papier-peint",
    title: "Papier peint d'art",
    description: "Pose précise de fresques murales — comme cette wisteria dans une chambre sous combles.",
    image: "/realisations/papier-peint-wisteria.jpg",
  },
];

export default function Realisations() {
  const [selected, setSelected] = useState<Gallery4Item | null>(null);

  return (
    <>
      <Gallery4
        id="realisations"
        label="(avant / après)"
        title="Exemples de travaux"
        description="Du chantier brut à la finition impeccable — chaque pièce reprend vie."
        items={ITEMS}
        className="bg-secondary"
        onItemSelect={setSelected}
      />
      <LightboxModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
