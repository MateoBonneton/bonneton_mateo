"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";

/* ─── Animation Variants ─── */
const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const lineReveal = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.0,
      delay: 0.4 + i * 0.12,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay, ease },
  }),
};

const lineGrow = {
  hidden: { scaleX: 0 },
  visible: (delay: number) => ({
    scaleX: 1,
    transition: { duration: 1.0, delay, ease },
  }),
};

const gridFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2.0, delay: 0.1, ease: "easeOut" as const },
  },
};

/* ─── Subheadline pillars ─── */
const pillars = ["Sites Web", "Création de contenu", "Coaching & Autonomie"];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-black pt-20 pb-24 lg:pb-32"
      aria-label="Section héroïque"
    >
      {/* ─── Radial gradient backdrop ─── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, var(--accent-light) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ─── 12-Column Grid Overlay ─── */}
      <motion.div
        className="grid-overlay"
        variants={gridFade}
        initial="hidden"
        animate="visible"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="grid-col" />
        ))}
      </motion.div>

      {/* ─── Diagonal Accent Lines (SVG) ─── */}
      <motion.svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        initial="hidden"
        animate="visible"
        aria-hidden="true"
      >
        <motion.line
          x1="60%"
          y1="0"
          x2="100%"
          y2="60%"
          stroke="var(--grid-line)"
          strokeWidth="1"
          variants={{
            hidden: { pathLength: 0 },
            visible: {
              pathLength: 1,
              transition: { duration: 2.0, delay: 1.0, ease: "easeInOut" as const },
            },
          }}
        />
        <motion.line
          x1="68%"
          y1="0"
          x2="100%"
          y2="50%"
          stroke="var(--grid-line)"
          strokeWidth="1"
          variants={{
            hidden: { pathLength: 0 },
            visible: {
              pathLength: 1,
              transition: { duration: 2.0, delay: 1.2, ease: "easeInOut" as const },
            },
          }}
        />
        <motion.line
          x1="0"
          y1="75%"
          x2="25%"
          y2="100%"
          stroke="var(--grid-line)"
          strokeWidth="1"
          variants={{
            hidden: { pathLength: 0 },
            visible: {
              pathLength: 1,
              transition: { duration: 1.5, delay: 1.5, ease: "easeInOut" as const },
            },
          }}
        />
      </motion.svg>

      {/* ─── Content ─── */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">

            {/* ─── Eyebrow ─── */}
            <motion.p
              className="mb-8 font-heading text-[11px] font-semibold uppercase tracking-[0.4em] text-text-dim lg:mb-10"
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              Expert Digital - Bouches-du-Rhône
            </motion.p>

            {/* ─── Headline ─── */}
            <h1 className="mb-10 lg:mb-14">
              {["Le", "boost", "digital"].map((word, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span
                    className={`inline-block pr-[0.3em] font-heading font-black uppercase leading-[0.85] tracking-tight ${
                      word === "boost" ? "italic" : ""
                    }`}
                    style={{
                      fontSize: "clamp(3rem, 9vw, 8rem)",
                      color: word === "boost" ? "var(--accent)" : "var(--white)",
                    }}
                    custom={i}
                    variants={lineReveal}
                    initial="hidden"
                    animate="visible"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
              <br />
              {["des", "entreprises"].map((word, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block pr-[0.3em] font-heading font-black uppercase leading-[0.85] tracking-tight"
                    style={{
                      fontSize: "clamp(3rem, 9vw, 8rem)",
                      color: "var(--white)",
                    }}
                    custom={i + 3}
                    variants={lineReveal}
                    initial="hidden"
                    animate="visible"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
              <br />
              <span className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block font-heading font-black uppercase leading-[0.85] tracking-tight"
                  style={{
                    fontSize: "clamp(3rem, 9vw, 8rem)",
                    color: "var(--white)",
                  }}
                  custom={5}
                  variants={lineReveal}
                  initial="hidden"
                  animate="visible"
                >
                  de Provence.
                </motion.span>
              </span>
            </h1>

            {/* ─── Decorative Line ─── */}
            <motion.div
              className="mb-8 h-px origin-left bg-accent lg:mb-10"
              style={{ maxWidth: "80px" }}
              custom={1.2}
              variants={lineGrow}
              initial="hidden"
              animate="visible"
            />

            {/* ─── Sub-headline: 3 Pillars ─── */}
            <motion.div
              className="mb-12 flex flex-wrap items-center gap-x-8 gap-y-2 lg:mb-16"
              custom={1.3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              {pillars.map((pillar, i) => {
                let href = "#services";
                if (pillar === "Création de contenu") {
                  href = "/services/gestion-reseaux-sociaux-marseille";
                } else if (pillar === "Coaching & Autonomie") {
                  href = "/services/accompagnement-digital-provence";
                }

                return (
                  <span key={pillar} className="flex items-center gap-x-8">
                    <Link
                      href={href}
                      className="group/pillar flex items-center gap-x-3 transition-colors duration-300"
                    >
                      <span className="h-px w-4 bg-text-dim transition-all duration-300 group-hover/pillar:w-6 group-hover/pillar:bg-accent" aria-hidden="true" />
                      <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.35em] text-text-muted transition-colors duration-300 group-hover/pillar:text-accent sm:text-xs">
                        {pillar}
                      </span>
                    </Link>
                    {i < pillars.length - 1 && (
                      <span className="hidden h-3 w-px bg-grid-line-strong sm:block" aria-hidden="true" />
                    )}
                  </span>
                );
              })}
            </motion.div>

            {/* ─── CTA ─── */}
            <motion.div
              className="flex flex-wrap gap-4"
              custom={1.6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <Link href="#contact" className="cta-primary group">
                <span>Démarrer votre projet</span>
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="transition-transform duration-400 group-hover:translate-x-1.5"
                />
              </Link>
              <Link href="#services" className="cta-outline group">
                <span>Mes services</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2, ease }}
      >
        <span className="font-heading text-[10px] font-medium uppercase tracking-[0.3em] text-text-dim">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} strokeWidth={1.5} className="text-text-dim" />
        </motion.div>
      </motion.div>
    </section>
  );
}
