import { useState } from "react";

const FAQ = [
  {
    q: "Vous n'intervenez qu'à Orléans ?",
    a: "Non, nous nous déplaçons dans tout le bassin orléanais : Saint-Jean-de-Braye, Fleury-les-Aubrais, Saran, Olivet, La Chapelle-Saint-Mesmin et toutes les communes dans un rayon de 45 km. Le déplacement pour le devis est offert.",
  },
  {
    q: "Le devis est-il vraiment gratuit ?",
    a: "Oui, sans aucun engagement. Nous venons chez vous, nous mesurons, nous discutons de votre projet, et vous recevez un devis détaillé sous 48 heures par mail. C'est ensuite à vous de voir.",
  },
  {
    q: "Sous combien de temps pouvez-vous intervenir ?",
    a: "Entre 1 et 3 semaines après validation du devis, selon la taille du chantier et notre planning. Nous vous donnons toujours une date ferme à l'avance — et nous nous y tenons.",
  },
  {
    q: "Protégez-vous les meubles et les sols ?",
    a: "Toujours. Avant le moindre coup de pinceau, meubles, sols, prises et plinthes sont protégés. À la fin du chantier, vous récupérez votre maison telle que vous l'avez laissée — en mieux.",
  },
  {
    q: "Quels types de travaux faites-vous ?",
    a: "Peinture intérieure (murs, plafonds, boiseries, menuiseries), peinture extérieure et ravalement de façades, enduits décoratifs et pose de papier peint d'art. Pour les particuliers comme pour les professionnels.",
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
