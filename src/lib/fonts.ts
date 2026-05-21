import { Inter, Space_Grotesk } from "next/font/google";

export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
