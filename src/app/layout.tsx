import type { Metadata } from "next";
import { inter, spaceGrotesk } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Matéo Bonneton - Expert Digital Bouches-du-Rhône",
    template: "%s | Matéo Bonneton",
  },
  description:
    "Expert digital freelance dans les Bouches-du-Rhône (Martigues, Istres, Fos-sur-Mer, Marseille). Création de sites web sur mesure, création de contenu (photo & vidéo), coaching vers l'autonomie et maintenance.",
  keywords: [
    "expert digital Bouches-du-Rhône",
    "création site web Martigues",
    "création site internet Istres",
    "développeur web Fos-sur-Mer",
    "création site web Marseille",
    "community manager Martigues",
    "freelance web Bouches-du-Rhône",
    "coaching digital Istres",
  ],
  authors: [{ name: "Matéo Bonneton" }],
  creator: "Matéo Bonneton",
  metadataBase: new URL("https://mateo-bonneton.fr"),
  openGraph: {
    title: "Matéo Bonneton - Expert Digital Bouches-du-Rhône",
    description:
      "Le boost digital des entreprises de Provence. Création web, création de contenu, coaching & autonomie.",
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
    title: "Matéo Bonneton - Expert Digital Bouches-du-Rhône",
    description:
      "Le boost digital des entreprises de Provence. Création web, création de contenu, coaching & autonomie.",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
