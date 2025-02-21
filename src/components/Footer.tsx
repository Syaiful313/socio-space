import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { Button } from "./ui/button";
import {
  PiBehanceLogoLight,
  PiDribbbleLogoLight,
  PiInstagramLogoLight,
  PiTwitterLogoLight,
} from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto my-6">
        <div className="grid space-y-2 px-4 py-8 md:pb-48">
          <p className="text-base font-light md:text-2xl">
            Your Co-Working Adventure Begins Now
          </p>
          <p className="text-base font-light md:text-2xl">
            Join Socio Space Today!
          </p>
        </div>

        <div className="flex items-center justify-between">
          <Button variant="ghost" className="font-light">
            Back Top{" "}
          </Button>
          <p className="font-light">Socio Space © 2025</p>
          <div className="flex gap-1">
            <Button className="rounded-full text-3xl" variant="outline">
              <Link href="/">
                <PiBehanceLogoLight />
              </Link>
            </Button>
            <Button className="rounded-full text-3xl" variant="outline">
              <Link href="/">
                <PiDribbbleLogoLight />
              </Link>
            </Button>
            <Button className="rounded-full text-3xl" variant="outline">
              <Link href="/">
                <PiInstagramLogoLight />
              </Link>
            </Button>
            <Button className="rounded-full text-3xl" variant="outline">
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
