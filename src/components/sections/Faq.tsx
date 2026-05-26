import { useState } from "react";

const FAQ = [
  {
    q: "Intervenez-vous uniquement à Orléans ?",
    a: "Non, nous intervenons à Orléans et dans un rayon de 45 km : Saint-Jean-de-Braye, Fleury-les-Aubrais, Saran, Olivet, La Chapelle-Saint-Mesmin et toute l'agglomération orléanaise.",
  },
  {
    q: "Le devis est-il vraiment gratuit ?",
    a: "Oui, totalement gratuit et sans engagement. Nous nous déplaçons pour évaluer vos besoins et vous remettons un devis détaillé sous 48h.",
  },
  {
    q: "Quel est le délai d'intervention ?",
    a: "Le délai dépend de la taille du chantier et de notre planning. En général, nous pouvons intervenir sous 1 à 3 semaines après validation du devis.",
  },
  {
    q: "Protégez-vous les meubles et le sol ?",
    a: "Absolument. La protection de vos biens fait partie intégrante de notre façon de travailler. Meubles, sols et surfaces sont soigneusement protégés avant chaque intervention.",
  },
  {
    q: "Quels types de travaux réalisez-vous ?",
    a: "Peinture intérieure (murs, plafonds, boiseries), peinture extérieure et ravalement de façades, enduits décoratifs, pose de papier peint. Pour les particuliers comme pour les professionnels.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <span className="section-label">(questions fréquentes)</span>
        <h2>
          Vous avez
          <br />
          <em>des questions ?</em>
        </h2>
        <div className="faq-list">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={isOpen ? "faq-item open" : "faq-item"} key={i}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a${i + 1}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {item.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a" id={`faq-a${i + 1}`} aria-hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
