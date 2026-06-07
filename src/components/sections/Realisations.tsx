import { useState } from "react";
import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4";
import LightboxModal from "@/components/LightboxModal";

const ITEMS: Gallery4Item[] = [
  {
    id: "salon-avant-apres",
    title: "Salon · Avant / Après",
    description: "Murs gris doux et escalier bicolore — un salon qui a pris dix ans de moins.",
    image: "/realisations/salon-avant-apres.jpg",
    beforeImage: "/realisations/details/salon-avant.jpg",
    afterImage: "/realisations/details/salon-apres.jpg",
  },
  {
    id: "chambre-combles-avant-apres",
    title: "Chambre sous combles · Avant / Après",
    description: "Du lambris sombre et du papier peint chargé à une chambre lumineuse — lambris repeint en blanc, mur d'accent bleu pétrole.",
    image: "/realisations/chambre-avant-apres.jpg",
    beforeImage: "/realisations/details/chambre-combles-avant.jpg",
    afterImage: "/realisations/details/chambre-combles-apres.jpg",
  },
  {
    id: "chambre-avant-apres",
    title: "Chambre · Avant / Après",
    description: "Adieu papier peint et moquette — bonjour mur d'accent bleu et parquet. La pièce respire.",
    image: "/realisations/chambre2-avant-apres.jpg",
    beforeImage: "/realisations/details/chambre-avant.jpg",
    afterImage: "/realisations/details/chambre-apres.jpg",
  },
  {
    id: "cage-escalier-avant-apres",
    title: "Cage d'escalier · Avant / Après",
    description: "D'un palier intégralement bois à un espace lumineux et moderne — tout repeint, du sol au plafond.",
    image: "/realisations/cage-escalier-avant-apres.jpg",
    beforeImage: "/realisations/details/cage-escalier-avant.jpg",
    afterImage: "/realisations/details/cage-escalier-apres.jpg",
  },
  {
    id: "papier-peint",
    title: "Papier peint d'art",
    description: "Pose de fresques murales sur mesure. Ici, une wisteria pour une chambre sous combles — patience et précision.",
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
        description="Quelques transformations récentes — la même pièce avant, et après notre passage. La différence parle d'elle-même."
        items={ITEMS}
        className="bg-secondary"
        onItemSelect={setSelected}
      />
      <LightboxModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
