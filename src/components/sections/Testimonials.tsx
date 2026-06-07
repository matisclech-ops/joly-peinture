import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "Rapidité, efficacité et gentillesse. Le travail est bien réalisé !",
    name: "Sophie M.",
    role: "Avis Google",
  },
  {
    text: "Un travail de grande qualité ! Une superbe équipe. Les finitions sont top, rien à redire.",
    name: "Alexandre J.",
    role: "Avis Google",
  },
  {
    text: "J'ai fait appel à M. Joly pour repeindre mon bureau, et je suis entièrement satisfait. Travail excellent, soigné et réalisé dans des délais très rapides. Je recommande vivement !",
    name: "Nicolas T.",
    role: "Avis Google",
  },
  {
    text: "Travail soigné, équipe sympa, je recommande vivement l'entreprise Joly Peinture.",
    name: "Armèle N.",
    role: "Avis Google",
  },
  {
    text: "Je recommande chaleureusement l'entreprise Joly Peinture pour l'excellence et la qualité de leur travail. L'équipe est très sympathique et le responsable est à l'écoute de votre demande.",
    name: "Carole B.",
    role: "Avis Google",
  },
  {
    text: "Entreprise réactive et à l'écoute des clients. Je suis plus que satisfait du résultat, encore merci ! Je recommande fortement.",
    name: "Maxence J.",
    role: "Avis Google",
  },
  {
    text: "Nous avons fait appel à l'entreprise JOLY pour repeindre mon couloir et une chambre. Le travail réalisé est excellent. Les intervenants ont été très soigneux.",
    name: "Maëlle G.",
    role: "Avis Google",
  },
  {
    text: "Nous avons fait appel à l'entreprise JOLY pour la réfection de notre cuisine. Excellent travail réalisé, intervenants très soigneux. Le rendu top, rien à dire. Nous recommandons !",
    name: "Karine R.",
    role: "Avis Google",
  },
  {
    text: "Nous avons fait appel à JOLY Peinture pour rafraîchir notre nouvelle maison, nous y referons appel sans hésiter. Le travail est minutieux et l'équipe très chaleureuse. Je recommande !",
    name: "Lola P.",
    role: "Avis Google",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section id="avis" className="py-24 bg-background">
      <div className="container">
        <span className="section-label">(ils nous font confiance)</span>
        <h2>
          Ce que disent
          <br />
          <em>nos clients</em>
        </h2>
        <p className="text-foreground/60 mt-2">★ 4,9 sur 90 avis Google vérifiés. Voilà ce qu'ils nous écrivent.</p>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=Joly+Peinture+Orl%C3%A9ans"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Voir les 90 avis Google →
          </a>
        </div>
      </div>
    </section>
  );
}
