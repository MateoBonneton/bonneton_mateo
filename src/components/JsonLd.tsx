interface JsonLdProps {
  type?: "LocalBusiness" | "ProfessionalService" | "WebPage";
  name?: string;
  description?: string;
  url?: string;
  serviceType?: string;
}

export default function JsonLd({
  type = "LocalBusiness",
  name = "Matéo Bonneton — Expert Digital",
  description = "Expert digital freelance dans les Bouches-du-Rhône. Création de sites web, gestion de réseaux sociaux et accompagnement digital en Provence.",
  url = "https://mateo-bonneton.fr",
  serviceType,
}: JsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": [type, "ProfessionalService"],
    name,
    description,
    url,
    logo: `${url}/images/bonneton_mateo_logo.png`,
    image: `${url}/images/bonneton_mateo_logo.png`,
    priceRange: "€€",
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Bouches-du-Rhône",
      },
      {
        "@type": "City",
        name: "Marseille",
      },
      {
        "@type": "City",
        name: "Aix-en-Provence",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Provence-Alpes-Côte d'Azur",
      addressLocality: "Bouches-du-Rhône",
      postalCode: "13",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.2965,
      longitude: 5.3698,
    },
    knowsLanguage: ["fr", "en"],
    ...(serviceType && { serviceType }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
