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
    <section className="bg-white py-6 px-4 md:py-12 md:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex max-w-4xl flex-col items-start">
            <p className="mb-2 text-base md:text-xl font-light text-gray-700">
              Explore Our Latest Articles
            </p>
            <h1 className="mb-4 md:mb-6 text-2xl md:text-3xl lg:text-6xl uppercase text-gray-900">
              Stay Informed and Inspired
            </h1>
            <p className="mb-6 md:mb-8 text-base md:text-lg">
              Welcome to our blog, where we share insights, tips, and stories on
              co-working, productivity, entrepreneurship, and more. Stay
              up-to-date with industry trends, get inspired, and enhance your
              professional journey through our informative and engaging
              articles.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="mt-8 md:mt-20 flex gap-2">
            <Button
              className="rounded-full text-3xl md:text-4xl lg:text-5xl transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
                <PiBehanceLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-3xl md:text-4xl lg:text-5xl transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
                <PiDribbbleLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-3xl md:text-4xl lg:text-5xl transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
                <PiInstagramLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-3xl md:text-4xl lg:text-5xl transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
                <PiTwitterLogoLight />
              </Link>
            </Button>
          </div>
          <div className="mt-6 md:mt-20 flex items-center">
            <Link
              href="#blog"
              className="text-base md:text-lg font-light transition-transform hover:scale-x-105"
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