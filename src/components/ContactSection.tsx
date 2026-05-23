"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { y: 50, opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay, ease },
  }),
};

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-black py-32 lg:py-40">
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
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p
                custom={0}
                variants={fadeUp}
                className="mb-6 text-center font-heading text-[11px] font-semibold uppercase tracking-[0.4em]"
              >
                <span className="text-accent">( 04 )</span> <span className="text-text-dim">- Contact</span>
              </motion.p>
              <motion.h2
                custom={0.1}
                variants={fadeUp}
                className="mx-auto mb-8 text-center font-heading font-black uppercase leading-[0.9] tracking-tight text-white"
                style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
              >
                Parlons de<br />
                votre <span className="italic">projet.</span>
              </motion.h2>
              <motion.p
                custom={0.2}
                variants={fadeUp}
                className="mx-auto mb-16 max-w-md text-center text-sm leading-relaxed text-text-muted"
              >
                Premier échange gratuit et sans engagement pour
                définir vos besoins et objectifs.
              </motion.p>

              {/* Contact Form */}
              <motion.form
                custom={0.3}
                variants={fadeUp}
                className="mx-auto max-w-lg"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="mb-1 grid grid-cols-1 gap-px bg-grid-line sm:grid-cols-2">
                  <div className="focus-line-wrap bg-gray-900 p-1">
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block px-3 pt-3 font-heading text-[10px] font-semibold uppercase tracking-[0.25em] text-text-dim"
                    >
                      Nom
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Votre nom"
                      className="w-full bg-transparent px-3 pb-4 pt-1 text-sm text-white placeholder-text-dim outline-none"
                    />
                  </div>
                  <div className="focus-line-wrap bg-gray-900 p-1">
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block px-3 pt-3 font-heading text-[10px] font-semibold uppercase tracking-[0.25em] text-text-dim"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="votre@email.fr"
                      className="w-full bg-transparent px-3 pb-4 pt-1 text-sm text-white placeholder-text-dim outline-none"
                    />
                  </div>
                </div>

                <div className="mb-1 bg-grid-line p-px">
                  <div className="focus-line-wrap bg-gray-900 p-1">
                    <label
                      htmlFor="contact-service"
                      className="mb-2 block px-3 pt-3 font-heading text-[10px] font-semibold uppercase tracking-[0.25em] text-text-dim"
                    >
                      Service souhaité
                    </label>
                    <select
                      id="contact-service"
                      className="w-full bg-transparent px-3 pb-4 pt-1 text-sm text-text-muted outline-none"
                    >
                      <option value="" className="bg-black text-white">Sélectionnez un service</option>
                      <option value="site-vitrine" className="bg-black text-white">Site Vitrine sur mesure</option>
                      <option value="site-ecommerce" className="bg-black text-white">Site E-Commerce sur mesure</option>
                      <option value="reseaux-sociaux" className="bg-black text-white">Création de contenu</option>
                      <option value="accompagnement" className="bg-black text-white">Coaching & Autonomie</option>
                      <option value="maintenance" className="bg-black text-white">Maintenance & Support</option>
                    </select>
                  </div>
                </div>

                <div className="mb-8 bg-grid-line p-px">
                  <div className="focus-line-wrap bg-gray-900 p-1">
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block px-3 pt-3 font-heading text-[10px] font-semibold uppercase tracking-[0.25em] text-text-dim"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Décrivez votre projet…"
                      className="w-full resize-none bg-transparent px-3 pb-4 pt-1 text-sm text-white placeholder-text-dim outline-none"
                    />
                  </div>
                </div>

                <p className="mb-8 px-1 text-[11px] leading-relaxed text-text-dim text-center sm:text-left">
                  En envoyant ce formulaire, vous acceptez que vos données soient traitées pour répondre à votre demande conformément à notre{" "}
                  <a href="/mentions-legales#confidentialite" className="underline transition-colors hover:text-white">
                    Politique de Confidentialité
                  </a>.
                </p>

                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <button type="submit" className="cta-primary group w-full justify-center sm:w-auto">
                    <span>Envoyer le message</span>
                    <ArrowRight
                      size={15}
                      strokeWidth={2.5}
                      className="transition-transform duration-400 group-hover:translate-x-1.5"
                    />
                  </button>

                  {/* Response badge */}
                  <div className="flex items-center gap-2 py-3">
                    <Clock size={12} strokeWidth={1.5} className="text-text-dim" />
                    <span className="font-heading text-[10px] font-medium uppercase tracking-[0.2em] text-text-dim">
                      Réponse sous 48h
                    </span>
                  </div>
                </div>
              </motion.form>

              {/* Direct contact info */}
              <motion.div
                custom={0.5}
                variants={fadeUp}
                className="mt-20 flex flex-col items-center gap-6 border-t border-grid-line pt-12 sm:flex-row sm:justify-center sm:gap-12"
              >
                <a
                  href="mailto:contact@mateo-bonneton.fr"
                  className="glow-line pb-1 text-sm text-text-muted transition-colors hover:text-white"
                >
                  contact@mateo-bonneton.fr
                </a>
                <span className="hidden h-3 w-px bg-grid-line-strong sm:block" aria-hidden="true" />
                <span className="text-sm text-text-muted">
                  Bouches-du-Rhône, France
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
