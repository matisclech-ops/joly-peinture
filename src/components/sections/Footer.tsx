export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container footer-top">
        <div className="footer-logo">
          <img
            src="/logo.jpg"
            alt="Joly Peinture"
            className="logo-img logo-img--footer"
            width={52}
            height={52}
          />
        </div>
        <nav className="footer-links" aria-label="Navigation secondaire">
          <a href="#services">Services</a>
          <a href="#realisations">Réalisations</a>
          <a href="#avis">Avis</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer-contact-info">
          <a href="tel:+33651294455">06 51 29 44 55</a>
          <a href="mailto:joly.peinture@hotmail.com">joly.peinture@hotmail.com</a>
        </div>
      </div>
      <div className="footer-monumental" aria-hidden="true">
        JOLY
      </div>
      <div className="container footer-bottom">
        <span>© {year} Joly Peinture · Orléans</span>
      </div>
    </footer>
  );
}
