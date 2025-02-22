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
            <p className="text-lg font-light text-gray-700">
              Get in Touch with Us
            </p>
            <h1 className="my-6 text-3xl uppercase text-gray-900 md:text-5xl">
              Ready to Join Socio Space?
            </h1>
            <p className="mb-8 text-lg font-light">
              Have questions or ready to take the next step? Reach out to us.
              We're here to help you on your journey to a more dynamic and
              productive workspace.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="mt-20 flex gap-2">
            <Button
              className="rounded-full text-5xl transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
                <PiBehanceLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-5xl transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
                <PiDribbbleLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-5xl transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
                <PiInstagramLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-5xl transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
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
