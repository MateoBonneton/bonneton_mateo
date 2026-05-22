"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Shield, Check, X } from "lucide-react";
import Link from "next/link";

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [consentAnalytics, setConsentAnalytics] = useState(true);

  // Load Google Analytics dynamically if consented
  const injectGA = (measurementId: string) => {
    if (!measurementId || measurementId === "G-XXXXXXXXXX") {
      console.log(
        "ℹ️ Google Analytics (Cookie Consent) : Consentement accordé. Configurez NEXT_PUBLIC_GA_ID dans vos variables d'environnement pour activer le suivi réel."
      );
      return;
    }

    try {
      // Prevents duplicate injection
      if (document.getElementById("google-analytics-script")) return;

      const scriptUrl = document.createElement("script");
      scriptUrl.id = "google-analytics-script";
      scriptUrl.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      scriptUrl.async = true;
      document.head.appendChild(scriptUrl);

      const scriptConfig = document.createElement("script");
      scriptConfig.id = "google-analytics-config";
      scriptConfig.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}', { 'anonymize_ip': true });
      `;
      document.head.appendChild(scriptConfig);
      console.log("✅ Google Analytics injecté avec succès.");
    } catch (error) {
      console.error("❌ Erreur lors de l'injection de Google Analytics:", error);
    }
  };

  useEffect(() => {
    // Check if user has already made a choice
    const consentStatus = localStorage.getItem("cookie-consent-status");
    const analyticsChoice = localStorage.getItem("cookie-consent-analytics");

    if (!consentStatus) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }

    // If already consented to analytics, inject GA
    if (
      consentStatus === "accepted" ||
      (consentStatus === "customized" && analyticsChoice === "true")
    ) {
      const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";
      injectGA(gaId);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent-status", "accepted");
    localStorage.setItem("cookie-consent-analytics", "true");
    setConsentAnalytics(true);
    setIsOpen(false);

    const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";
    injectGA(gaId);
  };

  const handleRefuseAll = () => {
    localStorage.setItem("cookie-consent-status", "rejected");
    localStorage.setItem("cookie-consent-analytics", "false");
    setConsentAnalytics(false);
    setIsOpen(false);
    console.log("🚫 Cookies statistiques refusés. Aucun script de suivi n'est chargé.");
  };

  const handleSaveCustom = () => {
    localStorage.setItem("cookie-consent-status", "customized");
    localStorage.setItem("cookie-consent-analytics", consentAnalytics.toString());
    setIsOpen(false);

    if (consentAnalytics) {
      const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";
      injectGA(gaId);
    } else {
      console.log("🚫 Cookies statistiques refusés par personnalisation.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-6 right-6 z-[9990] flex w-[calc(100vw-3rem)] flex-col border border-grid-line-strong bg-[#0d0d0e] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] sm:max-w-[440px]"
        >
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield size={16} strokeWidth={1.5} className="text-white" />
              <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.3em] text-white">
                Confidentialité & Cookies
              </span>
            </div>
            <button
              onClick={handleRefuseAll}
              className="text-text-dim transition-colors hover:text-white"
              title="Fermer et refuser tout"
              aria-label="Fermer et refuser tout"
            >
              <X size={16} strokeWidth={1.5} />
            </button>
          </div>

          {/* Body */}
          <div className="mb-6">
            {!showCustomizer ? (
              <p className="text-xs leading-relaxed text-text-muted">
                Pour optimiser votre expérience, assurer le bon fonctionnement du formulaire de contact, 
                et analyser la fréquentation via Google Analytics, ce site utilise des cookies. 
                Vous pouvez accepter, refuser, ou personnaliser vos choix à tout moment.
              </p>
            ) : (
              <div className="space-y-4 py-2">
                <p className="text-[11px] leading-relaxed text-text-dim mb-2">
                  Sélectionnez les catégories de traceurs que vous acceptez d&apos;activer :
                </p>

                {/* Necessary cookies */}
                <div className="flex items-start justify-between border-b border-grid-line pb-3">
                  <div className="pr-4">
                    <h4 className="font-heading text-[11px] font-bold uppercase tracking-[0.1em] text-white mb-0.5">
                      1. Nécessaires & Formulaires
                    </h4>
                    <p className="text-[10px] leading-relaxed text-text-dim">
                      Indispensables pour la sécurité du site, la mémorisation de vos choix et l&apos;envoi sécurisé du formulaire de contact.
                    </p>
                  </div>
                  <div 
                    className="flex h-5 w-5 shrink-0 items-center justify-center border border-white/20 bg-white/5 text-white/40 cursor-not-allowed select-none"
                    aria-label="Cookies nécessaires toujours activés"
                  >
                    <Check size={12} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Analytics cookies */}
                <div className="flex items-start justify-between pb-1">
                  <div className="pr-4">
                    <h4 className="font-heading text-[11px] font-bold uppercase tracking-[0.1em] text-white mb-0.5">
                      2. Mesure d&apos;audience (Google Analytics)
                    </h4>
                    <p className="text-[10px] leading-relaxed text-text-dim">
                      Permet d&apos;analyser les visites, de comprendre d&apos;où viennent nos visiteurs et d&apos;améliorer la vitesse et les performances du site.
                    </p>
                  </div>
                  <button
                    onClick={() => setConsentAnalytics(!consentAnalytics)}
                    className={`flex h-5 w-5 shrink-0 items-center justify-center border transition-all duration-200 cursor-pointer bg-black ${
                      consentAnalytics ? "border-white bg-white text-black" : "border-white/20 hover:border-white"
                    }`}
                    role="checkbox"
                    aria-checked={consentAnalytics}
                    aria-label="Activer ou désactiver Google Analytics"
                  >
                    {consentAnalytics && <Check size={12} strokeWidth={2.5} />}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer actions */}
          <div className="flex flex-col gap-3">
            {!showCustomizer ? (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="w-full bg-white py-2.5 text-center font-heading text-[10px] font-bold uppercase tracking-[0.15em] text-black transition-colors duration-300 hover:bg-white/90"
                  >
                    Accepter tout
                  </button>
                  <button
                    onClick={handleRefuseAll}
                    className="w-full border border-white/20 bg-transparent py-2.5 text-center font-heading text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-white hover:bg-white/[0.03]"
                  >
                    Refuser tout
                  </button>
                </div>
                <div className="flex items-center justify-between text-[10px]">
                  <button
                    onClick={() => setShowCustomizer(true)}
                    className="inline-flex items-center gap-1.5 font-heading font-semibold uppercase tracking-[0.1em] text-text-dim transition-colors hover:text-white"
                  >
                    <Settings size={12} strokeWidth={1.5} />
                    <span>Personnaliser</span>
                  </button>
                  <Link
                    href="/mentions-legales#confidentialite"
                    className="font-heading font-semibold uppercase tracking-[0.1em] text-text-dim transition-colors hover:text-white underline"
                  >
                    Politique de confidentialité
                  </Link>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={handleSaveCustom}
                  className="w-full bg-white py-2.5 text-center font-heading text-[10px] font-bold uppercase tracking-[0.15em] text-black transition-colors duration-300 hover:bg-white/90"
                >
                  Enregistrer mes choix
                </button>
                <div className="flex items-center justify-between text-[10px]">
                  <button
                    onClick={() => setShowCustomizer(false)}
                    className="font-heading font-semibold uppercase tracking-[0.1em] text-text-dim transition-colors hover:text-white underline"
                  >
                    Retour aux options rapides
                  </button>
                  <Link
                    href="/mentions-legales#confidentialite"
                    className="font-heading font-semibold uppercase tracking-[0.1em] text-text-dim transition-colors hover:text-white underline"
                  >
                    Politique de confidentialité
                  </Link>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
