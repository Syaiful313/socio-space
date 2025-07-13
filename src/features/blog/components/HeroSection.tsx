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
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-3 text-3xl transition-transform hover:scale-x-105 md:text-4xl lg:text-5xl"
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
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-3 text-3xl transition-transform hover:scale-x-105 md:text-4xl lg:text-5xl"
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
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-3 text-3xl transition-transform hover:scale-x-105 md:text-4xl lg:text-5xl"
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
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-3 text-3xl transition-transform hover:scale-x-105 md:text-4xl lg:text-5xl"
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
          <div className="mt-6 flex items-center gap-4 md:mt-20">
            <Link
              href="#blog"
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
