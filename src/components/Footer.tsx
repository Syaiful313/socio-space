import Link from "next/link";
import {
  PiBehanceLogoLight,
  PiDribbbleLogoLight,
  PiInstagramLogoLight,
  PiTwitterLogoLight,
} from "react-icons/pi";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="my-6 px-4 md:my-8 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-4">
          <Link
            href="#top"
            className="group relative flex h-6 items-center overflow-hidden sm:h-7 md:h-8"
            aria-label="Kembali ke atas"
          >
            <p className="text-base font-light transition-transform duration-300 ease-in-out group-hover:-translate-y-full sm:text-lg md:text-xl">
              Back Top
            </p>
            <p className="absolute translate-y-full text-base font-light transition-transform duration-300 ease-in-out group-hover:translate-y-0 sm:text-lg md:text-xl">
              Back Top
            </p>
            <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 sm:ml-2 sm:h-5 sm:w-5" />
          </Link>

          <p className="order-1 text-sm font-light sm:order-2 sm:text-base">
            Socio Space © 2025
          </p>

          <div className="order-2 flex gap-4 sm:order-3">
            <Button
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-3 text-xl transition-transform hover:scale-x-105 sm:text-2xl md:text-3xl"
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
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-3 text-xl transition-transform hover:scale-x-105 sm:text-2xl md:text-3xl"
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
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-3 text-xl transition-transform hover:scale-x-105 sm:text-2xl md:text-3xl"
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
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-3 text-xl transition-transform hover:scale-x-105 sm:text-2xl md:text-3xl"
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
