import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Mentions Légales & CGU - Matéo Bonneton",
  description:
    "Mentions légales, conditions générales d'utilisation (CGU) et politique de confidentialité de Matéo Bonneton, expert digital freelance dans les Bouches-du-Rhône.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <PageTransition>
      <JsonLd
        type="WebPage"
        name="Mentions Légales & CGU - Matéo Bonneton"
        description="Mentions légales, conditions générales d'utilisation (CGU) et politique de confidentialité de Matéo Bonneton, expert digital freelance."
        url="https://mateo-bonneton.fr/mentions-legales"
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
                Retour à l&apos;accueil
              </Link>

              {/* Header */}
              <div className="mb-20">
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-grid-line-strong">
                  <Shield size={20} strokeWidth={1.5} className="text-white" />
                </div>
                <h1
                  className="font-heading font-black uppercase leading-[0.9] tracking-tight text-white"
                  style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                >
                  Mentions Légales<br />
                  <span className="italic">&amp; CGU</span>
                </h1>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-text-dim">
                  Mise à jour le 22 mai 2026
                </p>
              </div>

              {/* Sections */}
              <div className="flex flex-col gap-16 border-t border-grid-line pt-16">
                
                {/* 01. Éditeur */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div>
                    <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-text-dim">
                      ( 01 ) Éditeur du site
                    </h2>
                  </div>
                  <div className="md:col-span-2">
                    <p className="mb-4 text-sm leading-relaxed text-text-muted">
                      Le présent site internet est édité et exploité par :
                    </p>
                    <ul className="flex flex-col gap-2 text-sm text-text-muted">
                      <li><strong className="text-white">Nom :</strong> Matéo Bonneton</li>
                      <li><strong className="text-white">Forme juridique :</strong> Entrepreneur individuel</li>
                      <li><strong className="text-white">Numéro de SIREN :</strong> 999 307 424</li>
                      <li><strong className="text-white">SIRET du siège social :</strong> 999 307 424 00013</li>
                      <li><strong className="text-white">Numéro de TVA :</strong> FR29999307424</li>
                      <li><strong className="text-white">Date de création :</strong> 05 janvier 2026</li>
                      <li><strong className="text-white">Activité (NAF / APE) :</strong> Programmation informatique - 6201Z</li>
                      <li><strong className="text-white">Adresse du siège social :</strong> NC (Non Communiquée)</li>
                      <li><strong className="text-white">Dirigeants :</strong> NC (Non Communiqué)</li>
                      <li><strong className="text-white">Téléphone :</strong> 06 71 32 28 74</li>
                      <li><strong className="text-white">Email :</strong> <a href="mailto:contact@mateo-bonneton.fr" className="underline transition-colors hover:text-white">contact@mateo-bonneton.fr</a></li>
                      <li className="mt-4 border-t border-grid-line/50 pt-2 text-[10px] uppercase tracking-wider text-text-dim">
                        Sources &amp; Mises à jour : Insee &amp; RNE (le 20/05/2026)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="h-px bg-grid-line" />

                {/* 02. Hébergement */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div>
                    <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-text-dim">
                      ( 02 ) Hébergement
                    </h2>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm leading-relaxed text-text-muted">
                      Le site internet est hébergé de manière sécurisée par la société :
                      <br /><br />
                      <strong className="text-white">Vercel Inc.</strong>
                      <br />
                      340 S Lemon Ave #4133
                      <br />
                      Walnut, CA 91789, USA
                      <br />
                      Site internet : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-white">https://vercel.com</a>
                    </p>
                  </div>
                </div>

                <div className="h-px bg-grid-line" />

                {/* 03. Propriété Intellectuelle */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div>
                    <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-text-dim">
                      ( 03 ) Propriété
                    </h2>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm leading-relaxed text-text-muted">
                      L&apos;ensemble des contenus présents sur ce site (incluant, de façon non limitative, les textes, graphismes, logos, designs, images, vidéos, et codes sources) est la propriété exclusive de <strong className="text-white">Matéo Bonneton</strong>, ou est utilisé avec l&apos;accord de ses partenaires ou clients.
                      <br /><br />
                      Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est strictement interdite sans l&apos;autorisation écrite préalable de Matéo Bonneton.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-grid-line" />

                {/* 04. CGU & Confidentialité */}
                <div id="confidentialite" className="grid grid-cols-1 gap-6 md:grid-cols-3 scroll-mt-24">
                  <div>
                    <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-text-dim">
                      ( 04 ) CGU &amp; Données
                    </h2>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="mb-4 font-heading text-xs font-bold uppercase tracking-wider text-white">
                      Conditions Générales d&apos;Utilisation (CGU)
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-text-muted">
                      L&apos;utilisation du site implique l&apos;acceptation pleine et entière des présentes CGU. Le site a pour objet de fournir des informations concernant l&apos;ensemble des activités de l&apos;entreprise de Matéo Bonneton. Les informations y sont présentées de la manière la plus précise possible, mais des omissions ou inexactitudes temporaires peuvent survenir.
                    </p>
                    
                    <h3 className="mb-4 font-heading text-xs font-bold uppercase tracking-wider text-white">
                      Politique de Confidentialité (RGPD)
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-text-muted">
                      Matéo Bonneton s&apos;engage à ce que la collecte et le traitement de vos données soient conformes au Règlement Général sur la Protection des Données (RGPD).
                    </p>
                    <ul className="mb-6 flex flex-col gap-3 text-sm text-text-muted">
                      <li>
                        <strong className="text-white">Données collectées :</strong> Les seules données collectées sont celles fournies volontairement par l&apos;utilisateur via le formulaire de contact (Nom, Email, Service choisi, Message).
                      </li>
                      <li>
                        <strong className="text-white">Finalité :</strong> Ces informations sont exclusivement utilisées pour traiter votre demande de contact et concevoir votre projet personnalisé. Elles ne sont jamais revendues ou cédées à des tiers.
                      </li>
                      <li>
                        <strong className="text-white">Vos droits :</strong> Conformément à la réglementation, vous disposez d&apos;un droit d&apos;accès, de rectification, de portabilité et de suppression de vos données personnelles. Pour exercer ce droit, écrivez à : <a href="mailto:contact@mateo-bonneton.fr" className="underline transition-colors hover:text-white">contact@mateo-bonneton.fr</a>.
                      </li>
                    </ul>

                    <h3 className="mb-4 font-heading text-xs font-bold uppercase tracking-wider text-white">
                      Cookies
                    </h3>
                    <p className="text-sm leading-relaxed text-text-muted">
                      Ce site est conçu de manière sobre et respectueuse de votre vie privée. Il n&apos;utilise aucun cookie de traçage publicitaire ou marketing invasif.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
