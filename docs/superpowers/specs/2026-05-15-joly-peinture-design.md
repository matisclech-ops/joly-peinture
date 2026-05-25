# Spec — Joly Peinture Site Vitrine

**Date :** 2026-05-15  
**Stack :** HTML + CSS + JS vanilla, Google Fonts, Formspree  
**Inspiration :** Template Agero (agero.framer.website)

---

## 1. Contexte & objectif

Site one-pager pour Joly Peinture, artisan peintre à Orléans. Acquisition quasi 100% Google — le site sert de page de confiance pour les visiteurs venant de la fiche Google Business (⭐ 4.9 · 90 avis). Clientèle : particuliers (80%) + quelques pros.

**Objectif unique :** convertir la visite en demande de devis (appel téléphonique ou WhatsApp).

---

## 2. Fichiers

```
joly-peinture/
├── index.html
├── style.css
└── script.js
```

Pas de dépendances npm, pas de build. Déployable Vercel par drag & drop.

---

## 3. Palette & typographie

### Couleurs (issues du logo)
| Variable | Valeur | Usage |
|---|---|---|
| `--bg` | `#F8F6F2` | Fond principal crème |
| `--beige` | `#E8E0D5` | Sections alternées |
| `--dark` | `#2C2C2C` | Header, sections dark, texte |
| `--darker` | `#1a1a1a` | Footer |
| `--accent` | `#C0392B` | Goutte rouge logo, CTA, accents |
| `--accent-hover` | `#a93226` | Hover boutons |
| `--gold` | `#F4B400` | Étoiles Google |
| `--white` | `#ffffff` | Backgrounds clairs |
| `--muted` | `#888` | Textes secondaires |
| `--border` | `#E5E0D8` | Bordures subtiles |

### Typographie
- **Titres :** Playfair Display (700, 800) — Google Fonts
- **Corps :** Inter (400, 500, 600) — Google Fonts
- **Titres hero :** `clamp(48px, 6vw, 80px)` — plus grand que la v1
- **H2 sections :** `clamp(36px, 4vw, 56px)`

---

## 4. Logo (CSS/SVG)

Recréation fidèle du logo Joly Peinture :
- Cercle blanc avec contour `#E8E0D5` léger
- "J" en rouge `#C0392B` + "OLY" en Playfair Display bold noir
- Goutte/point rouge positionnée sur le J (pseudo-element ou SVG inline)
- "PEINTURE" en dessous : Inter 9px, letter-spacing 5px, gris clair
- Utilisé en header (version blanc sur fond dark) et footer

```html
<div class="logo">
  <div class="logo-circle">
    <span class="logo-joly"><span class="logo-j">J</span>OLY</span>
    <span class="logo-peinture">PEINTURE</span>
  </div>
</div>
```

---

## 5. Structure HTML — sections dans l'ordre

### 5.1 Header sticky
- Fond `#2C2C2C`
- Logo SVG à gauche
- Droite : `<a href="tel:...">` + bouton WhatsApp vert
- `position: sticky; top: 0; z-index: 100`
- Au scroll (>50px) : légère ombre `box-shadow`

### 5.2 Top pill (dans le hero)
- Pill animé vert pulsant : `⭐ 4.9 · 90 avis Google · Devis gratuit sans engagement`
- Style : fond `rgba(192,57,43,0.1)`, texte accent, bord arrondi 20px
- Petite animation pulse sur le point vert

### 5.3 Hero
- Fond `#F8F6F2`
- Titre Playfair Display bold, très grand : **"Votre artisan peintre à Orléans"** — le mot "artisan" en italique rouge
- Image pill inline dans le titre : rectangle arrondi 60×60px fond `#E8E0D5` avec une icône 🖌️ (placeholder jusqu'à vraie photo)
- Sous-titre : "Peinture intérieure, extérieure et décoration. Devis gratuit sous 48h."
- 2 CTA : `[Demander un devis]` (rouge) + `[Nous appeler]` (outline dark)
- Card 4.9★ flottante à droite : fond blanc, shadow, étoiles jaunes, badge Google

### 5.4 Double marquee croisé (inspiré Agero)
- 2 banderoles qui se croisent en X, légèrement inclinées
- Banderole 1 : fond `#C0392B`, texte blanc → "Peinture intérieure ✦ Peinture extérieure ✦ Devis gratuit ✦ Orléans ✦"
- Banderole 2 : fond `#2C2C2C`, texte blanc → "4.9 Google ✦ 90 avis ✦ 10 ans d'expérience ✦ Finitions soignées ✦"
- Animation `marquee` CSS infinie, direction opposée sur chaque bande
- `transform: rotate(-3deg)` et `rotate(3deg)` respectivement

### 5.5 Section "(à propos)" — style Agero
- Label `(à propos)` en cursive italique rouge — font: `Georgia italic` ou `Playfair italic`
- Titre bold : **"Artisan peintre depuis plus de 10 ans à Orléans"**
- Texte chaleureux 2-3 lignes : soin, propreté, fidélité des clients
- 4 stats flottants en grille : 4.9★ / 90 avis / 10 ans / 45 km
- Placeholder image pleine largeur : rectangle `#E8E0D5` avec gradient + ratio 16/9, texte "Photo artisan" centré

### 5.6 Services
- Fond `#F8F6F2`
- Label `(nos prestations)` cursive rouge
- 4 cards avec numéro style Agero (01, 02, 03, 04) en grand gris clair
- Cards : numéro + titre + description + mini CTA "En savoir plus →"
  1. Peinture intérieure
  2. Peinture extérieure
  3. Décoration & finitions
  4. Devis gratuit sous 48h
- Hover : border-left `4px solid #C0392B`, légère translation

### 5.7 Réalisations
- Fond `#E8E0D5`
- Label `(réalisations)` cursive rouge
- Titre : "Quelques chantiers récents"
- Grille 3×2 avec 6 placeholders colorés (dégradés beige/brun)
- Item large (span 2) en position [0,0]
- Hover : overlay dark semi-transparent + "Voir le chantier →"

### 5.8 Avis clients
- Fond `#2C2C2C` (section dark)
- Label `(ils nous font confiance)` cursive rouge
- Titre blanc : "Ce que disent nos clients"
- 3 cards sur fond `rgba(255,255,255,0.05)`, border `rgba(255,255,255,0.08)`
  - Marie O. — Orléans : "Travail impeccable, chantier propre, délais respectés."
  - Thomas B. — Saint-Jean-de-Braye : "Je recommande vivement, très sérieux."  
  - Sylvie M. — Orléans : "Notre appartement est méconnaissable, superbe résultat."
- Bouton ghost : "Voir les 90 avis Google →"

### 5.9 FAQ
- Fond `#F8F6F2`
- Label `(questions fréquentes)` cursive rouge
- 5 questions en accordéon :
  1. Intervenez-vous uniquement à Orléans ?
  2. Combien coûte un devis ?
  3. Quel est le délai d'intervention ?
  4. Quels types de travaux réalisez-vous ?
  5. Comment se passe le chantier ?
- Accordéon JS : clic sur question → toggle réponse, icône `+` / `×`

### 5.10 Contact
- Fond `#2C2C2C`
- Label `(contact)` cursive rouge
- Titre blanc bold : "Un projet ? Parlons-en."
- Colonne gauche : WhatsApp CTA prioritaire (grand bouton vert) + tel + email + zone
- Colonne droite : formulaire Formspree (nom, tel, email, type travaux, message)
- Formulaire : fond blanc, border-radius 16px, padding 32px

### 5.11 Footer
- Fond `#1a1a1a`
- **"JOLY" en 80–100px Playfair Display bold** — style Agero, centré, couleur `rgba(255,255,255,0.06)` (très discret, watermark)
- Au-dessus : logo compact + liens de navigation + infos légales
- Copyright : `© 2025 Joly Peinture · Orléans`

---

## 6. Bouton WhatsApp flottant
- Position fixed bottom-right
- Fond `#25D366`, icône SVG WhatsApp blanc
- Animation : bounce léger toutes les 3s pour attirer l'attention
- `z-index: 999`

---

## 7. Animations JS (script.js)

- **Scroll reveal** : sections apparaissent en `opacity 0 → 1 + translateY(30px → 0)` via `IntersectionObserver`
- **Compteurs animés** : chiffres 0 → valeur finale dans la trust bar (4.9, 90, 10, 45) quand ils entrent dans le viewport
- **Header scroll** : `box-shadow` apparaît après 50px de scroll
- **Accordéon FAQ** : toggle classe `open`, animation hauteur fluide
- **Formulaire** : validation basique + message de succès après envoi Formspree

---

## 8. Formspree

- `action` du formulaire : `https://formspree.io/f/YOUR_FORM_ID`
- Champs : nom, téléphone, email, type-travaux, message
- Redirection après envoi : message inline (pas de redirect page)

---

## 9. Responsive (mobile-first)

- `< 768px` : colonne unique partout
- Header : logo + seul bouton tel (pas WhatsApp)
- Hero : card 4.9★ cachée, affichée en pill compact sous le titre
- Marquee : vitesse réduite, même effet
- Galerie : 2 colonnes
- Contact : colonne unique, WhatsApp en premier
- FAQ : inchangé (fonctionne bien sur mobile)

---

## 10. SEO minimal

- `<title>` : "Joly Peinture — Artisan peintre à Orléans · Devis gratuit"
- `<meta description>` : "Artisan peintre professionnel à Orléans. Peinture intérieure, extérieure et décoration. ⭐ 4.9/5 · 90 avis Google. Devis gratuit sous 48h."
- `<meta og:*>` pour partage social
- Schema.org `LocalBusiness` JSON-LD inline

---

## 11. Ce qui ne change pas vs v1

- Couleurs palette identiques
- Formspree pour le formulaire
- Structure one-pager
- Polices Google Fonts (Playfair + Inter)

## 12. Ce qui change vs v1

- Titres beaucoup plus grands (×1.5)
- Double marquee croisé (nouveau)
- Labels de section en cursive italique rouge (nouveau)
- JOLY monumentale en footer (nouveau)
- Image pill dans le titre hero (placeholder)
- Section FAQ (nouvelle)
- Logo recréé avec cercle + goutte rouge correctement stylisée
- Avis clients sur fond dark (v1 : fond clair)
- Stats animées au scroll
