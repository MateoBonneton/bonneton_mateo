"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/data/services";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Track scroll for header backdrop intensity
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-grid-line-strong bg-black/95 backdrop-blur-xl"
          : "border-transparent bg-black/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/images/bonneton_mateo_logo.png"
              alt="Matéo Bonneton — Expert Digital"
              width={36}
              height={36}
              priority
              className="transition-opacity duration-300 group-hover:opacity-80"
            />
            <span className="hidden font-heading text-sm font-semibold uppercase tracking-[0.15em] text-white sm:inline">
              Matéo Bonneton
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
            <Link
              href="/"
              className="group relative px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-text-muted transition-colors duration-300 hover:text-white"
            >
              Accueil
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-text-muted transition-colors duration-300 hover:text-white"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  size={12}
                  strokeWidth={2}
                  className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute left-0 top-full mt-2 w-80 border border-grid-line-strong bg-black/98 backdrop-blur-xl"
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {services.map((service, i) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-center gap-4 border-b border-grid-line px-5 py-4 transition-colors duration-200 hover:bg-white/[0.04] last:border-b-0"
                        >
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-grid-line transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/[0.03]">
                            <Icon size={14} strokeWidth={1.5} className="text-text-dim transition-colors duration-300 group-hover:text-white" />
                          </div>
                          <div>
                            <span className="block font-heading text-xs font-semibold uppercase tracking-[0.1em] text-gray-400 transition-colors group-hover:text-white">
                              {service.shortTitle}
                            </span>
                            <span className="mt-0.5 block text-[11px] leading-relaxed text-text-dim transition-colors group-hover:text-text-muted">
                              {service.title}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/#a-propos"
              className="px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-text-muted transition-colors duration-300 hover:text-white"
            >
              À propos
            </Link>
            <Link
              href="/#contact"
              className="px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-text-muted transition-colors duration-300 hover:text-white"
            >
              Contact
            </Link>

            <Link
              href="#contact"
              className="group relative ml-6 overflow-hidden border border-white px-6 py-2.5 font-heading text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-400 hover:bg-white hover:text-black"
            >
              <span className="relative z-10">Démarrer</span>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center p-2 text-white md:hidden"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-grid-line bg-black md:hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-1" aria-label="Menu mobile">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="border-b border-grid-line py-4 font-heading text-sm font-medium uppercase tracking-[0.15em] text-text-muted transition-colors hover:text-white"
              >
                Accueil
              </Link>

              {/* Mobile Services Accordion */}
              <div className="border-b border-grid-line">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between py-4 font-heading text-sm font-medium uppercase tracking-[0.15em] text-text-muted transition-colors hover:text-white"
                >
                  Services
                  <ChevronDown
                    size={16}
                    strokeWidth={2}
                    className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="block border-t border-grid-line py-3 pl-6 text-xs font-medium uppercase tracking-[0.1em] text-text-dim transition-colors hover:text-white"
                        >
                          {service.shortTitle}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-grid-line py-4 font-heading text-sm font-medium uppercase tracking-[0.15em] text-text-muted transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 border border-white px-5 py-3 text-center font-heading text-sm font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-white hover:text-black"
              >
                Démarrer
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
