import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisiMisiSection from "@/components/VisiMisiSection";
import TeachersSection from "@/components/TeachersSection";
import CurriculumSection from "@/components/CurriculumSection";
import PPDBSection from "@/components/PPDBSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisiMisiSection />
      <TeachersSection />
      <CurriculumSection />
      <PPDBSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
