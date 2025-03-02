import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="container m-auto p-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-lg font-semibold">
            <Image src="/logo.avif" alt="logo" width={130} height={130} />
          </div>
          <div className="hidden gap-6 space-x-4 md:flex">
            <Link
              href="/"
              className="font-light text-gray-700 hover:text-gray-900"
            >
              HOME
            </Link>
            <Link
              href="/workspaces"
              className="font-light text-gray-700 hover:text-gray-900"
            >
              WORKSPACE
            </Link>
            <Link
              href="/services"
              className="font-light text-gray-700 hover:text-gray-900"
            >
              SERVICE
            </Link>
            <Link
              href="/blogs"
              className="font-light text-gray-700 hover:text-gray-900"
            >
              BLOG
            </Link>
            <Link
              href="/team"
              className="font-light text-gray-700 hover:text-gray-900"
            >
              TEAM
            </Link>
            <Link
              href="/contact"
              className="font-light text-gray-700 hover:text-gray-900"
            >
              CONTACT US
            </Link>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="block md:hidden">
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>HOME</DropdownMenuItem>
              <DropdownMenuItem>WORKSPACE</DropdownMenuItem>
              <DropdownMenuItem>SERVICE</DropdownMenuItem>
              <DropdownMenuItem>TEAM</DropdownMenuItem>
              <DropdownMenuItem>CONTACT US</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
