"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  PiBehanceLogoLight,
  PiDribbbleLogoLight,
  PiInstagramLogoLight,
  PiTwitterLogoLight,
} from "react-icons/pi";

const HeroSection = () => {
  const carouselImages = [
    { src: "/gambar1.avif", alt: "Modern coworking space" },
    { src: "/gambar2.avif", alt: "Comfortable seating area" },
    { src: "/gambar3.avif", alt: "Collaboration zone" },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  return (
    <section className="bg-white py-6 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="pt-12 md:pt-24">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex w-full flex-col items-start md:w-1/2 md:pr-6 lg:pr-16">
              <p className="mb-3 md:mb-4 text-xs text-gray-700">
                WELCOME TO SOCIO SPACE
              </p>
              <h1 className="mb-4 md:mb-6 text-2xl sm:text-3xl text-gray-900 md:text-4xl lg:text-5xl font-bold">
                UNLOCK PRODUCTIVITY, CREATIVITY, AND COMMUNITY
              </h1>
              <p className="mb-6 md:mb-8 text-base md:text-lg font-light">
                Discover a vibrant co-working environment designed for
                collaboration, innovation, and growth. Join Socio Space and
                embark on a journey where work meets inspiration.
              </p>
              <Link
                href="/services"
                className="rounded-full bg-black px-6 sm:px-8 py-2.5 sm:py-3 text-sm uppercase text-white hover:bg-gray-800"
              >
                BOOK A SEAT
              </Link>
            </div>

            <div className="w-full mt-6 md:mt-0 md:w-1/2 md:pl-2 lg:pl-4">
              <Carousel
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className="w-full"
              >
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="rounded-md object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between mt-10 md:mt-16 lg:mt-20">
            <div className="flex gap-2 mb-6 sm:mb-0">
              <Button className="rounded-full text-3xl sm:text-4xl md:text-5xl p-2 sm:p-3" variant="outline">
                <Link href="/">
                  <PiBehanceLogoLight />
                </Link>
              </Button>
              <Button className="rounded-full text-3xl sm:text-4xl md:text-5xl p-2 sm:p-3" variant="outline">
                <Link href="/">
                  <PiDribbbleLogoLight />
                </Link>
              </Button>
              <Button className="rounded-full text-3xl sm:text-4xl md:text-5xl p-2 sm:p-3" variant="outline">
                <Link href="/">
                  <PiInstagramLogoLight />
                </Link>
              </Button>
              <Button className="rounded-full text-3xl sm:text-4xl md:text-5xl p-2 sm:p-3" variant="outline">
                <Link href="/">
                  <PiTwitterLogoLight />
                </Link>
              </Button>
            </div>
            <div className="flex items-center">
              <Link href="#workingSpaces" className="text-base sm:text-lg md:text-xl font-light">
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