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
    <section className="bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex max-w-3xl flex-col items-start">
            <p className="text-base sm:text-lg md:text-xl font-light text-gray-700">
              Socio Space Services
            </p>
            <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-6xl uppercase text-gray-900 leading-tight">
              Tailored Solutions for Your Productivity and Success
            </h1>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg font-light">
              At Socio Space, we offer a diverse range of services, including
              premium workspaces and networking opportunities, tailored to
              enhance your co-working experience and drive professional growth
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 flex gap-1 sm:gap-2">
            <Button
              className="rounded-full text-xl sm:text-3xl md:text-4xl lg:text-5xl p-1 sm:p-2 transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
                <PiBehanceLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-xl sm:text-3xl md:text-4xl lg:text-5xl p-1 sm:p-2 transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
                <PiDribbbleLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-xl sm:text-3xl md:text-4xl lg:text-5xl p-1 sm:p-2 transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
                <PiInstagramLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-xl sm:text-3xl md:text-4xl lg:text-5xl p-1 sm:p-2 transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
                <PiTwitterLogoLight />
              </Link>
            </Button>
          </div>
          <div className="mt-6 sm:mt-12 md:mt-16 lg:mt-20 flex items-center">
            <Link
              href="#workingSpaces"
              className="text-base sm:text-lg font-light transition-transform hover:scale-x-105"
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