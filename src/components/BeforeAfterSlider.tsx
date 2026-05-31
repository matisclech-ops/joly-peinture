import { useEffect, useRef, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

export default function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }: Props) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const userInteracted = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const p = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPos(p);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragging.current = true;
    userInteracted.current = true;
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    userInteracted.current = true;
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
    if (e.key === "Home") setPos(0);
    if (e.key === "End") setPos(100);
  };

  // Auto-demo: animate the slider once when it enters the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          obs.disconnect();
          const sequence = [
            { from: 50, to: 30, dur: 700 },
            { from: 30, to: 72, dur: 900 },
            { from: 72, to: 50, dur: 600 },
          ];
          let idx = 0;
          const runStep = () => {
            if (userInteracted.current || idx >= sequence.length) return;
            const { from, to, dur } = sequence[idx++];
            const start = performance.now();
            const step = (now: number) => {
              if (userInteracted.current) return;
              const t = Math.min((now - start) / dur, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              setPos(from + (to - from) * eased);
              if (t < 1) requestAnimationFrame(step);
              else runStep();
            };
            requestAnimationFrame(step);
          };
          setTimeout(runStep, 300);
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="ba-slider"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="slider"
      aria-label="Comparateur avant / après — glisser pour comparer"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <img src={afterSrc} alt={afterAlt} className="ba-img" draggable={false} />
      <img
        src={beforeSrc}
        alt={beforeAlt}
        className="ba-img ba-img-before"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
      />
      <span className="ba-label ba-label-before">AVANT</span>
      <span className="ba-label ba-label-after">APRÈS</span>
      <div className="ba-handle" style={{ left: `${pos}%` }}>
        <div className="ba-handle-grip" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m10 8-4 4 4 4" />
            <path d="m14 16 4-4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
