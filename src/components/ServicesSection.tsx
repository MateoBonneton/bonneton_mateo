"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { y: 50, opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay, ease },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-black py-32 lg:py-40">
      {/* Grid overlay */}
      <div className="grid-overlay">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="grid-col" />
        ))}
      </div>

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
                className="mb-6 font-heading text-[11px] font-semibold uppercase tracking-[0.4em] text-text-dim"
              >
                ( 01 ) — Services
              </motion.p>
              <motion.h2
                custom={0.1}
                variants={fadeUp}
                className="font-heading font-black uppercase leading-[0.9] tracking-tight text-white"
                style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
              >
                Ce que je<br />
                <span className="italic">propose.</span>
              </motion.h2>
            </motion.div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 gap-px bg-grid-line md:grid-cols-2">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.slug}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    custom={0.1 + i * 0.08}
                    variants={fadeUp}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className="card-draw group relative flex flex-col bg-black p-10 transition-all duration-500 hover:bg-white/[0.02] lg:p-12"
                    >
                      {/* Hover top gradient */}
                      <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                        style={{
                          background: "linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, transparent 100%)",
                        }}
                        aria-hidden="true"
                      />

                      {/* Large outline number */}
                      <span
                        className="text-outline pointer-events-none absolute right-8 top-6 font-heading font-black leading-none transition-opacity duration-500 group-hover:opacity-60"
                        style={{ fontSize: "5rem" }}
                        aria-hidden="true"
                      >
                        0{i + 1}
                      </span>

                      <div className="mb-8 flex h-12 w-12 items-center justify-center border border-grid-line-strong transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/[0.04] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.04)]">
                        <Icon size={20} strokeWidth={1.5} className="text-white" />
                      </div>

                      <h3 className="mb-4 font-heading text-lg font-bold uppercase tracking-[0.08em] text-white">
                        {service.shortTitle}
                      </h3>

                      {/* Decorative line */}
                      <div className="mb-4 h-px w-8 bg-grid-line-strong transition-all duration-500 group-hover:w-12 group-hover:bg-white/30" />

                      <p className="mb-10 max-w-sm text-sm leading-relaxed text-text-muted">
                        {service.description.slice(0, 140)}…
                      </p>

                      <div className="glow-line mt-auto inline-flex items-center gap-2 self-start pb-1 font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-text-dim transition-colors duration-500 group-hover:text-white">
                        <span>Découvrir</span>
                        <ArrowRight
                          size={12}
                          strokeWidth={2.5}
                          className="transition-transform duration-500 group-hover:translate-x-2"
                        />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
