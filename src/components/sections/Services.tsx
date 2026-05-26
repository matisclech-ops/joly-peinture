const SERVICES = [
  {
    num: "01",
    title: "Peinture intérieure",
    text: "Murs, plafonds, boiseries. Travail soigné, protection de vos biens, finitions parfaites. Vous rentrez dans un intérieur neuf.",
    cta: "En savoir plus →",
  },
  {
    num: "02",
    title: "Peinture extérieure",
    text: "Ravalement de façades, pignons, volets. Protection durable contre les intempéries et finition impeccable.",
    cta: "En savoir plus →",
  },
  {
    num: "03",
    title: "Décoration & finitions",
    text: "Enduits décoratifs, effets de matière, béton ciré. Pour des espaces qui vous ressemblent.",
    cta: "En savoir plus →",
  },
  {
    num: "04",
    title: "Devis gratuit sous 48h",
    text: "Déplacement gratuit et sans engagement. Nous évaluons votre projet et vous proposons un devis détaillé sous 48h.",
    cta: "Demander un devis →",
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
            <div className="service-card reveal" key={s.num}>
              <div className="service-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href="#contact" className="service-link">
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
