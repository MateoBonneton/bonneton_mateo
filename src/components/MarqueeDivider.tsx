"use client";

const items = [
  "SITES WEB",
  "CONTENUS",
  "ACCOMPAGNEMENT",
  "MAINTENANCE",
  "STRATÉGIE",
  "PERFORMANCE",
];

export default function MarqueeDivider() {
  const marqueeContent = items.map((item) => `${item}  ◆  `).join("");

  return (
    <div className="fade-mask-x relative overflow-hidden border-y border-grid-line-strong bg-black py-6">
      <div className="marquee-track">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-2 font-heading text-base font-bold uppercase tracking-[0.3em] text-text-dim"
          >
            {marqueeContent}
          </span>
        ))}
      </div>
    </div>
  );
}
