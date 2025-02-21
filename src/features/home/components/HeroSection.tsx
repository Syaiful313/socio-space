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
    <section className="bg-white py-12 md:px-20">
      <div className="container mx-auto">
        <div className="pt-24">
          <div className="flex flex-col md:flex-row">
            <div className="m-auto flex w-full flex-col items-start lg:w-1/2 lg:pr-16">
              <p className="mb-4 text-xs text-gray-700">
                WELCOME TO SOCIO SPACE
              </p>
              <h1 className="mb-6 text-3xl text-gray-900 md:text-5xl">
                UNLOCK PRODUCTIVITY, CREATIVITY, AND COMMUNITY
              </h1>
              <p className="mb-8 text-lg font-light">
                Discover a vibrant co-working environment designed for
                collaboration, innovation, and growth. Join Socio Space and
                embark on a journey where work meets inspiration.
              </p>
              <Link
                href="/services"
                className="rounded-full bg-black px-8 py-3 text-sm uppercase text-white hover:bg-gray-800"
              >
                BOOK A SEAT
              </Link>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-4">
              <Carousel
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-[400px] lg:h-[500px]">
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
          <div className="flex items-center justify-between">
            <div className="mt-20 flex gap-2">
              <Button className="rounded-full text-5xl" variant="outline">
                <Link href="/">
                  <PiBehanceLogoLight />
                </Link>
              </Button>
              <Button className="rounded-full text-5xl" variant="outline">
                <Link href="/">
                  <PiDribbbleLogoLight />
                </Link>
              </Button>
              <Button className="rounded-full text-5xl" variant="outline">
                <Link href="/">
                  <PiInstagramLogoLight />
                </Link>
              </Button>
              <Button className="rounded-full text-5xl" variant="outline">
                <Link href="/">
                  <PiTwitterLogoLight />
                </Link>
              </Button>
            </div>
            <div className="mt-20 flex items-center">
              <Link href="#workingSpaces" className="text-xl font-light">
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
