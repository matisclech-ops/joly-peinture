import { useEffect } from "react";

export type LightboxItem = {
  title: string;
  description?: string;
  beforeImage?: string;
  afterImage?: string;
  image?: string;
};

export default function LightboxModal({ item, onClose }: { item: LightboxItem | null; onClose: () => void }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [item, onClose]);

  if (!item) return null;

  const hasPair = !!(item.beforeImage && item.afterImage);

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Fermer">
          ×
        </button>
        <h3 id="lightbox-title" className="lightbox-title">
          {item.title}
        </h3>

        {hasPair ? (
          <div className="lightbox-pair">
            <figure className="lightbox-fig">
              <img src={item.beforeImage} alt={`${item.title} — avant`} />
              <figcaption className="lightbox-badge lightbox-badge-before">AVANT</figcaption>
            </figure>
            <figure className="lightbox-fig">
              <img src={item.afterImage} alt={`${item.title} — après`} />
              <figcaption className="lightbox-badge lightbox-badge-after">APRÈS</figcaption>
            </figure>
          </div>
        ) : item.image ? (
          <div className="lightbox-single">
            <img src={item.image} alt={item.title} />
          </div>
        ) : null}

        {item.description && <p className="lightbox-desc">{item.description}</p>}

        <a href="#contact" onClick={onClose} className="lightbox-cta">
          Demander un devis pour un chantier similaire →
        </a>
      </div>
    </div>
  );
}
