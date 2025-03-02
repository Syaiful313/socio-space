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
            className="order-3 font-light transition-transform hover:scale-x-105 sm:order-1 py-2 px-3"
            aria-label="Kembali ke atas"
          >
            <div className="flex items-center">
              <p className="text-sm sm:text-base">Back Top</p>
              <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 sm:ml-2 sm:h-5 sm:w-5" />
            </div>
          </Link>

          <p className="order-1 text-sm font-light sm:order-2 sm:text-base">
            Socio Space © 2025
          </p>

          <div className="order-2 flex gap-4 sm:order-3">
            <Button
              className="rounded-full p-3 text-xl transition-transform hover:scale-x-105 sm:text-2xl md:text-3xl min-w-[44px] min-h-[44px] flex items-center justify-center"
              variant="outline"
              aria-label="Behance"
            >
              <Link 
                href="/" 
                aria-label="Behance"
                className="w-full h-full flex items-center justify-center"
              >
                <PiBehanceLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full p-3 text-xl transition-transform hover:scale-x-105 sm:text-2xl md:text-3xl min-w-[44px] min-h-[44px] flex items-center justify-center"
              variant="outline"
              aria-label="Dribbble"
            >
              <Link 
                href="/" 
                aria-label="Dribbble"
                className="w-full h-full flex items-center justify-center"
              >
                <PiDribbbleLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full p-3 text-xl transition-transform hover:scale-x-105 sm:text-2xl md:text-3xl min-w-[44px] min-h-[44px] flex items-center justify-center"
              variant="outline"
              aria-label="Instagram"
            >
              <Link 
                href="/" 
                aria-label="Instagram"
                className="w-full h-full flex items-center justify-center"
              >
                <PiInstagramLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full p-3 text-xl transition-transform hover:scale-x-105 sm:text-2xl md:text-3xl min-w-[44px] min-h-[44px] flex items-center justify-center"
              variant="outline"
              aria-label="Twitter"
            >
              <Link 
                href="/" 
                aria-label="Twitter"
                className="w-full h-full flex items-center justify-center"
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