import {
  Globe,
  FileText,
  Compass,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "creation-web-bouches-du-rhone",
    title: "Création Web — Bouches-du-Rhône",
    shortTitle: "Sites Web",
    description:
      "Conception et développement de sites web performants, optimisés pour le référencement local dans les Bouches-du-Rhône. Sites vitrines, e-commerce et applications web sur mesure.",
    metaDescription:
      "Expert en création de sites web dans les Bouches-du-Rhône. Sites vitrines, e-commerce et applications web sur mesure à Marseille, Aix-en-Provence et alentours.",
    keywords: [
      "création site web Marseille",
      "développeur web Aix-en-Provence",
      "création site internet Bouches-du-Rhône",
      "agence web 13",
      "freelance web Marseille",
    ],
    icon: Globe,
    features: [
      "Sites vitrines & landing pages",
      "E-commerce & boutiques en ligne",
      "Applications web sur mesure",
      "Responsive design & mobile-first",
      "Optimisation SEO technique",
      "Hébergement & déploiement",
    ],
  },
  {
    slug: "gestion-reseaux-sociaux-marseille",
    title: "Gestion Réseaux Sociaux — Marseille",
    shortTitle: "Contenus",
    description:
      "Stratégie et gestion de vos réseaux sociaux à Marseille et en Provence. Création de contenus engageants, planification éditoriale et community management.",
    metaDescription:
      "Gestion professionnelle de vos réseaux sociaux à Marseille. Stratégie de contenu, community management et création visuelle pour entreprises en Provence.",
    keywords: [
      "gestion réseaux sociaux Marseille",
      "community manager Provence",
      "contenu digital Bouches-du-Rhône",
      "social media manager 13",
      "création contenu Aix-en-Provence",
    ],
    icon: FileText,
    features: [
      "Stratégie social media",
      "Création de contenus visuels",
      "Planification éditoriale",
      "Community management",
      "Reporting & analytics",
      "Publicités sponsorisées",
    ],
  },
  {
    slug: "accompagnement-digital-provence",
    title: "Accompagnement Digital — Provence",
    shortTitle: "Accompagnement",
    description:
      "Accompagnement digital sur mesure pour les entreprises de Provence. Audit, stratégie, formation et coaching pour accélérer votre transformation numérique.",
    metaDescription:
      "Accompagnement digital en Provence : audit, stratégie, formation et coaching. Accélérez la transformation numérique de votre entreprise dans les Bouches-du-Rhône.",
    keywords: [
      "accompagnement digital Provence",
      "consultant digital Bouches-du-Rhône",
      "coaching digital Marseille",
      "transformation numérique 13",
      "expert digital Aix-en-Provence",
    ],
    icon: Compass,
    features: [
      "Audit digital complet",
      "Stratégie de croissance",
      "Formation & coaching",
      "Analyse de la concurrence",
      "Plan d'action personnalisé",
      "Suivi & optimisation continue",
    ],
  },
  {
    slug: "maintenance-evolutive-web",
    title: "Maintenance Évolutive Web",
    shortTitle: "Maintenance",
    description:
      "Service de maintenance évolutive pour garantir la performance, la sécurité et l'évolution continue de votre site web. Mises à jour, sauvegardes et support technique.",
    metaDescription:
      "Maintenance évolutive de sites web : mises à jour, sécurité, sauvegardes et support technique. Freelance web spécialisé dans les Bouches-du-Rhône.",
    keywords: [
      "maintenance site web",
      "maintenance évolutive",
      "support technique web Marseille",
      "mise à jour site internet",
      "freelance maintenance web 13",
    ],
    icon: Wrench,
    features: [
      "Mises à jour régulières",
      "Sauvegardes automatiques",
      "Monitoring & sécurité",
      "Corrections de bugs",
      "Évolutions fonctionnelles",
      "Support technique réactif",
    ],
  },
];
