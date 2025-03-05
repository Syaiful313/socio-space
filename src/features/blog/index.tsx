import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import React from "react";
import HeroSection from "./components/HeroSection";
import BlogSection from "./components/BlogSection";

const BlogPage = () => {
  return (
    <main>
      <HeroSection />
      <BlogSection />
      <Marquee />
      <Footer />
    </main>
  );
};

export default BlogPage;
