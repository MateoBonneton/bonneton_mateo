"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { y: 50, opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay, ease },
  }),
};

const stats = [
  { value: "3+", label: "Années d'expérience" },
  { value: "30+", label: "Projets livrés" },
  { value: "100%", label: "Clients satisfaits" },
];

export default function AboutSection() {
  return (
    <section id="a-propos" className="relative bg-black py-32 lg:py-40">
      {/* Grid overlay */}
      <div className="grid-overlay">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="grid-col" />
        ))}
      </div>

      {/* Top border */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">

            {/* Section Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20 lg:mb-24"
            >
              <motion.p
                custom={0}
                variants={fadeUp}
                className="mb-6 font-heading text-[11px] font-semibold uppercase tracking-[0.4em]"
              >
                <span className="text-accent">( 03 )</span> <span className="text-text-dim">- À propos</span>
              </motion.p>
              <motion.h2
                custom={0.1}
                variants={fadeUp}
                className="font-heading font-black uppercase leading-[0.9] tracking-tight text-white"
                style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
              >
                L&apos;expertise au<br />
                service de votre<br />
                <span className="italic text-accent">croissance.</span>
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-16">
              {/* Text Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.p
                  custom={0.2}
                  variants={fadeUp}
                  className="mb-8 text-base leading-[1.8] text-text-muted"
                >
                  Basé dans les Bouches-du-Rhône, j&apos;accompagne les entreprises
                  de Provence dans leur transformation digitale. De la conception
                  de sites web performants à la gestion de vos réseaux sociaux,
                  chaque projet est traité avec rigueur et passion.
                </motion.p>
                <motion.p
                  custom={0.3}
                  variants={fadeUp}
                  className="mb-14 text-base leading-[1.8] text-text-muted"
                >
                  Mon approche repose sur trois piliers : la performance technique,
                  le design au service du message, et un accompagnement humain
                  sur le long terme. Pas de solutions génériques : chaque stratégie
                  est pensée sur mesure.
                </motion.p>

                {/* Stats */}
                <motion.div
                  custom={0.4}
                  variants={fadeUp}
                  className="grid grid-cols-3 gap-px bg-grid-line"
                >
                  {stats.map((stat) => (
                    <div key={stat.label} className="bg-black py-8 pr-6">
                      {/* Decorative top line */}
                      <div className="mb-5 h-px w-6 bg-accent" />
                      <p className="font-heading text-3xl font-black tracking-tight text-accent lg:text-4xl">
                        {stat.value}
                      </p>
                      <p className="mt-3 font-heading text-[10px] font-semibold uppercase tracking-[0.15em] text-text-dim">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Portrait Photo */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={0.3}
                variants={fadeUp}
                className="flex items-center justify-center"
              >
                <div className="group relative">
                  {/* Outer frame with offset */}
                  <div className="absolute -inset-3 border border-grid-line-strong transition-all duration-700 group-hover:border-accent/40" aria-hidden="true" />

                  {/* Photo container */}
                  <div className="relative h-80 w-72 overflow-hidden lg:h-[28rem] lg:w-[22rem]">
                    <Image
                      src="/images/mateo.jpeg"
                      alt="Matéo Bonneton - Expert digital freelance"
                      fill
                      className="object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 288px, 352px"
                      priority={false}
                    />

                    {/* Dark overlay gradient */}
                    <div
                      className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-0"
                      style={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 40%, transparent 100%)",
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Corner accents (larger) */}
                  <div className="absolute -top-3 -left-3 h-6 w-6 border-t border-l border-accent/20 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-accent" aria-hidden="true" />
                  <div className="absolute -top-3 -right-3 h-6 w-6 border-t border-r border-accent/20 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-accent" aria-hidden="true" />
                  <div className="absolute -bottom-3 -left-3 h-6 w-6 border-b border-l border-accent/20 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-accent" aria-hidden="true" />
                  <div className="absolute -bottom-3 -right-3 h-6 w-6 border-b border-r border-accent/20 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-accent" aria-hidden="true" />

                  {/* Name label */}
                  <div className="absolute -bottom-3 left-6 z-10 bg-black px-4 py-1">
                    <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.3em] text-text-dim">
                      Matéo Bonneton
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
