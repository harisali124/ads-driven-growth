import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyMeSection } from "@/components/WhyMeSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CaseStudiesSection />
        <CertificationsSection />
        <ServicesSection />
        <WhyMeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
