import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FloorTilesCatalogue from "@/components/FloorTilesCatalogue";
import BrandsSection from "@/components/BrandsSection";
import ShowroomSection from "@/components/ShowroomSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <FloorTilesCatalogue />
      <BrandsSection />
      <ShowroomSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
