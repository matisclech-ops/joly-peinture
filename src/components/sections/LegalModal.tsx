import { useEffect } from "react";

function Todo({ children }: { children: React.ReactNode }) {
  return <span className="legal-todo">[{children}]</span>;
}

export default function LegalModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="legal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="legal-title">
      <div className="legal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="legal-close" onClick={onClose} aria-label="Fermer">
          ×
        </button>
        <h2 id="legal-title" className="legal-h2">
          Mentions légales
        </h2>

        <div className="legal-content">
          <section>
            <h3>1. Éditeur du site</h3>
            <p>
              <strong>Joly Peinture</strong> (nom commercial)<br />
              Entreprise individuelle — micro-entrepreneur<br />
              Représentant légal : <Todo>Prénom NOM — à confirmer</Todo>
              <br />
              Adresse : <Todo>adresse postale du siège — à confirmer</Todo>
              <br />
              SIRET : <Todo>SIRET — à confirmer</Todo>
              <br />
              Code NAF : 43.34Z (Travaux de peinture et vitrerie)<br />
              TVA non applicable, article 293 B du Code général des impôts (franchise en base).<br />
              Téléphone : <a href="tel:+33651294455">06 51 29 44 55</a>
              <br />
              Email : <a href="mailto:joly.peinture@hotmail.com">joly.peinture@hotmail.com</a>
              <br />
              Directeur de la publication : <Todo>Prénom NOM — à confirmer</Todo>
            </p>
          </section>

          <section>
            <h3>2. Hébergement</h3>
            <p>
              Vercel Inc.<br />
              440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
                vercel.com
              </a>
            </p>
          </section>

          <section>
            <h3>3. Propriété intellectuelle</h3>
            <p>
              L'ensemble des contenus du présent site (textes, visuels, logo) est protégé par le droit d'auteur
              et demeure la propriété exclusive de Joly Peinture. Toute reproduction, représentation ou
              exploitation, totale ou partielle, sans autorisation écrite préalable est interdite et constitue
              une contrefaçon sanctionnée par les articles L335-2 et suivants du Code de la propriété
              intellectuelle.
            </p>
          </section>

          <section>
            <h3>4. Données personnelles (RGPD)</h3>
            <p>
              Les données collectées via le formulaire de contact (nom, téléphone, email, type de travaux,
              message) sont utilisées uniquement pour traiter votre demande de devis. Elles ne sont jamais
              cédées à des tiers. Elles sont conservées pendant la durée nécessaire au traitement de la demande,
              puis archivées pendant la durée de prescription légale applicable.
            </p>
            <p>
              Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi « Informatique et Libertés » modifiée,
              vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et
              de portabilité de vos données. Pour exercer ces droits, contactez :{" "}
              <a href="mailto:joly.peinture@hotmail.com">joly.peinture@hotmail.com</a>.
            </p>
            <p>
              Vous pouvez également introduire une réclamation auprès de la CNIL —{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
                www.cnil.fr
              </a>
              .
            </p>
          </section>

          <section>
            <h3>5. Cookies et services tiers</h3>
            <p>
              Ce site n'utilise aucun cookie de mesure d'audience ni cookie publicitaire. Les polices d'écriture
              sont chargées depuis Google Fonts (fonts.googleapis.com), ce qui peut occasionner un transfert de
              votre adresse IP à Google.
            </p>
          </section>

          <section>
            <h3>6. Assurance professionnelle</h3>
            <p>
              Joly Peinture est couvert par une assurance responsabilité civile professionnelle ainsi qu'une
              garantie décennale souscrite auprès de <Todo>compagnie d'assurance — à confirmer</Todo>, pour les
              chantiers réalisés en France métropolitaine.
            </p>
          </section>

          <section>
            <h3>7. Médiation de la consommation</h3>
            <p>
              Conformément à l'article L612-1 du Code de la consommation, en cas de litige non résolu à
              l'amiable avec l'entreprise, le consommateur peut recourir gratuitement au service de médiation
              suivant :
            </p>
            <p>
              <Todo>Nom du médiateur de la consommation — à confirmer</Todo>
              <br />
              <Todo>Adresse postale et site web du médiateur — à confirmer</Todo>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
