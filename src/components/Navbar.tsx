"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: "HOME", href: "/" },
    { title: "WORKSPACE", href: "/workspaces" },
    { title: "SERVICE", href: "/services" },
    { title: "BLOG", href: "/blogs" },
    { title: "TEAM", href: "/team" },
    { title: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      <nav className="sticky bg-white top-0 z-50 shadow-sm py-4">
        <div className="container m-auto">
          <div className="flex items-center justify-between py-2 px-4 md:px-0">
            <div className="text-lg font-semibold">
              <Image 
                src="/logo.avif" 
                alt="logo" 
                width={130} 
                height={130}
                className="w-24 h-auto md:w-32 lg:w-36" 
                priority
              />
            </div>
            <div className="hidden gap-4 lg:gap-8 md:flex">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="relative overflow-hidden h-6 flex items-center group"
                >
                  <span className="text-sm lg:text-base font-light text-gray-700 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                    {item.title}
                  </span>
                  <span className="absolute text-sm lg:text-base font-light text-gray-900 transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
            <button 
              className="md:hidden p-1 rounded-md hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black text-white">
          <div className="flex justify-between items-center p-4">
            <div className="text-white">
              <Image 
                src="/logo.avif" 
                alt="logo" 
                width={130} 
                height={130}
                className="w-36 h-auto" 
              />
            </div>
            <button 
              onClick={toggleMenu}
              className="text-white p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-grow gap-8 text-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-3xl font-normal text-white hover:text-gray-300 transition-colors"
                onClick={toggleMenu}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;