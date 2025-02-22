import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";

const WorkSpacePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <Marquee/>
      <Footer/>
    </div>
  );
};

export default WorkSpacePage;
