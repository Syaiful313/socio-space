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
    <footer className="my-6 md:my-8 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          <Link
            href=""
            className="font-light transition-transform hover:scale-x-105 order-3 sm:order-1"
          >
            <div className="flex items-center">
              <p className="text-sm sm:text-base">Back Top</p>
              <ArrowUpRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
            </div>
          </Link>
          
          <p className="font-light text-sm sm:text-base order-1 sm:order-2">Socio Space © 2025</p>
          
          <div className="flex gap-1 order-2 sm:order-3">
            <Button
              className="rounded-full text-xl sm:text-2xl md:text-3xl p-1 sm:p-2 transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
                <PiBehanceLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-xl sm:text-2xl md:text-3xl p-1 sm:p-2 transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
                <PiDribbbleLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-xl sm:text-2xl md:text-3xl p-1 sm:p-2 transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
                <PiInstagramLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-xl sm:text-2xl md:text-3xl p-1 sm:p-2 transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
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