"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  PiBehanceLogoLight,
  PiDribbbleLogoLight,
  PiInstagramLogoLight,
  PiTwitterLogoLight,
} from "react-icons/pi";

const HeroSection = () => {
  return (
    <section className="bg-white px-4 py-6 md:px-20 md:py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex max-w-4xl flex-col items-start">
            <p className="mb-2 text-base font-light text-gray-700 md:text-xl">
              Explore Our Latest Articles
            </p>
            <h1 className="mb-4 text-2xl uppercase text-gray-900 md:mb-6 md:text-3xl lg:text-6xl">
              Stay Informed and Inspired
            </h1>
            <p className="mb-6 text-base md:mb-8 md:text-lg">
              Welcome to our blog, where we share insights, tips, and stories on
              co-working, productivity, entrepreneurship, and more. Stay
              up-to-date with industry trends, get inspired, and enhance your
              professional journey through our informative and engaging
              articles.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="mt-8 flex gap-4 md:mt-20">
            <Button
              className="rounded-full text-3xl transition-transform hover:scale-x-105 md:text-4xl lg:text-5xl p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
              variant="outline"
              aria-label="Behance"
            >
              <Link 
                href="/" 
                aria-label="Behance"
                className="w-full h-full flex items-center justify-center"
              >
                <PiBehanceLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-3xl transition-transform hover:scale-x-105 md:text-4xl lg:text-5xl p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
              variant="outline"
              aria-label="Dribbble"
            >
              <Link 
                href="/" 
                aria-label="Dribbble"
                className="w-full h-full flex items-center justify-center"
              >
                <PiDribbbleLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-3xl transition-transform hover:scale-x-105 md:text-4xl lg:text-5xl p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
              variant="outline"
              aria-label="Instagram"
            >
              <Link 
                href="/" 
                aria-label="Instagram"
                className="w-full h-full flex items-center justify-center"
              >
                <PiInstagramLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-3xl transition-transform hover:scale-x-105 md:text-4xl lg:text-5xl p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
              variant="outline"
              aria-label="Twitter"
            >
              <Link 
                href="/" 
                aria-label="Twitter"
                className="w-full h-full flex items-center justify-center"
              >
                <PiTwitterLogoLight />
              </Link>
            </Button>
          </div>
          <div className="mt-6 flex items-center md:mt-20">
            <Link
              href="#blog"
              className="text-base font-light transition-transform hover:scale-x-105 md:text-lg px-3 py-2"
              aria-label="Scroll to blog section"
            >
              <p>Scroll to Explore</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;