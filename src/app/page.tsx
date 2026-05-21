import HeroSection from "@/components/HeroSection";
import MarqueeDivider from "@/components/MarqueeDivider";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <MarqueeDivider />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
    </PageTransition>
  );
}
