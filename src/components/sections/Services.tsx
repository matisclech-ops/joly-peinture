const SERVICES = [
  {
    num: "01",
    title: "Peinture intérieure",
    text: "Murs, plafonds, boiseries et menuiseries. Préparation des supports, protection complète de vos biens, peinture, nettoyage en fin de chantier — vous retrouvez votre intérieur transformé, sans avoir levé le petit doigt.",
  },
  {
    num: "02",
    title: "Peinture extérieure",
    text: "Ravalement de façades, pignons, volets. Une protection durable contre la pluie, le gel et les UV — et un extérieur qui rajeunit votre maison.",
  },
  {
    num: "03",
    title: "Décoration & finitions",
    text: "Enduits décoratifs, effets de matière, béton ciré, papier peint d'art. Pour donner du caractère à une pièce sans changer de maison.",
  },
  {
    num: "04",
    title: "Devis gratuit sous 48 h",
    text: "Visite chez vous, évaluation précise du chantier, devis détaillé reçu sous 48 heures. Gratuit, sans engagement, et clair de la première à la dernière ligne.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <span className="section-label">(nos prestations)</span>
        <h2>
          Ce que nous faisons
          <br />
          pour <em>vous</em>
        </h2>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <a href="#contact" className="service-card reveal" key={s.num}>
              <div className="service-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
