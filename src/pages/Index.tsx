import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FloorTilesCatalogue from "@/components/FloorTilesCatalogue";
import BrandsSection from "@/components/BrandsSection";
import CredentialsNote from "@/components/CredentialsNote";
import ShowroomSection from "@/components/ShowroomSection";
import EnquirySection from "@/components/EnquirySection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <BrandsSection />
      <CredentialsNote />
      <FloorTilesCatalogue />
      <ShowroomSection />
      <EnquirySection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
