import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import PageTransition from "@/components/PageTransition";
import JsonLd from "@/components/JsonLd";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
        name={`${service.title} - Matéo Bonneton`}
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
                className="glow-line mb-16 inline-flex items-center gap-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-dim transition-colors hover:text-accent"
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
                <div className="mb-10 flex h-14 w-14 items-center justify-center border border-grid-line-strong transition-all duration-300 hover:border-accent hover:bg-accent-light hover:shadow-[0_0_20px_var(--accent-light)]">
                  <Icon size={24} strokeWidth={1.5} className="text-white transition-colors hover:text-accent" />
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
                      className="card-draw flex items-start gap-4 bg-gray-900 p-6 transition-colors duration-400 hover:bg-accent-light"
                    >
                      <Check
                        size={14}
                        strokeWidth={2.5}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      <span className="text-sm text-text-muted">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects Gallery */}
              {service.projects && service.projects.length > 0 ? (
                <div className="mb-24">
                  <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.4em] text-text-dim">
                    ( Projets ) - Réalisations récentes
                  </p>
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {service.projects.map((project) => (
                      <div 
                        key={project.title} 
                        className="group relative flex flex-col overflow-hidden border border-grid-line-strong bg-gray-900 p-5 transition-all duration-500 hover:border-accent hover:bg-accent-light hover:shadow-[0_10px_30px_var(--accent-light)]"
                      >
                        {/* Subtle top-right accent glow on hover */}
                        <div 
                          className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-[0.08]" 
                          aria-hidden="true" 
                        />
                        
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden border border-grid-line-strong bg-black">
                          <Image
                            src={project.image}
                            alt={`${project.title} - ${project.client}`}
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:filter group-hover:brightness-[1.05]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                            priority
                          />
                        </div>

                        {/* Project Info */}
                        <div className="relative z-10 mt-6 flex flex-1 flex-col">
                          <span className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-text-dim">
                            {project.category}
                          </span>
                          <h3 className="mt-2 font-heading text-lg font-black uppercase tracking-[0.05em] text-white">
                            {project.title}
                          </h3>
                          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-text-dim">
                            {project.client}
                          </p>
                          {/* Decorative small separator */}
                          <div className="my-4 h-px w-6 bg-grid-line-strong transition-all duration-500 group-hover:w-12 group-hover:bg-accent" />
                          <p className="text-sm leading-relaxed text-text-muted/80">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mb-24">
                  <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.4em] text-text-dim">
                    ( Projets ) - Réalisations récentes
                  </p>
                  <div className="relative overflow-hidden border border-grid-line-strong bg-gray-900/40 p-8 sm:p-12 text-center backdrop-blur-sm">
                    {/* Grid pattern background effect */}
                    <div 
                      className="absolute inset-0 opacity-[0.05] pointer-events-none"
                      style={{
                        backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)",
                        backgroundSize: "24px 24px"
                      }}
                      aria-hidden="true"
                    />
                    
                    <div className="relative z-10 mx-auto max-w-lg">
                      <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-dashed border-accent/40 text-accent">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      
                      <h3 className="font-heading text-base font-black uppercase tracking-wider text-white">
                        Votre projet ici ?
                      </h3>
                      
                      <p className="mt-4 text-xs leading-relaxed text-text-muted">
                        Vous souhaitez être le premier à bénéficier de ce service d&apos;exception dans la région ? 
                        Collaborons ensemble pour concevoir votre solution sur mesure à Martigues, Istres, Fos-sur-Mer ou Marseille et donnez vie à votre projet.
                      </p>
                      
                      <div className="mt-8 flex justify-center">
                        <Link 
                          href="/#contact" 
                          className="inline-flex items-center gap-2 border border-white bg-white px-6 py-3 text-[10px] font-semibold uppercase tracking-widest text-black transition-all duration-400 hover:bg-accent hover:border-accent hover:text-static-white"
                        >
                          <span>Lancer mon projet</span>
                          <ArrowRight size={12} strokeWidth={2.5} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

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
