import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { services } from "@/data/services";

const InstagramIcon = ({ size = 14, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const socialLinks = [
  { href: "https://www.instagram.com/bonneton_mateo", icon: InstagramIcon, label: "Instagram" },
  { href: "mailto:contact@mateo-bonneton.fr", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-grid-line-strong bg-black">
      {/* Large background outline text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center animate-fade-in" aria-hidden="true">
        <span
          className="text-outline select-none font-heading font-black uppercase leading-none opacity-[0.03] dark:opacity-[0.08]"
          style={{
            fontSize: "clamp(5rem, 14vw, 14rem)",
          }}
        >
          BONNETON
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-16 border-b border-grid-line py-24 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-6 md:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/bonneton_mateo_logo.png"
                alt="Matéo Bonneton"
                width={28}
                height={28}
              />
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Matéo Bonneton
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-[1.8] text-text-muted">
              Expert digital freelance dans les Bouches-du-Rhône -
              le boost digital des entreprises de Provence.
            </p>
            <div className="mt-2 flex gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center border border-grid-line text-text-dim transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent-light"
                  >
                    <Icon size={14} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-5 md:col-span-3 md:col-start-7">
            <h3 className="font-heading text-[10px] font-semibold uppercase tracking-[0.3em] text-text-dim">
              Services
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Services">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="glow-line inline-block self-start pb-0.5 text-sm text-text-muted transition-colors hover:text-white"
                >
                  {service.shortTitle}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5 md:col-span-3">
            <h3 className="font-heading text-[10px] font-semibold uppercase tracking-[0.3em] text-text-dim">
              Contact
            </h3>
            <p className="text-sm text-text-muted">Bouches-du-Rhône</p>
            <p className="text-sm text-text-muted">Provence-Alpes-Côte d&apos;Azur</p>
            <a
              href="mailto:contact@mateo-bonneton.fr"
              className="glow-line inline-block self-start pb-0.5 text-sm text-text-muted transition-colors hover:text-white"
            >
              contact@mateo-bonneton.fr
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <p className="font-heading text-[11px] tracking-wide text-text-dim">
            © 2026 Matéo Bonneton
          </p>
          <div className="flex gap-8">
            <Link
              href="/mentions-legales"
              className="text-[11px] tracking-wide text-text-dim transition-colors hover:text-text-muted"
            >
              Mentions légales
            </Link>
            <Link
              href="/mentions-legales#confidentialite"
              className="text-[11px] tracking-wide text-text-dim transition-colors hover:text-text-muted"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
