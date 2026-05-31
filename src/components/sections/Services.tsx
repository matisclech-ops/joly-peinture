const SERVICES = [
  {
    num: "01",
    title: "Peinture intérieure",
    text: "Murs, plafonds, boiseries. Travail soigné, protection de vos biens, finitions parfaites. Vous rentrez dans un intérieur neuf.",
  },
  {
    num: "02",
    title: "Peinture extérieure",
    text: "Ravalement de façades, pignons, volets. Protection durable contre les intempéries et finition impeccable.",
  },
  {
    num: "03",
    title: "Décoration & finitions",
    text: "Enduits décoratifs, effets de matière, béton ciré. Pour des espaces qui vous ressemblent.",
  },
  {
    num: "04",
    title: "Devis gratuit sous 48h",
    text: "Déplacement gratuit et sans engagement. Nous évaluons votre projet et vous proposons un devis détaillé sous 48h.",
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
