import HeroSection from "./components/HeroSection";
import CoWorkingSpacesSection from "./components/CoWorkingSpacesSection";
import PremiumAmenitiesSection from "./components/PremiumAmenitiesSection";
import BookYourSpaceSection from "./components/BookYourSpaceSection";
import BlogInsightsSection from "./components/BlogInsightsSection";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <CoWorkingSpacesSection />
      <PremiumAmenitiesSection />
      <BookYourSpaceSection />
      <BlogInsightsSection />
      <Marquee/>
      <Footer/>
    </main>
  );
};

export default HomePage;
