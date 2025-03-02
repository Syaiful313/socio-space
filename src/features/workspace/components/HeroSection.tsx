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
    <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex max-w-3xl flex-col items-start">
            <p className="text-base font-light text-gray-700 sm:text-lg md:text-xl">
              Tailored Spaces for Every Workstyle
            </p>
            <h1 className="mb-4 text-2xl leading-tight text-gray-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-7xl">
              Explore Our Versatile Co-Working Environments
            </h1>
            <p className="mb-6 text-sm font-light sm:mb-8 sm:text-base md:text-lg">
              From private offices to open, collaborative hubs, Socio Space
              offers an array of thoughtfully designed workspaces. Find the
              perfect space that adapts to your unique needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-0">
          <div className="mt-8 flex gap-4 sm:mt-12 md:mt-16 lg:mt-20">
            <Button
              className="rounded-full p-3 text-xl transition-transform hover:scale-x-105 sm:text-3xl md:text-4xl lg:text-5xl min-w-[44px] min-h-[44px] flex items-center justify-center"
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
              className="rounded-full p-3 text-xl transition-transform hover:scale-x-105 sm:text-3xl md:text-4xl lg:text-5xl min-w-[44px] min-h-[44px] flex items-center justify-center"
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
              className="rounded-full p-3 text-xl transition-transform hover:scale-x-105 sm:text-3xl md:text-4xl lg:text-5xl min-w-[44px] min-h-[44px] flex items-center justify-center"
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
              className="rounded-full p-3 text-xl transition-transform hover:scale-x-105 sm:text-3xl md:text-4xl lg:text-5xl min-w-[44px] min-h-[44px] flex items-center justify-center"
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
          <div className="mt-6 flex items-center sm:mt-12 md:mt-16 lg:mt-20">
            <Link
              href="#aboutSection"
              className="text-base font-light transition-transform hover:scale-x-105 sm:text-lg px-3 py-2 min-h-[44px] flex items-center"
              aria-label="Scroll to about section"
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