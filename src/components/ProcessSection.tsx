"use client";

import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { y: 50, opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay, ease },
  }),
};

const processSteps = [
  {
    number: "01",
    title: "Écoute & Analyse",
    description:
      "Comprendre votre activité, vos objectifs et vos contraintes. Audit de l'existant et analyse concurrentielle.",
  },
  {
    number: "02",
    title: "Stratégie & Proposition",
    description:
      "Stratégie sur mesure avec proposition détaillée, planning et budget transparent.",
  },
  {
    number: "03",
    title: "Production & Itérations",
    description:
      "Mise en œuvre agile avec validations intermédiaires pour un résultat optimal.",
  },
  {
    number: "04",
    title: "Livraison & Suivi",
    description:
      "Livraison, formation, et accompagnement continu pour la pérennité du projet.",
  },
];

export default function ProcessSection() {
  return (
    <section id="processus" className="relative bg-black py-32 lg:py-40">
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
                <span className="text-accent">( 02 )</span> <span className="text-text-dim">- Processus</span>
              </motion.p>
              <motion.h2
                custom={0.1}
                variants={fadeUp}
                className="font-heading font-black uppercase leading-[0.9] tracking-tight text-white"
                style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
              >
                Une méthode<br />
                <span className="italic text-accent">éprouvée.</span>
              </motion.h2>
            </motion.div>

            {/* Process Steps */}
            <div className="relative grid grid-cols-1 gap-px bg-grid-line md:grid-cols-2 lg:grid-cols-4">
              {/* Horizontal connecting line (desktop only) */}
              <div
                className="pointer-events-none absolute left-0 right-0 top-[4.5rem] hidden h-px lg:block"
                style={{
                  background: "linear-gradient(90deg, transparent 5%, var(--grid-line-strong) 15%, var(--grid-line-strong) 85%, transparent 95%)",
                }}
                aria-hidden="true"
              />

              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  custom={0.1 + i * 0.08}
                  variants={fadeUp}
                  className="card-draw group relative bg-gray-900 p-8 transition-colors duration-500 hover:bg-accent-light lg:p-10"
                >
                  {/* Step number in bordered box */}
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center border border-grid-line-strong transition-all duration-500 group-hover:border-accent group-hover:bg-accent-light group-hover:shadow-[0_0_20px_var(--accent-light)]">
                      <p className="font-heading text-lg font-black tracking-tight text-white transition-colors group-hover:text-accent">
                        {step.number}
                      </p>
                    </div>
                    {/* Arrow connector */}
                    {i < processSteps.length - 1 && (
                      <span className="hidden text-[10px] text-text-dim lg:block" aria-hidden="true">→</span>
                    )}
                  </div>

                  <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-[0.12em] text-white">
                    {step.title}
                  </h3>

                  {/* Decorative line */}
                  <div className="mb-4 h-px w-6 bg-grid-line-strong transition-all duration-500 group-hover:w-10 group-hover:bg-accent" />

                  <p className="text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
