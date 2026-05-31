import { Fragment } from "react";

const RED = ["Peinture intérieure", "Peinture extérieure", "Devis gratuit", "Orléans"];
const DARK = ["4.9 Google ★", "90 avis clients", "10 ans d'expérience", "Finitions soignées"];

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
