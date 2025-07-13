"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  PiArrowDownRight,
  PiBehanceLogoLight,
  PiDribbbleLogoLight,
  PiInstagramLogoLight,
  PiTwitterLogoLight,
} from "react-icons/pi";

type AutoplayType = any;

const HeroSection = () => {
  const carouselImages = [
    { src: "/gambar1.avif", alt: "Modern coworking space" },
    { src: "/gambar2.avif", alt: "Comfortable seating area" },
    { src: "/gambar3.avif", alt: "Collaboration zone" },
  ];

  const [showCarousel, setShowCarousel] = useState(false);
  const [autoplayPlugin, setAutoplayPlugin] = useState<AutoplayType | null>(
    null,
  );

  useEffect(() => {
    let isMounted = true;

    const initAutoplay = async () => {
      try {
        const AutoplayModule = await import("embla-carousel-autoplay");

        if (isMounted) {
          const plugin = AutoplayModule.default({
            delay: 3000,
            stopOnInteraction: true,
          });
          setAutoplayPlugin(plugin);
          setShowCarousel(true);
        }
      } catch (err) {
        console.error("Error loading carousel plugin:", err);
      }
    };

    initAutoplay();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="bg-white px-4 py-6 md:px-0 md:py-12">
      <div className="container mx-auto">
        <div className="pt-12 md:pt-24">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex w-full flex-col items-start justify-center md:w-1/2">
              <p className="mb-3 text-xs text-gray-700 md:mb-4">
                WELCOME TO SOCIO SPACE
              </p>
              <h1 className="mb-4 text-2xl text-gray-900 sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl">
                UNLOCK PRODUCTIVITY, CREATIVITY, AND COMMUNITY
              </h1>
              <p className="mb-6 text-base md:mb-8 md:text-lg">
                Discover a vibrant co-working environment designed for
                collaboration, innovation, and growth. Join Socio Space and
                embark on a journey where work meets inspiration.
              </p>
              <Link
                href="/services"
                className="rounded-full bg-black px-6 py-2.5 text-sm uppercase text-white hover:bg-gray-800 sm:px-8 sm:py-3"
              >
                BOOK A SEAT
              </Link>
            </div>

            <div className="mt-6 w-full md:mt-0 md:w-1/2 ">
              <div
                className="relative h-[250px] w-full sm:h-[350px] md:h-[400px] lg:h-[500px]"
                style={{ display: showCarousel ? "none" : "block" }}
              >
                <Image
                  src={carouselImages[0].src}
                  alt={carouselImages[0].alt}
                  fill
                  priority={true}
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-md object-cover"
                  fetchPriority="high"
                />
              </div>

              {showCarousel && autoplayPlugin && (
                <Carousel
                  plugins={[autoplayPlugin]}
                  onMouseEnter={() => {
                    if (
                      autoplayPlugin &&
                      typeof autoplayPlugin.stop === "function"
                    ) {
                      autoplayPlugin.stop();
                    }
                  }}
                  onMouseLeave={() => {
                    if (
                      autoplayPlugin &&
                      typeof autoplayPlugin.reset === "function"
                    ) {
                      autoplayPlugin.reset();
                    }
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {carouselImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative h-[250px] w-full sm:h-[350px] md:h-[400px] lg:h-[500px]">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            priority={index === 0}
                            loading={index === 0 ? "eager" : "lazy"}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="rounded-md object-cover"
                            fetchPriority={index === 0 ? "high" : "auto"}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              )}
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between sm:flex-row md:mt-16 lg:mt-20">
            <div className="mb-6 flex gap-2 sm:mb-0">
              <Button
                className="rounded-full p-2 text-3xl sm:p-3 sm:text-4xl md:text-5xl"
                variant="outline"
                aria-label="Behance"
              >
                <Link href="/" aria-label="Behance">
                  <PiBehanceLogoLight />
                </Link>
              </Button>
              <Button
                className="rounded-full p-2 text-3xl sm:p-3 sm:text-4xl md:text-5xl"
                variant="outline"
                aria-label="Dribbble"
              >
                <Link href="/" aria-label="Dribbble">
                  <PiDribbbleLogoLight />
                </Link>
              </Button>
              <Button
                className="rounded-full p-2 text-3xl sm:p-3 sm:text-4xl md:text-5xl"
                variant="outline"
                aria-label="Instagram"
              >
                <Link href="/" aria-label="Instagram">
                  <PiInstagramLogoLight />
                </Link>
              </Button>
              <Button
                className="rounded-full p-2 text-3xl sm:p-3 sm:text-4xl md:text-5xl"
                variant="outline"
                aria-label="Twitter"
              >
                <Link href="/" aria-label="Twitter">
                  <PiTwitterLogoLight />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="#workingSpaces"
                className="group relative flex h-6 items-center overflow-hidden sm:h-7 md:h-8"
              >
                <p className="text-base font-light transition-transform duration-300 ease-in-out group-hover:-translate-y-full sm:text-lg md:text-xl">
                  Scroll to Explore
                </p>
                <p className="absolute translate-y-full text-base font-light transition-transform duration-300 ease-in-out group-hover:translate-y-0 sm:text-lg md:text-xl">
                  Scroll to Explore
                </p>
              </Link>
              <PiArrowDownRight className="text-xl md:text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
