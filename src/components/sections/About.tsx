import StatNumber from "@/components/StatNumber";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-text-col">
          <span className="section-label">(à propos)</span>
          <h2>
            Artisan peintre depuis
            <br />
            plus de <em>10 ans</em> à Orléans
          </h2>
          <p>
            Chez Joly Peinture, chaque chantier est traité avec le même soin : préparation minutieuse des
            surfaces, protection de vos biens, finitions impeccables. 90 clients Google lui font confiance — et
            il y tient. Artisan assuré, travaux couverts par la garantie décennale.
          </p>
          <div className="about-stats">
            <div className="stat-item reveal">
              <StatNumber target={4.9} decimals={1} />
              <div className="stat-label">
                Note Google <span className="stat-star">★</span>
              </div>
            </div>
            <div className="stat-item reveal">
              <StatNumber target={90} />
              <div className="stat-label">Avis clients</div>
            </div>
            <div className="stat-item reveal">
              <StatNumber target={10} />
              <div className="stat-label">Ans d'expérience</div>
            </div>
            <div className="stat-item reveal">
              <StatNumber target={45} />
              <div className="stat-label">Km d'intervention</div>
            </div>
          </div>
        </div>
        <div className="about-img reveal">
          <BeforeAfterSlider
            beforeSrc="/about-avant.jpg"
            afterSrc="/about-apres.jpg"
            beforeAlt="Chambre avant rénovation par Joly Peinture"
            afterAlt="Chambre après rénovation par Joly Peinture"
          />
        </div>
      </div>
    </section>
  );
}
