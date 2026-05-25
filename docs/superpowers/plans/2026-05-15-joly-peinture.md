# Joly Peinture — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild index.html / style.css / script.js into a premium one-pager for Joly Peinture, inspired by the Agero Framer template (double marquee croisé, labels en cursive italique, footer monumental).

**Architecture:** Three flat files, zero dependencies, zero build step. index.html holds all markup. style.css is written section-by-section. script.js handles scroll-reveal, animated counters, FAQ accordion, header shadow, and Formspree async submit.

**Tech Stack:** HTML5, CSS3 (custom properties, animations, grid), vanilla JS (IntersectionObserver), Google Fonts (Playfair Display + Inter), Formspree for form.

---

## File map

| File | Role |
|---|---|
| `index.html` | All markup — written once in Task 1 |
| `style.css` | Styles — replaced in full in Task 2 |
| `script.js` | Interactions — replaced in full in Task 3 |

---

## Task 1 — Complete index.html

**Files:** Modify `index.html` (full rewrite)

- [ ] **Replace index.html with the following complete markup:**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Joly Peinture — Artisan peintre à Orléans · Devis gratuit</title>
  <meta name="description" content="Artisan peintre professionnel à Orléans. Peinture intérieure, extérieure et décoration. ⭐ 4.9/5 · 90 avis Google. Devis gratuit sous 48h." />
  <meta property="og:title" content="Joly Peinture — Artisan peintre à Orléans" />
  <meta property="og:description" content="⭐ 4.9/5 · 90 avis Google. Devis gratuit sous 48h." />
  <meta property="og:type" content="website" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"LocalBusiness","name":"Joly Peinture","telephone":"+33651294455","email":"joly.peinture@hotmail.com","address":{"@type":"PostalAddress","addressLocality":"Orléans","addressCountry":"FR"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"90"}}
  </script>
</head>
<body>

  <!-- HEADER -->
  <header id="header">
    <div class="container header-inner">
      <a href="#" class="logo-link" aria-label="Joly Peinture — Accueil">
        <div class="logo-circle">
          <span class="logo-joly"><span class="logo-j">J</span>OLY</span>
          <span class="logo-peinture">PEINTURE</span>
        </div>
      </a>
      <nav class="header-nav">
        <a href="#services">Services</a>
        <a href="#realisations">Réalisations</a>
        <a href="#avis">Avis</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="header-ctas">
        <a href="https://wa.me/33651294455" target="_blank" rel="noopener" class="btn-wa-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          WhatsApp
        </a>
        <a href="tel:0651294455" class="btn-tel-header">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.66A2 2 0 012 .82h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
          06 51 29 44 55
        </a>
      </div>
    </div>
  </header>

  <!-- HERO -->
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-content">
        <div class="hero-pill">
          <span class="hero-pill-dot"></span>
          ⭐ 4.9 · 90 avis Google · Devis gratuit sans engagement
        </div>
        <h1 class="hero-title">
          Votre artisan<br/><em>peintre</em>
          <span class="hero-img-pill">🖌️</span>
          à Orléans
        </h1>
        <p class="hero-sub">Peinture intérieure, extérieure et décoration.<br/>Devis gratuit sous 48h — Orléans et 45 km alentours.</p>
        <div class="hero-actions">
          <a href="#contact" class="btn-primary">Demander un devis gratuit</a>
          <a href="tel:0651294455" class="btn-outline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.66A2 2 0 012 .82h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            06 51 29 44 55
          </a>
        </div>
      </div>
      <div class="hero-card">
        <div class="hero-card-stars">★★★★★</div>
        <div class="hero-card-score">4.9<span>/5</span></div>
        <div class="hero-card-count">90 avis Google</div>
        <div class="hero-card-badge">
          <svg width="14" height="14" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Avis vérifiés Google
        </div>
      </div>
    </div>
  </section>

  <!-- DOUBLE MARQUEE -->
  <div class="marquee-wrapper">
    <div class="marquee-band red">
      <div class="marquee-track">
        <span>Peinture intérieure</span><span class="msep">✦</span>
        <span>Peinture extérieure</span><span class="msep">✦</span>
        <span>Devis gratuit</span><span class="msep">✦</span>
        <span>Orléans</span><span class="msep">✦</span>
        <span>Peinture intérieure</span><span class="msep">✦</span>
        <span>Peinture extérieure</span><span class="msep">✦</span>
        <span>Devis gratuit</span><span class="msep">✦</span>
        <span>Orléans</span><span class="msep">✦</span>
      </div>
    </div>
    <div class="marquee-band dark">
      <div class="marquee-track reverse">
        <span>4.9 Google ★</span><span class="msep">✦</span>
        <span>90 avis clients</span><span class="msep">✦</span>
        <span>10 ans d'expérience</span><span class="msep">✦</span>
        <span>Finitions soignées</span><span class="msep">✦</span>
        <span>4.9 Google ★</span><span class="msep">✦</span>
        <span>90 avis clients</span><span class="msep">✦</span>
        <span>10 ans d'expérience</span><span class="msep">✦</span>
        <span>Finitions soignées</span><span class="msep">✦</span>
      </div>
    </div>
  </div>

  <!-- À PROPOS -->
  <section class="about" id="about">
    <div class="container about-inner">
      <div class="about-text-col">
        <span class="section-label">(à propos)</span>
        <h2>Artisan peintre depuis<br/>plus de <em>10 ans</em> à Orléans</h2>
        <p>Chez Joly Peinture, chaque chantier est traité avec le même soin : préparation minutieuse des surfaces, protection de vos biens, finitions impeccables. 90 clients Google lui font confiance — et il y tient.</p>
        <div class="about-stats">
          <div class="stat-item reveal">
            <div class="stat-num" data-target="4.9" data-decimal="1">0</div>
            <div class="stat-label">Note Google <span class="stat-star">★</span></div>
          </div>
          <div class="stat-item reveal">
            <div class="stat-num" data-target="90" data-decimal="0">0</div>
            <div class="stat-label">Avis clients</div>
          </div>
          <div class="stat-item reveal">
            <div class="stat-num" data-target="10" data-decimal="0">0</div>
            <div class="stat-label">Ans d'expérience</div>
          </div>
          <div class="stat-item reveal">
            <div class="stat-num" data-target="45" data-decimal="0">0</div>
            <div class="stat-label">Km d'intervention</div>
          </div>
        </div>
      </div>
      <div class="about-img reveal">
        <div class="about-placeholder">
          <span class="placeholder-icon">🎨</span>
          <span>Photo artisan / chantier</span>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="services" id="services">
    <div class="container">
      <span class="section-label">(nos prestations)</span>
      <h2>Ce que nous faisons<br/>pour <em>vous</em></h2>
      <div class="services-grid">
        <div class="service-card reveal">
          <div class="service-num">01</div>
          <h3>Peinture intérieure</h3>
          <p>Murs, plafonds, boiseries. Travail soigné, protection de vos biens, finitions parfaites. Vous rentrez dans un intérieur neuf.</p>
          <span class="service-link">En savoir plus →</span>
        </div>
        <div class="service-card reveal">
          <div class="service-num">02</div>
          <h3>Peinture extérieure</h3>
          <p>Ravalement de façades, pignons, volets. Protection durable contre les intempéries et finition impeccable.</p>
          <span class="service-link">En savoir plus →</span>
        </div>
        <div class="service-card reveal">
          <div class="service-num">03</div>
          <h3>Décoration & finitions</h3>
          <p>Enduits décoratifs, effets de matière, béton ciré. Pour des espaces qui vous ressemblent.</p>
          <span class="service-link">En savoir plus →</span>
        </div>
        <div class="service-card reveal">
          <div class="service-num">04</div>
          <h3>Devis gratuit sous 48h</h3>
          <p>Déplacement gratuit et sans engagement. Nous évaluons votre projet et vous proposons un devis détaillé sous 48h.</p>
          <span class="service-link">Demander un devis →</span>
        </div>
      </div>
    </div>
  </section>

  <!-- RÉALISATIONS -->
  <section class="realisations" id="realisations">
    <div class="container">
      <span class="section-label">(réalisations)</span>
      <h2>Quelques chantiers<br/><em>récents</em></h2>
      <div class="gallery-grid">
        <div class="gallery-item large reveal">
          <div class="gallery-ph" style="background:linear-gradient(135deg,#d4c5b0,#b8a898)"></div>
          <div class="gallery-overlay"><span>Voir le chantier →</span></div>
        </div>
        <div class="gallery-item reveal">
          <div class="gallery-ph" style="background:linear-gradient(135deg,#c8b8a2,#a89880)"></div>
          <div class="gallery-overlay"><span>Voir →</span></div>
        </div>
        <div class="gallery-item reveal">
          <div class="gallery-ph" style="background:linear-gradient(135deg,#b8a88e,#988870)"></div>
          <div class="gallery-overlay"><span>Voir →</span></div>
        </div>
        <div class="gallery-item reveal">
          <div class="gallery-ph" style="background:linear-gradient(135deg,#ccc0ae,#b0a090)"></div>
          <div class="gallery-overlay"><span>Voir →</span></div>
        </div>
        <div class="gallery-item reveal">
          <div class="gallery-ph" style="background:linear-gradient(135deg,#beb0a0,#a09080)"></div>
          <div class="gallery-overlay"><span>Voir →</span></div>
        </div>
        <div class="gallery-item reveal">
          <div class="gallery-ph" style="background:linear-gradient(135deg,#d0c4b4,#b4a894)"></div>
          <div class="gallery-overlay"><span>Voir →</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- AVIS -->
  <section class="avis" id="avis">
    <div class="container">
      <span class="section-label light">(ils nous font confiance)</span>
      <h2>Ce que disent<br/><em>nos clients</em></h2>
      <div class="avis-grid">
        <div class="avis-card reveal">
          <div class="avis-stars">★★★★★</div>
          <p>"Travail impeccable, chantier propre, délais parfaitement respectés. Je n'hésiterai pas à refaire appel à Joly Peinture."</p>
          <div class="avis-author">
            <div class="avis-avatar">M</div>
            <div>
              <div class="avis-name">Marie O.</div>
              <div class="avis-city">Orléans · Avis Google</div>
            </div>
          </div>
        </div>
        <div class="avis-card reveal">
          <div class="avis-stars">★★★★★</div>
          <p>"Très sérieux et professionnel. L'équipe est ponctuelle, efficace et laisse le chantier propre. Je recommande vivement."</p>
          <div class="avis-author">
            <div class="avis-avatar">T</div>
            <div>
              <div class="avis-name">Thomas B.</div>
              <div class="avis-city">Saint-Jean-de-Braye · Avis Google</div>
            </div>
          </div>
        </div>
        <div class="avis-card reveal">
          <div class="avis-stars">★★★★★</div>
          <p>"Notre appartement est méconnaissable ! Superbe résultat, devis rapide et travail soigné. Merci Joly Peinture."</p>
          <div class="avis-author">
            <div class="avis-avatar">S</div>
            <div>
              <div class="avis-name">Sylvie M.</div>
              <div class="avis-city">Orléans · Avis Google</div>
            </div>
          </div>
        </div>
      </div>
      <div class="avis-cta">
        <a href="https://www.google.com/search?q=Joly+Peinture+Orléans" target="_blank" rel="noopener" class="btn-ghost-light">Voir les 90 avis Google →</a>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="faq" id="faq">
    <div class="container">
      <span class="section-label">(questions fréquentes)</span>
      <h2>Vous avez<br/><em>des questions ?</em></h2>
      <div class="faq-list">
        <div class="faq-item">
          <button class="faq-q">Intervenez-vous uniquement à Orléans ?<span class="faq-icon">+</span></button>
          <div class="faq-a"><p>Non, nous intervenons à Orléans et dans un rayon de 45 km : Saint-Jean-de-Braye, Fleury-les-Aubrais, Saran, Olivet, La Chapelle-Saint-Mesmin et toute l'agglomération orléanaise.</p></div>
        </div>
        <div class="faq-item">
          <button class="faq-q">Le devis est-il vraiment gratuit ?<span class="faq-icon">+</span></button>
          <div class="faq-a"><p>Oui, totalement gratuit et sans engagement. Nous nous déplaçons pour évaluer vos besoins et vous remettons un devis détaillé sous 48h.</p></div>
        </div>
        <div class="faq-item">
          <button class="faq-q">Quel est le délai d'intervention ?<span class="faq-icon">+</span></button>
          <div class="faq-a"><p>Le délai dépend de la taille du chantier et de notre planning. En général, nous pouvons intervenir sous 1 à 3 semaines après validation du devis.</p></div>
        </div>
        <div class="faq-item">
          <button class="faq-q">Protégez-vous les meubles et le sol ?<span class="faq-icon">+</span></button>
          <div class="faq-a"><p>Absolument. La protection de vos biens fait partie intégrante de notre façon de travailler. Meubles, sols et surfaces sont soigneusement protégés avant chaque intervention.</p></div>
        </div>
        <div class="faq-item">
          <button class="faq-q">Quels types de travaux réalisez-vous ?<span class="faq-icon">+</span></button>
          <div class="faq-a"><p>Peinture intérieure (murs, plafonds, boiseries), peinture extérieure et ravalement de façades, enduits décoratifs, pose de papier peint. Pour les particuliers comme pour les professionnels.</p></div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="contact" id="contact">
    <div class="container contact-inner">
      <div class="contact-left">
        <span class="section-label light">(contact)</span>
        <h2>Un projet ?<br/><em>Parlons-en.</em></h2>
        <p>Réponse sous 48h. Déplacement gratuit pour tout devis sur Orléans et alentours.</p>
        <a href="https://wa.me/33651294455?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20des%20travaux%20de%20peinture" target="_blank" rel="noopener" class="btn-whatsapp-big">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          Nous écrire sur WhatsApp
        </a>
        <div class="contact-infos">
          <a href="tel:0651294455" class="contact-info-item">
            <span class="ci-icon">📞</span>
            <div><div class="ci-label">Téléphone</div><div class="ci-value">06 51 29 44 55</div></div>
          </a>
          <a href="mailto:joly.peinture@hotmail.com" class="contact-info-item">
            <span class="ci-icon">✉️</span>
            <div><div class="ci-label">Email</div><div class="ci-value">joly.peinture@hotmail.com</div></div>
          </a>
          <div class="contact-info-item">
            <span class="ci-icon">📍</span>
            <div><div class="ci-label">Zone</div><div class="ci-value">Orléans · 45 km alentours</div></div>
          </div>
        </div>
      </div>
      <div class="contact-right">
        <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <div class="form-group">
            <label for="fname">Votre nom</label>
            <input type="text" id="fname" name="name" placeholder="Jean Dupont" required />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="ftel">Téléphone</label>
              <input type="tel" id="ftel" name="telephone" placeholder="06 00 00 00 00" required />
            </div>
            <div class="form-group">
              <label for="femail">Email</label>
              <input type="email" id="femail" name="email" placeholder="jean@email.fr" required />
            </div>
          </div>
          <div class="form-group">
            <label for="ftravaux">Type de travaux</label>
            <select id="ftravaux" name="travaux">
              <option value="">Sélectionner...</option>
              <option>Peinture intérieure</option>
              <option>Peinture extérieure / ravalement</option>
              <option>Décoration &amp; finitions</option>
              <option>Autre</option>
            </select>
          </div>
          <div class="form-group">
            <label for="fmsg">Votre message</label>
            <textarea id="fmsg" name="message" rows="4" placeholder="Décrivez votre projet..."></textarea>
          </div>
          <button type="submit" class="btn-primary full" id="submitBtn">Envoyer la demande</button>
          <div class="form-success" id="formSuccess" hidden>✅ Message envoyé ! Nous vous répondons sous 48h.</div>
        </form>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="container footer-top">
      <div class="footer-logo">
        <div class="logo-circle">
          <span class="logo-joly"><span class="logo-j">J</span>OLY</span>
          <span class="logo-peinture">PEINTURE</span>
        </div>
      </div>
      <nav class="footer-links">
        <a href="#services">Services</a>
        <a href="#realisations">Réalisations</a>
        <a href="#avis">Avis</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="footer-contact-info">
        <a href="tel:0651294455">06 51 29 44 55</a>
        <a href="mailto:joly.peinture@hotmail.com">joly.peinture@hotmail.com</a>
      </div>
    </div>
    <div class="footer-monumental" aria-hidden="true">JOLY</div>
    <div class="container footer-bottom">
      <span>© 2025 Joly Peinture · Orléans</span>
    </div>
  </footer>

  <!-- WHATSAPP FLOTTANT -->
  <a href="https://wa.me/33651294455" target="_blank" rel="noopener" class="whatsapp-float" title="WhatsApp">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
  </a>

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Verify:** Open `index.html` in browser. Page should render unstyled but structured — all 11 sections present, no broken HTML.

- [ ] **Commit:**
```bash
git add index.html
git commit -m "feat: complete HTML scaffold for Joly Peinture redesign"
```

---

## Task 2 — Complete style.css

**Files:** Modify `style.css` (full rewrite)

- [ ] **Replace style.css with the following:**

```css
/* ===== RESET & BASE ===== */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg: #F8F6F2;
  --beige: #E8E0D5;
  --dark: #2C2C2C;
  --darker: #1a1a1a;
  --accent: #C0392B;
  --accent-h: #a93226;
  --gold: #F4B400;
  --white: #ffffff;
  --muted: #888;
  --border: #E5E0D8;
  --radius: 12px;
  --wa: #25D366;
}

html { scroll-behavior: smooth; }
body { font-family: 'Inter', sans-serif; background: var(--bg); color: var(--dark); line-height: 1.6; overflow-x: hidden; }

.container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

h1, h2, h3 { font-family: 'Playfair Display', serif; line-height: 1.15; }
h1 { font-size: clamp(48px, 6vw, 80px); }
h2 { font-size: clamp(36px, 4vw, 56px); }
h3 { font-size: 20px; }
em { font-style: italic; color: var(--accent); }
a { text-decoration: none; color: inherit; }

/* ===== SECTION LABEL (cursive italique style Agero) ===== */
.section-label {
  display: block;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 18px;
  color: var(--accent);
  margin-bottom: 16px;
}
.section-label.light { color: rgba(255,255,255,0.45); }

/* ===== SCROLL REVEAL ===== */
.reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ===== BUTTONS ===== */
.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--accent); color: white;
  padding: 14px 28px; border-radius: 8px;
  font-weight: 600; font-size: 15px; border: none; cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}
.btn-primary:hover { background: var(--accent-h); transform: translateY(-1px); }
.btn-primary.full { width: 100%; justify-content: center; }

.btn-outline {
  display: inline-flex; align-items: center; gap: 8px;
  background: transparent; color: var(--dark);
  padding: 14px 28px; border-radius: 8px;
  font-weight: 600; font-size: 15px;
  border: 2px solid var(--border); cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}
.btn-outline:hover { border-color: var(--dark); background: rgba(44,44,44,0.04); }

.btn-ghost-light {
  display: inline-flex; align-items: center;
  color: rgba(255,255,255,0.7); font-weight: 600; font-size: 14px;
  border: 2px solid rgba(255,255,255,0.25); padding: 10px 24px; border-radius: 8px;
  transition: all 0.2s;
}
.btn-ghost-light:hover { color: white; border-color: white; }

/* ===== LOGO ===== */
.logo-circle {
  width: 54px; height: 54px;
  background: white; border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.15);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 2px;
  flex-shrink: 0;
}
.logo-joly {
  font-family: 'Playfair Display', serif; font-weight: 800;
  font-size: 13px; letter-spacing: 2px; color: var(--dark); line-height: 1;
}
.logo-j { color: var(--accent); }
.logo-peinture {
  font-family: 'Inter', sans-serif; font-size: 5px;
  letter-spacing: 3px; font-weight: 600; color: var(--muted);
  text-transform: uppercase; line-height: 1;
}

/* ===== HEADER ===== */
#header {
  position: sticky; top: 0; z-index: 100;
  background: var(--dark);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  transition: box-shadow 0.3s;
}
#header.scrolled { box-shadow: 0 4px 24px rgba(0,0,0,0.4); }

.header-inner {
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 14px; padding-bottom: 14px; gap: 24px;
}
.logo-link { display: flex; }
.header-nav { display: flex; gap: 28px; }
.header-nav a { color: rgba(255,255,255,0.65); font-size: 14px; font-weight: 500; transition: color 0.2s; }
.header-nav a:hover { color: white; }

.header-ctas { display: flex; gap: 10px; align-items: center; }

.btn-wa-header {
  display: flex; align-items: center; gap: 6px;
  background: var(--wa); color: white;
  padding: 9px 16px; border-radius: 8px;
  font-weight: 600; font-size: 13px;
  transition: background 0.2s;
}
.btn-wa-header:hover { background: #1ebe5a; }

.btn-tel-header {
  display: flex; align-items: center; gap: 6px;
  background: rgba(255,255,255,0.1); color: white;
  padding: 9px 16px; border-radius: 8px;
  font-weight: 600; font-size: 13px; border: 1px solid rgba(255,255,255,0.12);
  transition: background 0.2s;
}
.btn-tel-header:hover { background: rgba(255,255,255,0.18); }

/* ===== HERO ===== */
.hero { background: var(--bg); padding: 80px 0 96px; }

.hero-inner {
  display: grid; grid-template-columns: 1fr auto;
  gap: 60px; align-items: center;
}

.hero-pill {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(192,57,43,0.1); color: var(--accent);
  font-size: 13px; font-weight: 600;
  padding: 7px 16px; border-radius: 20px;
  border: 1px solid rgba(192,57,43,0.2);
  margin-bottom: 24px;
}
.hero-pill-dot {
  width: 7px; height: 7px; background: var(--wa);
  border-radius: 50%; flex-shrink: 0;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.85); }
}

.hero-title { margin-bottom: 20px; color: var(--dark); }

.hero-img-pill {
  display: inline-flex; align-items: center; justify-content: center;
  width: 72px; height: 54px; border-radius: 40px;
  background: var(--beige); border: 2px solid var(--border);
  font-size: 28px; vertical-align: middle; margin: 0 6px;
}

.hero-sub {
  color: #666; font-size: 17px; max-width: 500px;
  margin-bottom: 32px; line-height: 1.7;
}
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }

.hero-card {
  background: white; border-radius: 20px;
  padding: 32px 36px; text-align: center;
  min-width: 200px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  border: 1px solid var(--border);
}
.hero-card-stars { color: var(--gold); font-size: 22px; letter-spacing: 2px; margin-bottom: 8px; }
.hero-card-score { font-family: 'Playfair Display', serif; font-size: 56px; font-weight: 800; color: var(--dark); line-height: 1; }
.hero-card-score span { font-size: 24px; color: var(--muted); }
.hero-card-count { font-size: 13px; color: var(--muted); margin-top: 4px; margin-bottom: 16px; }
.hero-card-badge {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  background: #f5f5f5; padding: 8px 12px; border-radius: 8px;
  font-size: 11px; font-weight: 600; color: #555;
}

/* ===== DOUBLE MARQUEE ===== */
.marquee-wrapper {
  position: relative; height: 170px; overflow: hidden;
  background: var(--bg);
}
.marquee-band {
  position: absolute; width: 130%; left: -15%;
  padding: 14px 0; overflow: hidden;
}
.marquee-band.red { background: var(--accent); top: 28px; transform: rotate(-2.5deg); }
.marquee-band.dark { background: var(--dark); top: 92px; transform: rotate(2.5deg); }

.marquee-track {
  display: flex; gap: 32px; white-space: nowrap;
  width: max-content;
  animation: marquee-fwd 22s linear infinite;
}
.marquee-track.reverse { animation: marquee-rev 22s linear infinite; }

.marquee-track span {
  font-size: 15px; font-weight: 600; color: white; letter-spacing: 0.5px;
}
.msep { color: rgba(255,255,255,0.5) !important; }

@keyframes marquee-fwd {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes marquee-rev {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

/* ===== À PROPOS ===== */
.about { padding: 96px 0; background: var(--beige); }
.about-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.about-text-col h2 { margin-bottom: 20px; }
.about-text-col > p { color: #666; font-size: 16px; line-height: 1.8; margin-bottom: 48px; }

.about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.stat-item { background: white; border-radius: var(--radius); padding: 24px; border: 1px solid var(--border); }
.stat-num { font-family: 'Playfair Display', serif; font-size: 48px; font-weight: 800; color: var(--dark); line-height: 1; }
.stat-star { color: var(--gold); }
.stat-label { font-size: 13px; color: var(--muted); margin-top: 4px; font-weight: 500; }

.about-img { border-radius: 16px; overflow: hidden; height: 400px; }
.about-placeholder {
  width: 100%; height: 100%;
  background: linear-gradient(135deg, var(--beige), #d4c8b8);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 12px; color: #999; font-size: 14px; font-weight: 500;
}
.placeholder-icon { font-size: 40px; }

/* ===== SERVICES ===== */
.services { padding: 96px 0; background: var(--bg); }
.services h2 { margin-bottom: 48px; }

.services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }

.service-card {
  background: white; border: 1px solid var(--border);
  border-radius: var(--radius); padding: 36px 32px;
  border-left: 4px solid transparent;
  transition: border-left-color 0.2s, transform 0.2s, box-shadow 0.2s;
  position: relative;
}
.service-card:hover {
  border-left-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.08);
}
.service-num {
  font-family: 'Playfair Display', serif; font-size: 56px; font-weight: 800;
  color: var(--border); line-height: 1; margin-bottom: 16px;
}
.service-card h3 { margin-bottom: 10px; font-size: 20px; }
.service-card p { font-size: 14px; color: #666; line-height: 1.8; margin-bottom: 20px; }
.service-link { font-size: 13px; font-weight: 600; color: var(--accent); }

/* ===== RÉALISATIONS ===== */
.realisations { padding: 96px 0; background: var(--beige); }
.realisations h2 { margin-bottom: 48px; }

.gallery-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 240px); gap: 12px;
}
.gallery-item { border-radius: 10px; overflow: hidden; position: relative; cursor: pointer; }
.gallery-item.large { grid-column: span 2; grid-row: span 2; }

.gallery-ph { width: 100%; height: 100%; transition: transform 0.4s ease; }
.gallery-item:hover .gallery-ph { transform: scale(1.04); }

.gallery-overlay {
  position: absolute; inset: 0;
  background: rgba(44,44,44,0.55);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.3s;
}
.gallery-overlay span { color: white; font-weight: 600; font-size: 14px; }
.gallery-item:hover .gallery-overlay { opacity: 1; }

/* ===== AVIS ===== */
.avis { padding: 96px 0; background: var(--dark); }
.avis h2 { color: white; margin-bottom: 48px; }

.avis-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 40px; }
.avis-card {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius); padding: 28px;
}
.avis-stars { color: var(--gold); font-size: 16px; margin-bottom: 14px; letter-spacing: 2px; }
.avis-card p { font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.8; margin-bottom: 20px; font-style: italic; }
.avis-author { display: flex; align-items: center; gap: 12px; }
.avis-avatar {
  width: 36px; height: 36px; background: rgba(255,255,255,0.12);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 14px; color: white; flex-shrink: 0;
}
.avis-name { font-weight: 600; font-size: 13px; color: white; }
.avis-city { font-size: 11px; color: rgba(255,255,255,0.4); margin-top: 2px; }
.avis-cta { text-align: center; }

/* ===== FAQ ===== */
.faq { padding: 96px 0; background: var(--bg); }
.faq h2 { margin-bottom: 48px; }

.faq-list { display: flex; flex-direction: column; gap: 0; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }

.faq-q {
  width: 100%; display: flex; align-items: center; justify-content: space-between;
  padding: 22px 28px; background: white; border: none; cursor: pointer;
  font-size: 16px; font-weight: 600; color: var(--dark); text-align: left;
  border-bottom: 1px solid var(--border); transition: background 0.2s;
}
.faq-q:hover { background: var(--bg); }
.faq-item:last-child .faq-q { border-bottom: none; }
.faq-item.open .faq-q { background: var(--bg); color: var(--accent); }

.faq-icon { font-size: 20px; font-weight: 300; color: var(--muted); transition: transform 0.3s, color 0.2s; flex-shrink: 0; }
.faq-item.open .faq-icon { transform: rotate(45deg); color: var(--accent); }

.faq-a {
  max-height: 0; overflow: hidden;
  transition: max-height 0.35s ease, padding 0.35s ease;
  background: var(--bg); border-bottom: 1px solid var(--border);
}
.faq-item:last-child .faq-a { border-bottom: none; }
.faq-item.open .faq-a { max-height: 200px; padding: 0 28px 22px; }
.faq-a p { font-size: 14px; color: #666; line-height: 1.8; padding-top: 16px; }

/* ===== CONTACT ===== */
.contact { padding: 96px 0; background: var(--dark); }
.contact-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }

.contact-left h2 { color: white; margin-bottom: 16px; }
.contact-left > p { color: rgba(255,255,255,0.55); font-size: 15px; margin-bottom: 32px; }

.btn-whatsapp-big {
  display: flex; align-items: center; gap: 10px;
  background: var(--wa); color: white;
  padding: 16px 24px; border-radius: 10px;
  font-weight: 700; font-size: 15px; margin-bottom: 32px;
  transition: background 0.2s, transform 0.1s;
  width: fit-content;
}
.btn-whatsapp-big:hover { background: #1ebe5a; transform: translateY(-1px); }

.contact-infos { display: flex; flex-direction: column; gap: 10px; }
.contact-info-item {
  display: flex; align-items: center; gap: 14px;
  padding: 14px 18px; background: rgba(255,255,255,0.05);
  border-radius: 10px; border: 1px solid rgba(255,255,255,0.07);
  transition: background 0.2s;
}
.contact-info-item:hover { background: rgba(255,255,255,0.09); }
.ci-icon { font-size: 18px; }
.ci-label { font-size: 10px; color: rgba(255,255,255,0.35); font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }
.ci-value { color: white; font-weight: 600; font-size: 14px; margin-top: 1px; }

/* FORMULAIRE */
.contact-form {
  background: white; border-radius: 16px; padding: 32px;
  display: flex; flex-direction: column; gap: 16px;
}
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
label { font-size: 12px; font-weight: 700; color: var(--dark); text-transform: uppercase; letter-spacing: 0.5px; }
input, select, textarea {
  padding: 12px 14px; border: 1.5px solid var(--border);
  border-radius: 8px; font-size: 14px; font-family: 'Inter', sans-serif;
  color: var(--dark); background: var(--bg); outline: none;
  transition: border-color 0.2s, background 0.2s;
}
input:focus, select:focus, textarea:focus { border-color: var(--accent); background: white; }
textarea { resize: vertical; }
.form-success { text-align: center; color: #2e7d32; font-weight: 600; font-size: 14px; padding: 12px; background: #f1f8f1; border-radius: 8px; }

/* ===== FOOTER ===== */
footer { background: var(--darker); overflow: hidden; }

.footer-top {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 20px; padding-top: 40px; padding-bottom: 32px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.footer-logo .logo-circle { border-color: rgba(255,255,255,0.1); }

.footer-links { display: flex; gap: 24px; }
.footer-links a { color: rgba(255,255,255,0.45); font-size: 13px; font-weight: 500; transition: color 0.2s; }
.footer-links a:hover { color: white; }

.footer-contact-info { display: flex; flex-direction: column; gap: 4px; text-align: right; }
.footer-contact-info a { color: rgba(255,255,255,0.45); font-size: 13px; transition: color 0.2s; }
.footer-contact-info a:hover { color: white; }

.footer-monumental {
  font-family: 'Playfair Display', serif; font-weight: 800;
  font-size: clamp(80px, 16vw, 200px);
  color: rgba(255,255,255,0.04);
  text-align: center; line-height: 0.85;
  user-select: none; letter-spacing: -4px;
  padding: 16px 0;
}

.footer-bottom {
  display: flex; justify-content: center; padding-bottom: 24px;
}
.footer-bottom span { font-size: 12px; color: rgba(255,255,255,0.2); }

/* ===== WHATSAPP FLOTTANT ===== */
.whatsapp-float {
  position: fixed; bottom: 28px; right: 28px;
  width: 58px; height: 58px; background: var(--wa); border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 20px rgba(37,211,102,0.45); z-index: 999;
  transition: transform 0.2s, box-shadow 0.2s;
  animation: wa-bounce 3s ease-in-out 2s infinite;
}
.whatsapp-float:hover { transform: scale(1.1); box-shadow: 0 8px 30px rgba(37,211,102,0.55); animation: none; }

@keyframes wa-bounce {
  0%, 70%, 100% { transform: translateY(0); }
  80% { transform: translateY(-8px); }
  90% { transform: translateY(-4px); }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .header-nav { display: none; }
  .about-inner { grid-template-columns: 1fr; }
  .about-img { height: 280px; }
  .services-grid { grid-template-columns: 1fr; }
  .avis-grid { grid-template-columns: 1fr; }
  .contact-inner { grid-template-columns: 1fr; gap: 48px; }
}

@media (max-width: 768px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-card { display: none; }
  .hero-actions { flex-direction: column; }
  .hero-actions .btn-outline { justify-content: center; }
  .gallery-grid { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
  .gallery-item.large { grid-column: span 2; height: 220px; }
  .gallery-item { height: 160px; }
  .form-row { grid-template-columns: 1fr; }
  .about-stats { grid-template-columns: 1fr 1fr; }
  .btn-wa-header span { display: none; }
  .footer-top { flex-direction: column; align-items: flex-start; }
  .footer-contact-info { text-align: left; }
}

@media (max-width: 480px) {
  .hero-pill { font-size: 11px; }
  .marquee-wrapper { height: 150px; }
  .marquee-band.red { top: 20px; }
  .marquee-band.dark { top: 82px; }
  .gallery-grid { grid-template-columns: 1fr; }
  .gallery-item.large { grid-column: span 1; height: 200px; }
  .gallery-item { height: 160px; }
  .faq-q { padding: 18px 20px; font-size: 14px; }
  .faq-item.open .faq-a { padding: 0 20px 18px; }
}
```

- [ ] **Verify:** Reload `index.html`. All sections should be styled. Check: header dark sticky, hero with pill, marquee bands crossed, cards numbered 01-04, footer with large "JOLY" watermark.

- [ ] **Commit:**
```bash
git add style.css
git commit -m "feat: complete CSS redesign inspired by Agero template"
```

---

## Task 3 — Complete script.js

**Files:** Modify `script.js` (full rewrite)

- [ ] **Replace script.js with the following:**

```javascript
// Header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObs.observe(el));

// Animated counters
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const decimals = parseInt(el.dataset.decimal) || 0;
  const duration = 1400;
  const start = performance.now();
  (function update(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = decimals ? (target * eased).toFixed(decimals) : Math.floor(target * eased);
    if (p < 1) requestAnimationFrame(update);
  })(start);
}

const statEls = document.querySelectorAll('.stat-num');
const statObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      statObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
statEls.forEach(el => statObs.observe(el));

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Contact form (Formspree async)
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.textContent = 'Envoi en cours…';
    submitBtn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.reset();
        formSuccess.hidden = false;
        submitBtn.textContent = 'Envoyé ✓';
      } else {
        throw new Error();
      }
    } catch {
      submitBtn.textContent = 'Envoyer la demande';
      submitBtn.disabled = false;
      alert('Erreur d\'envoi. Appelez-nous : 06 51 29 44 55');
    }
  });
}
```

- [ ] **Verify:** Reload page. Check: scroll down → sections fade in, stats animate on enter viewport (4.9, 90, 10, 45), FAQ items toggle on click, header gets shadow after scrolling 50px.

- [ ] **Commit:**
```bash
git add script.js
git commit -m "feat: add scroll reveal, animated counters, FAQ accordion, async form"
```

---

## Task 4 — Visual verification (Playwright)

- [ ] **Open the site in Playwright and take screenshot of full page:**

```bash
# From the project directory, open index.html in default browser
open index.html
```

Or use Playwright to navigate to `file:///path/to/joly-peinture/index.html` and take a full-page screenshot.

- [ ] **Check each section visually:**
  - Header: dark, logo circle with red J visible, WhatsApp + tel buttons
  - Hero: large Playfair title, pill with pulsing dot, 4.9 card on right
  - Marquee: two crossing colored bands with scrolling text
  - About: stats counting up, warm beige background, placeholder
  - Services: numbered 01–04 cards with red left border on hover
  - Réalisations: beige grid with gradient placeholders
  - Avis: dark section, 3 cards with yellow stars
  - FAQ: accordion opens/closes smoothly
  - Contact: dark, large WhatsApp green button, white form card
  - Footer: "JOLY" in massive barely-visible watermark text

- [ ] **Final commit:**
```bash
git add -A
git commit -m "feat: complete Joly Peinture site redesign — Agero-inspired"
git push
```

---

## Self-review

**Spec coverage check:**
- ✅ Logo CSS avec J rouge et cercle → logo-circle, logo-j, logo-peinture
- ✅ Header sticky + WhatsApp + tel → header-inner avec btn-wa-header + btn-tel-header
- ✅ Hero pill pulsant + grande typo → hero-pill + clamp(48px,6vw,80px)
- ✅ Double marquee croisé → marquee-band.red + marquee-band.dark avec rotate ±2.5deg
- ✅ Section "(à propos)" en cursive → .section-label Playfair italic
- ✅ Stats animées → IntersectionObserver + animateCounter()
- ✅ Services 01–04 → .service-num 56px Playfair
- ✅ Réalisations avec overlay → .gallery-overlay opacity 0→1
- ✅ Avis dark → .avis background var(--dark)
- ✅ FAQ accordéon → max-height transition + JS toggle
- ✅ Contact WhatsApp prioritaire + Formspree → btn-whatsapp-big + async fetch
- ✅ Footer JOLY monumental → .footer-monumental clamp(80px,16vw,200px)
- ✅ WhatsApp flottant bounce → @keyframes wa-bounce
- ✅ Responsive mobile → media queries 900/768/480px
- ✅ Schema.org LocalBusiness → JSON-LD dans head
- ✅ Scroll reveal → IntersectionObserver + .reveal/.visible

**Placeholder restant intentionnel:** `YOUR_FORM_ID` dans le form action — à remplacer après création du compte Formspree.
