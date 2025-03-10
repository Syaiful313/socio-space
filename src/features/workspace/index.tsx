import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import AboutSection from "../../app/AboutSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";

const WorkSpacePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <Marquee />
      <Footer />
    </main>
  );
};

export default WorkSpacePage;
