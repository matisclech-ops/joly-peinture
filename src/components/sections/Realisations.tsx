const ITEMS = [
  { large: true, bg: "linear-gradient(145deg,#c8b8a0,#a89278)", type: "Salon · Orléans", cta: "Voir le chantier →" },
  { bg: "linear-gradient(145deg,#bfb09a,#9e8e78)", type: "Façade · Olivet", cta: "Voir →" },
  { bg: "linear-gradient(145deg,#d0c0a8,#b0a088)", type: "Chambre", cta: "Voir →" },
  { bg: "linear-gradient(145deg,#c4b4a0,#a49484)", type: "Couloir", cta: "Voir →" },
  { bg: "linear-gradient(145deg,#b8aa98,#988a78)", type: "Enduit décoratif", cta: "Voir →" },
  { bg: "linear-gradient(145deg,#ccc0b0,#aca098)", type: "Ravalement", cta: "Voir →" },
];

export default function Realisations() {
  return (
    <section className="realisations" id="realisations">
      <div className="container">
        <span className="section-label">(réalisations)</span>
        <h2>
          Quelques chantiers
          <br />
          <em>récents</em>
        </h2>
        <div className="gallery-grid">
          {ITEMS.map((item, i) => (
            <div className={item.large ? "gallery-item large reveal" : "gallery-item reveal"} key={i}>
              <div className="gallery-ph" style={{ background: item.bg }} />
              <span className="gallery-type">{item.type}</span>
              <div className="gallery-overlay">
                <span>{item.cta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
