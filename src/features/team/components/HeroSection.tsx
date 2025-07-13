"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  PiArrowDownRight,
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
              Meet Our Team
            </p>
            <h1 className="mb-4 text-2xl uppercase leading-tight text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl lg:text-6xl">
              Passionate Professionals Driving Innovation
            </h1>
            <p className="mb-6 text-sm font-light sm:mb-8 sm:text-base md:text-lg">
              Get to know the talented individuals behind Socio Space. Our
              diverse team of experts brings together creativity, expertise, and
              dedication to create exceptional co-working experiences and foster
              professional growth.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-0">
          <div className="mt-8 flex gap-4 sm:mt-12 md:mt-16 lg:mt-20">
            <Button
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-3 text-xl transition-transform hover:scale-x-105 sm:text-3xl md:text-4xl lg:text-5xl"
              variant="outline"
              aria-label="Behance"
            >
              <Link
                href="/"
                aria-label="Behance"
                className="flex h-full w-full items-center justify-center"
              >
                <PiBehanceLogoLight />
              </Link>
            </Button>
            <Button
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-3 text-xl transition-transform hover:scale-x-105 sm:text-3xl md:text-4xl lg:text-5xl"
              variant="outline"
              aria-label="Dribbble"
            >
              <Link
                href="/"
                aria-label="Dribbble"
                className="flex h-full w-full items-center justify-center"
              >
                <PiDribbbleLogoLight />
              </Link>
            </Button>
            <Button
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-3 text-xl transition-transform hover:scale-x-105 sm:text-3xl md:text-4xl lg:text-5xl"
              variant="outline"
              aria-label="Instagram"
            >
              <Link
                href="/"
                aria-label="Instagram"
                className="flex h-full w-full items-center justify-center"
              >
                <PiInstagramLogoLight />
              </Link>
            </Button>
            <Button
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-3 text-xl transition-transform hover:scale-x-105 sm:text-3xl md:text-4xl lg:text-5xl"
              variant="outline"
              aria-label="Twitter"
            >
              <Link
                href="/"
                aria-label="Twitter"
                className="flex h-full w-full items-center justify-center"
              >
                <PiTwitterLogoLight />
              </Link>
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-4 sm:mt-12 md:mt-16 lg:mt-20">
            <Link
              href="#team"
              className="group relative flex h-6 items-center overflow-hidden sm:h-7 md:h-8"
            >
              <p className="text-base font-light transition-transform duration-300 ease-in-out group-hover:-translate-y-full sm:text-lg md:text-xl">
                Scroll to Explore
              </p>
              <p className="absolute translate-y-full text-base font-light transition-transform duration-300 ease-in-out group-hover:translate-y-0 sm:text-lg md:text-xl">
                Scroll to Explore
              </p>
            </Link>
            <PiArrowDownRight className="text-xl md:text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
