import { useState } from "react";
import { WhatsAppIcon } from "@/components/icons";

const FORM_ACTION = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (FORM_ACTION.includes("YOUR_FORM_ID")) {
      setStatus("unconfigured");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_ACTION, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const btnLabel = status === "sending" ? "Envoi en cours…" : status === "sent" ? "Envoyé ✓" : "Envoyer la demande";

  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <div className="contact-left">
          <span className="section-label light">(contact)</span>
          <h2>
            Un projet ?
            <br />
            <em>Parlons-en.</em>
          </h2>
          <p>
            Décrivez-nous votre projet — nous revenons vers vous sous 48 heures. Déplacement gratuit sur Orléans
            et 45 km à la ronde. Artisan assuré · garantie décennale.
          </p>
          <a
            href="https://wa.me/33651294455?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20des%20travaux%20de%20peinture"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-big"
          >
            <WhatsAppIcon size={20} />
            Nous écrire sur WhatsApp
          </a>
          <div className="contact-infos">
            <a href="tel:+33651294455" className="contact-info-item">
              <span className="ci-icon">📞</span>
              <div>
                <div className="ci-label">Téléphone</div>
                <div className="ci-value">06 51 29 44 55</div>
              </div>
            </a>
            <a href="mailto:joly.peinture@hotmail.com" className="contact-info-item">
              <span className="ci-icon">✉️</span>
              <div>
                <div className="ci-label">Email</div>
                <div className="ci-value">joly.peinture@hotmail.com</div>
              </div>
            </a>
            <div className="contact-info-item">
              <span className="ci-icon">📍</span>
              <div>
                <div className="ci-label">Zone</div>
                <div className="ci-value">Orléans · 45 km alentours</div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right">
          {/* Formspree : remplacer YOUR_FORM_ID par l'identifiant du formulaire créé sur formspree.io */}
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="fname">Votre nom</label>
              <input type="text" id="fname" name="name" placeholder="Jean Dupont" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ftel">Téléphone</label>
                <input type="tel" id="ftel" name="telephone" placeholder="06 00 00 00 00" required />
              </div>
              <div className="form-group">
                <label htmlFor="femail">Email</label>
                <input type="email" id="femail" name="email" placeholder="jean@email.fr" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="ftravaux">Type de travaux</label>
              <select id="ftravaux" name="travaux">
                <option value="">Sélectionner...</option>
                <option value="interieure">Peinture intérieure</option>
                <option value="exterieure">Peinture extérieure / ravalement</option>
                <option value="decoration">Décoration & finitions</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="fmsg">Votre message</label>
              <textarea id="fmsg" name="message" rows={4} placeholder="Décrivez votre projet..." />
            </div>
            <button type="submit" className="btn-primary full" disabled={status === "sending" || status === "sent"}>
              {btnLabel}
            </button>
            <p className="form-rgpd">
              En envoyant ce formulaire, vous acceptez que vos coordonnées soient utilisées uniquement pour
              traiter votre demande de devis. Elles ne sont jamais cédées à des tiers.
            </p>
            {status === "sent" && (
              <div className="form-success">✅ Message envoyé ! Nous vous répondons sous 48h.</div>
            )}
            {status === "error" && (
              <div className="form-note">
                Une erreur est survenue. Contactez-nous sur{" "}
                <a href="https://wa.me/33651294455" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>{" "}
                ou au <a href="tel:+33651294455">06 51 29 44 55</a>.
              </div>
            )}
            {status === "unconfigured" && (
              <div className="form-note">
                Le formulaire sera actif dès la mise en ligne. En attendant, écrivez-nous sur{" "}
                <a href="https://wa.me/33651294455" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>{" "}
                ou appelez le <a href="tel:+33651294455">06 51 29 44 55</a>.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
