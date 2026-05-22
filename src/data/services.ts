import {
  Globe,
  ShoppingBag,
  Camera,
  GraduationCap,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Project {
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  icon: LucideIcon;
  features: string[];
  projects: Project[];
}

export const services: Service[] = [
  {
    slug: "site-vitrine-bouches-du-rhone",
    title: "Création de Site Vitrine sur Mesure : Martigues, Istres, Marseille",
    shortTitle: "Site Vitrine",
    description:
      "Valorisez votre savoir-faire et captez de nouveaux clients en Provence grâce à un site vitrine haut de gamme et performant. Idéal pour les artisans, PME, commerçants et professions libérales de Martigues, Istres, Fos-sur-Mer et Marseille, je conçois des sites vitrines uniques qui reflètent parfaitement votre image de marque, optimisés pour un chargement instantané sur mobile et structurés pour un référencement naturel (SEO) local ultra-compétitif.",
    metaDescription:
      "Création de site vitrine sur mesure pour artisans, commerçants et PME à Martigues, Istres, Fos et Marseille. Boostez votre visibilité locale en Provence.",
    keywords: [
      "site vitrine Martigues",
      "création site vitrine Istres",
      "site vitrine sur mesure Marseille",
      "développeur site vitrine Fos-sur-Mer",
      "conception site vitrine Bouches-du-Rhône",
      "site internet vitrine Salon-de-Provence",
      "freelance site vitrine Marseille",
      "création site vitrine 13",
    ],
    icon: Globe,
    features: [
      "Design sur mesure, élégant et adapté à votre image de marque",
      "Optimisation SEO locale (Google Maps, mots-clés stratégiques et optimisés)",
      "Structure 100% responsive et mobile-first fluide",
      "Optimisation des performances & vitesse de chargement optimale",
      "Respect rigoureux des normes légales & conformité RGPD intégrée",
      "Formulaire de contact sécurisé et liens réseaux sociaux",
    ],
    projects: [
      {
        title: "Site Vitrine WashNGo13",
        client: "Centre de Lavage Automobile (Martigues)",
        category: "Site Vitrine & Référencement",
        description: "Création complète d'un site vitrine moderne et performant pour un centre de lavage auto. Design moderne, responsive et optimisé pour le référencement local.",
        image: "/images/washngo-v2.png",
      },
      {
        title: "Site Artistica Dalbe",
        client: "Magasin de Matériel Artistique (Marseille)",
        category: "Intégration WordPress & Design",
        description: "Création du site internet d'un magasin de matériel artistique pendant mon stage. Du cahier des charges à l'intégration WordPress sous Elementor.",
        image: "/images/siteartistica.png",
      },
    ],
  },
  {
    slug: "site-ecommerce-bouches-du-rhone",
    title: "Création de Site E-Commerce sur Mesure : Martigues, Istres, Marseille",
    shortTitle: "Site E-Commerce",
    description:
      "Propulsez vos ventes en ligne 24h/24 et 7j/7 avec une boutique en ligne sur mesure, sécurisée et pensée pour maximiser les conversions. Que vous soyez un commerce physique à Martigues, Istres, Fos-sur-Mer ou un projet e-commerce d'envergure à Marseille, je développe des plateformes de vente performantes (WooCommerce, Shopify ou solutions entièrement sur mesure). Offrez à vos clients une expérience d'achat fluide, des paiements sécurisés et un tunnel de commande optimisé.",
    metaDescription:
      "Création de site e-commerce et boutique en ligne sur mesure à Martigues, Istres, Fos et Marseille. Sécurisé, performant et optimisé pour vos ventes en ligne.",
    keywords: [
      "site e-commerce Martigues",
      "création boutique en ligne Istres",
      "développeur e-commerce Marseille",
      "site marchand sur mesure Fos-sur-Mer",
      "création site e-commerce Marseille",
      "boutique en ligne Bouches-du-Rhône",
      "freelance e-commerce Istres",
      "site de vente en ligne Martigues",
    ],
    icon: ShoppingBag,
    features: [
      "Boutique en ligne complète et évolutive (Shopify, WooCommerce, Custom)",
      "Tunnel de commande (Checkout) simplifié et ultra-rapide",
      "Paiements en ligne 100% sécurisés (Stripe, PayPal, CB)",
      "Gestion autonome des stocks, des produits et des commandes",
      "Calcul automatique des frais de port (Colissimo, Mondial Relay)",
      "Optimisation SEO pour les moteurs de recherche et fiches produits",
    ],
    projects: [],
  },
  {
    slug: "gestion-reseaux-sociaux-marseille",
    title: "Création de Contenu & Réseaux Sociaux : Martigues, Istres, Marseille",
    shortTitle: "Création de contenu",
    description:
      "Propulsez votre marque grâce à une production visuelle de haut niveau et une stratégie sociale impactante en Provence. Je prends en charge la totalité de votre écosystème créatif : Photographie professionnelle de vos produits et équipes, Prise de Vidéo et montage captivant (Reels, TikTok, Shorts), Montage de vos propres vidéos (rushs clients) pour un rendu professionnel, et Community Management complet. De l'imagination des concepts à la publication et gestion active de vos comptes, je transforme vos réseaux en véritables générateurs d'opportunités à Martigues, Istres, Fos-sur-Mer et Marseille.",
    metaDescription:
      "Photographie, prise de vidéo, montage et community management à Martigues, Istres et Marseille. De la création de contenu à la gestion de vos réseaux sociaux.",
    keywords: [
      "community manager Martigues",
      "création de contenu Istres",
      "photographe professionnel Fos-sur-Mer",
      "montage vidéo Marseille",
      "gestion réseaux sociaux Martigues",
      "vidéaste freelance Bouches-du-Rhône",
      "production vidéo Istres",
      "montage vidéo client Martigues",
      "community manager Marseille",
    ],
    icon: Camera,
    features: [
      "Photographie professionnelle sur site (produits, locaux, portraits)",
      "Prise de vidéo & montage dynamique (Reels, TikTok, YouTube)",
      "Post-production & montage de vos propres rushs vidéos",
      "Community management stratégique (Instagram, TikTok, LinkedIn)",
      "De l'imagination et l'écriture des concepts à la publication",
      "Identité visuelle des feeds & modération de communauté",
    ],
    projects: [
      {
        title: "DJ Set SOFA",
        client: "Collectif SOFA (Marseille)",
        category: "Captation & Post-Production Vidéo",
        description: "Captation vidéo multicam d'un DJ set d'une heure. Cadrage haute définition, étalonnage colorimétrique professionnel, calibration audio et création de la miniature YouTube.",
        image: "/images/sofa.png",
      },
      {
        title: "Contenus Artistica Dalbe",
        client: "Magasin Artistique (Marseille)",
        category: "Community Management",
        description: "Création de contenus complets pour les réseaux sociaux : stories, reels, TikToks, posts Instagram pour booster la visibilité de la marque.",
        image: "/images/contenus_artistica.png",
      },
      {
        title: "Vidéo Promotionnelle Canalx",
        client: "Canalx Basket (Marseille)",
        category: "Montage Vidéo Promotionnelle",
        description: "Réalisation d'une vidéo promotionnelle rythmée et percutante avec intégration d'effets visuels et de design sonore.",
        image: "/images/nvlancanalx.png",
      },
      {
        title: "Logo WashNGo13",
        client: "WashNGo13 (Martigues)",
        category: "Identité Visuelle & Branding",
        description: "Création complète de la charte graphique, du logo vectoriel et des déclinaisons pour l'enseigne physique et les supports de communication.",
        image: "/images/logowashngo.png",
      },
    ],
  },
  {
    slug: "accompagnement-digital-provence",
    title: "Coaching & Formation sur Mesure : Devenir Autonome",
    shortTitle: "Coaching & Autonomie",
    description:
      "Bénéficiez d'un accompagnement sur le long terme et sur mesure dans les Bouches-du-Rhône (Martigues, Istres, Fos, Marseille) pour apprendre à utiliser tous vos outils numériques. Fini les formations théoriques inutiles : nous travaillons ensemble via des exercices pratiques et un apprentissage pédagogique adapté à votre rythme et vos objectifs. Apprenez à concevoir vos visuels (Design avec Canva/Figma), à réaliser vos montages vidéo (CapCut, Premiere), à piloter votre site internet (CMS) et maîtrisez votre communication digitale pour devenir 100% autonome et confiant.",
    metaDescription:
      "Accompagnement et formation sur mesure à Martigues, Istres et Marseille. Apprenez le design, le montage vidéo et les CMS grâce à un coaching pratique pour devenir autonome.",
    keywords: [
      "coaching digital Istres",
      "formation outils digitaux Martigues",
      "apprendre montage vidéo Fos-sur-Mer",
      "formation figma canva Marseille",
      "accompagnement autonome web Bouches-du-Rhône",
      "devenir autonome internet Istres",
      "cours montage vidéo Martigues",
      "coaching réseaux sociaux Marseille",
      "formation CMS Istres",
    ],
    icon: GraduationCap,
    features: [
      "Accompagnement individuel & sur le long terme",
      "Formation au Design & identité de marque (Canva, Figma)",
      "Apprentissage pratique du Montage Vidéo (CapCut, Premiere)",
      "Prise en main autonome de votre site web & CMS",
      "Exercices pratiques adaptés à vos réels besoins d'activité",
      "Pédagogie active & écoute pour dépasser les blocages techniques",
    ],
    projects: [],
  },
  {
    slug: "maintenance-evolutive-web",
    title: "Maintenance Évolutive & Support Web : Bouches-du-Rhône",
    shortTitle: "Maintenance",
    description:
      "Assurez la pérennité, la sécurité absolue et l'évolution permanente de votre outil de travail en ligne. Je propose plusieurs forfaits flexibles de maintenance pour maintenir votre site web parfaitement à jour techniquement, corriger les bugs instantanément, surveiller la sécurité contre les piratages et optimiser vos pages de jour en jour pour améliorer vos performances SEO à Martigues, Istres, Fos-sur-Mer, Marseille et dans toute la Provence.",
    metaDescription:
      "Forfaits de maintenance de sites internet à Martigues, Istres, Marseille et Bouches-du-Rhône. Mises à jour, sécurité et améliorations continues.",
    keywords: [
      "maintenance site web Martigues",
      "support technique internet Istres",
      "mise à jour site web Fos-sur-Mer",
      "maintenance site wordpress Marseille",
      "forfait maintenance web Bouches-du-Rhône",
      "sécurité site internet Salon-de-Provence",
      "freelance maintenance site Istres",
      "dépannage site internet Marseille",
    ],
    icon: Wrench,
    features: [
      "Mises à jour régulières du système, des extensions et dépendances",
      "Sauvegardes de sécurité quotidiennes externalisées",
      "Monitoring de sécurité 24/7 contre les attaques & piratages",
      "Améliorations continues de l'UX, du design et du SEO local",
      "Correction ultra-rapide de bugs & assistance technique",
      "Plusieurs forfaits sans engagement adaptés aux PME et artisans",
    ],
    projects: [],
  },
];
