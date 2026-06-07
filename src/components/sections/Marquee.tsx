import { Fragment } from "react";

const RED = ["Peinture intérieure", "Façades & ravalement", "Décoration sur mesure", "Orléans et 45 km"];
const DARK = ["4,9 ★ Google", "90 avis vérifiés", "+10 ans d'expérience", "Devis sous 48 h", "Garantie décennale"];

function Track({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className={reverse ? "marquee-track reverse" : "marquee-track"}>
      {doubled.map((label, i) => (
        <Fragment key={i}>
          <span>{label}</span>
          <span className="msep">✦</span>
        </Fragment>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-band red">
        <Track items={RED} />
      </div>
      <div className="marquee-band dark">
        <Track items={DARK} reverse />
      </div>
    </div>
  );
}
