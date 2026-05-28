"use client";

const items = [
  "SITES WEB",
  "CRÉATION DE CONTENU",
  "COACHING & AUTONOMIE",
  "MAINTENANCE",
  "STRATÉGIE",
  "PERFORMANCE",
];

export default function MarqueeDivider() {
  return (
    <div className="fade-mask-x relative overflow-hidden border-y border-grid-line-strong bg-black py-6">
      <div className="marquee-track flex items-center">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 whitespace-nowrap px-3 font-heading text-base font-bold uppercase tracking-[0.3em] text-text-dim"
          >
            {items.map((item, j) => (
              <span key={j} className="inline-flex items-center gap-6">
                <span>{item}</span>
                <span className="text-accent text-[10px] select-none">◆</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
