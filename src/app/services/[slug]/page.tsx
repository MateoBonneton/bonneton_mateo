import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import PageTransition from "@/components/PageTransition";
import JsonLd from "@/components/JsonLd";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: `${service.title} | Matéo Bonneton`,
      description: service.metaDescription,
      locale: "fr_FR",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const serviceIndex = services.findIndex((s) => s.slug === slug);

  return (
    <PageTransition>
      <JsonLd
        type="ProfessionalService"
        name={`${service.title} — Matéo Bonneton`}
        description={service.metaDescription}
        url={`https://mateo-bonneton.fr/services/${service.slug}`}
        serviceType={service.shortTitle}
      />

      <section className="relative min-h-screen bg-black pt-32 pb-24">
        {/* Grid overlay */}
        <div className="grid-overlay opacity-100">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="grid-col" />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              {/* Back link */}
              <Link
                href="/"
                className="glow-line mb-16 inline-flex items-center gap-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-dim transition-colors hover:text-white"
              >
                <ArrowLeft size={13} strokeWidth={2} />
                Retour
              </Link>

              {/* Large outline number */}
              <div className="relative mb-12">
                <span
                  className="text-outline pointer-events-none absolute -top-4 right-0 font-black leading-none"
                  style={{ fontSize: "8rem" }}
                  aria-hidden="true"
                >
                  0{serviceIndex + 1}
                </span>

                {/* Service Icon */}
                <div className="mb-10 flex h-14 w-14 items-center justify-center border border-grid-line-strong">
                  <Icon size={24} strokeWidth={1.5} className="text-white" />
                </div>

                {/* Title */}
                <h1
                  className="font-black uppercase leading-[0.9] tracking-tight text-white"
                  style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                >
                  {service.shortTitle}
                </h1>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-text-dim">
                  {service.title}
                </p>
              </div>

              {/* Description */}
              <p className="mb-16 max-w-xl text-base leading-[1.8] text-text-muted">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-20">
                <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.4em] text-text-dim">
                  Ce que je propose
                </p>
                <div className="grid grid-cols-1 gap-px bg-grid-line sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="card-draw flex items-start gap-4 bg-black p-6 transition-colors duration-400 hover:bg-white/[0.02]"
                    >
                      <Check
                        size={14}
                        strokeWidth={2.5}
                        className="mt-0.5 shrink-0 text-white"
                      />
                      <span className="text-sm text-text-muted">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" className="cta-primary group">
                  <span>Demander un devis</span>
                  <ArrowRight
                    size={15}
                    strokeWidth={2.5}
                    className="transition-transform duration-400 group-hover:translate-x-1.5"
                  />
                </Link>
                <Link href="/#services" className="cta-outline">
                  Voir tous les services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
