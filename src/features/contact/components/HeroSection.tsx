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
    <section className="py-8 md:py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex max-w-3xl flex-col items-start">
            <p className="text-base md:text-lg font-light text-gray-700">
              Get in Touch with Us
            </p>
            <h1 className="my-4 md:my-6 text-2xl md:text-3xl lg:text-5xl uppercase text-gray-900">
              Ready to Join Socio Space?
            </h1>
            <p className="mb-6 md:mb-8 text-base md:text-lg font-light">
              Have questions or ready to take the next step? Reach out to us.
              We're here to help you on your journey to a more dynamic and
              productive workspace.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <div className="mt-8 md:mt-20 flex gap-4">
            <Button
              className="rounded-full text-3xl md:text-4xl lg:text-5xl transition-transform hover:scale-x-105 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
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
              className="rounded-full text-3xl md:text-4xl lg:text-5xl transition-transform hover:scale-x-105 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
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
              className="rounded-full text-3xl md:text-4xl lg:text-5xl transition-transform hover:scale-x-105 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
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
              className="rounded-full text-3xl md:text-4xl lg:text-5xl transition-transform hover:scale-x-105 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;