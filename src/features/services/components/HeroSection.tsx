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
              Socio Space Services
            </p>
            <h1 className="mb-4 text-2xl uppercase leading-tight text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl lg:text-6xl">
              Tailored Solutions for Your Productivity and Success
            </h1>
            <p className="mb-6 text-sm font-light sm:mb-8 sm:text-base md:text-lg">
              At Socio Space, we offer a diverse range of services, including
              premium workspaces and networking opportunities, tailored to
              enhance your co-working experience and drive professional growth
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-0">
          <div className="mt-8 flex gap-1 sm:mt-12 sm:gap-2 md:mt-16 lg:mt-20">
            <Button
              className="rounded-full p-1 text-xl transition-transform hover:scale-x-105 sm:p-2 sm:text-3xl md:text-4xl lg:text-5xl"
              variant="outline"
              aria-label="Behance"
            >
              <Link href="/" aria-label="Behance">
                <PiBehanceLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full p-1 text-xl transition-transform hover:scale-x-105 sm:p-2 sm:text-3xl md:text-4xl lg:text-5xl"
              variant="outline"
              aria-label="Dribbble"
            >
              <Link href="/" aria-label="Dribbble">
                <PiDribbbleLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full p-1 text-xl transition-transform hover:scale-x-105 sm:p-2 sm:text-3xl md:text-4xl lg:text-5xl"
              variant="outline"
              aria-label="Instagram"
            >
              <Link href="/" aria-label="Instagram">
                <PiInstagramLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full p-1 text-xl transition-transform hover:scale-x-105 sm:p-2 sm:text-3xl md:text-4xl lg:text-5xl"
              variant="outline"
              aria-label="Twitter"
            >
              <Link href="/" aria-label="Twitter">
                <PiTwitterLogoLight />
              </Link>
            </Button>
          </div>
          <div className="mt-6 flex items-center sm:mt-12 md:mt-16 lg:mt-20">
            <Link
              href="#workingSpaces"
              className="text-base font-light transition-transform hover:scale-x-105 sm:text-lg"
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
