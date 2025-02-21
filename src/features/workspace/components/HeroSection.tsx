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
    <section className="bg-white py-12 md:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex max-w-3xl flex-col items-start">
            <p className="font-light text-xl text-gray-700">
              Tailored Spaces for Every Workstyle
            </p>
            <h1 className="mb-6 text-3xl text-gray-900 md:text-7xl">
              Explore Our Versatile Co-Working Environments
            </h1>
            <p className="mb-8 text-lg font-light">
              From private offices to open, collaborative hubs, Socio Space
              offers an array of thoughtfully designed workspaces. Find the
              perfect space that adapts to your unique needs.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="mt-20 flex gap-2">
            <Button className="rounded-full text-5xl transition-transform hover:scale-x-105" variant="outline">
              <Link href="/">
                <PiBehanceLogoLight />
              </Link>
            </Button>
            <Button className="rounded-full text-5xl transition-transform hover:scale-x-105" variant="outline">
              <Link href="/">
                <PiDribbbleLogoLight />
              </Link>
            </Button>
            <Button className="rounded-full text-5xl transition-transform hover:scale-x-105" variant="outline">
              <Link href="/">
                <PiInstagramLogoLight />
              </Link>
            </Button>
            <Button className="rounded-full text-5xl transition-transform hover:scale-x-105" variant="outline">
              <Link href="/">
                <PiTwitterLogoLight />
              </Link>
            </Button>
          </div>
          <div className="mt-20 flex items-center">
            <Link href="#aboutSection" className="text-lg font-light transition-transform hover:scale-x-105">
              <p>Scroll to Explore</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
