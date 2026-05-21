import type { Metadata } from "next";
import { inter, spaceGrotesk } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Matéo Bonneton — Expert Digital Bouches-du-Rhône",
    template: "%s | Matéo Bonneton",
  },
  description:
    "Expert digital freelance dans les Bouches-du-Rhône. Création de sites web, gestion de réseaux sociaux et accompagnement digital à Marseille, Aix-en-Provence et en Provence.",
  keywords: [
    "expert digital Bouches-du-Rhône",
    "création site web Marseille",
    "création site web Aix-en-Provence",
    "freelance web 13",
    "gestion réseaux sociaux Marseille",
    "accompagnement digital Provence",
    "développeur web Provence",
  ],
  authors: [{ name: "Matéo Bonneton" }],
  creator: "Matéo Bonneton",
  metadataBase: new URL("https://mateo-bonneton.fr"),
  openGraph: {
    title: "Matéo Bonneton — Expert Digital Bouches-du-Rhône",
    description:
      "Le boost digital des entreprises de Provence. Création web, contenus, accompagnement.",
    url: "https://mateo-bonneton.fr",
    siteName: "Matéo Bonneton",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/bonneton_mateo_logo.png",
        width: 500,
        height: 500,
        alt: "Matéo Bonneton Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matéo Bonneton — Expert Digital Bouches-du-Rhône",
    description:
      "Le boost digital des entreprises de Provence. Création web, contenus, accompagnement.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} h-full`}>
      <head>
        <meta name="theme-color" content="#000000" />
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
