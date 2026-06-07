import { GoogleIcon, PhoneIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-pill">
            <span className="hero-pill-dot" />⭐ 4,9 · 90 avis Google · Devis gratuit sous 48 h
          </div>
          <h1 className="hero-title">
            Votre artisan
            <br />
            <em>peintre</em> <span className="hero-img-pill">🖌️</span> à Orléans
          </h1>
          <p className="hero-sub">
            Peinture intérieure, extérieure et décoration sur mesure.
            <br />
            Devis gratuit sous 48 h — Orléans et 45 km à la ronde.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Demander un devis gratuit
            </a>
            <a href="tel:+33651294455" className="btn-outline">
              <PhoneIcon />
              06 51 29 44 55
            </a>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card-stars">
            <span aria-label="5 étoiles sur 5">★★★★★</span>
          </div>
          <div className="hero-card-score">
            4.9<span>/5</span>
          </div>
          <div className="hero-card-count">90 avis Google</div>
          <div className="hero-card-badge">
            <GoogleIcon />
            Avis vérifiés Google
          </div>
        </div>
      </div>
    </section>
  );
}
