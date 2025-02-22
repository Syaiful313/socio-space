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
    <footer className="my-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link
            href=""
            className="font-light transition-transform hover:scale-x-105"
          >
            <div className="flex items-center">
              <p>Back Top</p>
              <ArrowUpRight className="ml-2 h-5 w-5 shrink-0" />
            </div>
          </Link>
          <p className="font-light">Socio Space © 2025</p>
          <div className="flex gap-1">
            <Button
              className="rounded-full text-3xl transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
                <PiBehanceLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-3xl transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
                <PiDribbbleLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-3xl transition-transform hover:scale-x-105"
              variant="outline"
            >
              <Link href="/">
                <PiInstagramLogoLight />
              </Link>
            </Button>
            <Button
              className="rounded-full text-3xl transition-transform hover:scale-x-105"
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
