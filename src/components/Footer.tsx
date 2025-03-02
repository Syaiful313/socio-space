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
            href=""
            className="order-3 font-light transition-transform hover:scale-x-105 sm:order-1"
          >
            <div className="flex items-center">
              <p className="text-sm sm:text-base">Back Top</p>
              <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 sm:ml-2 sm:h-5 sm:w-5" />
            </div>
          </Link>

          <p className="order-1 text-sm font-light sm:order-2 sm:text-base">
            Socio Space © 2025
          </p>

          <div className="order-2 flex gap-1 sm:order-3">
            <Button
              className="rounded-full p-1 text-xl transition-transform hover:scale-x-105 sm:p-2 sm:text-2xl md:text-3xl"
              variant="outline"
              aria-label="Behance"
            >
              <Link href="/" aria-label="Behance">
                <PiBehanceLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full p-1 text-xl transition-transform hover:scale-x-105 sm:p-2 sm:text-2xl md:text-3xl"
              variant="outline"
              aria-label="Dribbble"
            >
              <Link href="/" aria-label="Dribbble">
                <PiDribbbleLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full p-1 text-xl transition-transform hover:scale-x-105 sm:p-2 sm:text-2xl md:text-3xl"
              variant="outline"
              aria-label="Instagram"
            >
              <Link href="/" aria-label="Instagram">
                <PiInstagramLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full p-1 text-xl transition-transform hover:scale-x-105 sm:p-2 sm:text-2xl md:text-3xl"
              variant="outline"
              aria-label="Twitter"
            >
              <Link href="/" aria-label="Twitter">
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
