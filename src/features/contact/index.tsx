import TestimonialSection from "../../components/TestimonialSection";
import HeroSection from "./components/HeroSection";
import FAQSection from "./components/FaqSection";
import InformationSection from "./components/InformationSection";
import ContactSection from "./components/ContactSection";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <main>
      <HeroSection />
      <InformationSection />
      <ContactSection/>
      <TestimonialSection />
      <FAQSection />
      <Footer/>
    </main>
  );
};

export default ContactPage;
