import HeroSection from "./components/HeroSection";
import CoWorkingSpacesSection from "./components/CoWorkingSpacesSection";
import PremiumAmenitiesSection from "./components/PremiumAmenitiesSection";
import BookYourSpaceSection from "./components/BookYourSpaceSection";
import BlogInsightsSection from "./components/BlogInsightsSection";

const HomePage = () => {
  return (
    <section>
      <HeroSection />
      <CoWorkingSpacesSection />
      <PremiumAmenitiesSection />
      <BookYourSpaceSection />
      <BlogInsightsSection />
    </section>
  );
};

export default HomePage;
