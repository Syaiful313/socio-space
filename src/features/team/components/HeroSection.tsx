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
    <section className="py-6 md:py-8">
      <div className="container mx-auto">
        <div className="pt-0 md:pt-24">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex w-full flex-col items-center">
              <h1 className="mb-4 text-5xl font-light text-gray-900 sm:text-3xl md:mb-6 md:text-4xl lg:text-7xl">
                Meet our Team
              </h1>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between sm:flex-row md:mt-16 lg:mt-20">
            <div className="mb-6 flex gap-2 sm:mb-0">
              <Button
                className="rounded-full p-2 text-3xl sm:p-3 sm:text-4xl md:text-5xl"
                variant="outline"
                aria-label="Behance"
              >
                <Link href="/" aria-label="Behance">
                  <PiBehanceLogoLight />
                </Link>
              </Button>
              <Button
                className="rounded-full p-2 text-3xl sm:p-3 sm:text-4xl md:text-5xl"
                variant="outline"
                aria-label="Dribbble"
              >
                <Link href="/" aria-label="Dribbble">
                  <PiDribbbleLogoLight />
                </Link>
              </Button>
              <Button
                className="rounded-full p-2 text-3xl sm:p-3 sm:text-4xl md:text-5xl"
                variant="outline"
                aria-label="Instagram"
              >
                <Link href="/" aria-label="Instagram">
                  <PiInstagramLogoLight />
                </Link>
              </Button>
              <Button
                className="rounded-full p-2 text-3xl sm:p-3 sm:text-4xl md:text-5xl"
                variant="outline"
                aria-label="Twitter"
              >
                <Link href="/" aria-label="Twitter">
                  <PiTwitterLogoLight />
                </Link>
              </Button>
            </div>
            <div className="flex items-center">
              <Link
                href="#team"
                className="text-base font-light sm:text-lg md:text-xl"
              >
                <p>Scroll to Explore</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
