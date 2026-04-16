import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import BrandsSection from "@/components/BrandsSection";
import ShowroomSection from "@/components/ShowroomSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <BrandsSection />
      <ShowroomSection />
      <Footer />
    </div>
  );
};

export default Index;
