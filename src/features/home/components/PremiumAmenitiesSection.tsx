"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const features = [
  {
    title: "Spacious parking area",
    image: "/premium1.avif",
  },
  {
    title: "Comfortable spaces",
    image: "/premium2.avif",
  },
  {
    title: "Cozy cafe",
    image: "/premium3.avif",
  },
  {
    title: "Outdoor spaces",
    image: "/premium4.avif",
  },
];

const PremiumAmenitiesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="my-12 sm:my-16 md:my-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2">
          <div className="py-6 md:py-12">
            <p className="mb-2 text-xs uppercase">
              EFFICIENCY AND COMFORT AT YOUR FINGERTIPS
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
              ELEVATE YOUR WORK
              <br className="hidden sm:block" />
              EXPERIENCE WITH PREMIUM
              <br className="hidden sm:block" />
              AMENITIES
            </h1>
          </div>

          <div className="flex items-start md:items-center justify-start md:justify-end mb-8 md:mb-0">
            <Link href="/workspaces">
              <Button className="rounded-full bg-black px-4 sm:px-6 py-2 text-sm sm:text-base text-white hover:bg-gray-800">
                MORE FACILITIES
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-2 mt-6 md:mt-0">
          <div className="relative p-4 sm:p-6 order-2 md:order-1">
            <div className="absolute left-4 sm:left-6 top-4 sm:top-6">
              <span className="text-xs sm:text-sm opacity-70">
                {String(activeFeature + 1).padStart(2, "0")} /{" "}
                {String(features.length).padStart(2, "0")}
              </span>
            </div>

            <div className="absolute bottom-16 left-8 sm:left-12 top-12 sm:top-16 w-px bg-black opacity-20 hidden sm:block"></div>

            <div className="mt-10 sm:mt-16 space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`cursor-pointer pl-0 sm:pl-10 transition-all duration-300 ${
                    activeFeature === index
                      ? "opacity-100"
                      : "opacity-60 hover:opacity-80"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <h2
                    className={`text-base sm:text-lg md:text-xl font-normal ${
                      activeFeature === index
                        ? "bg-black px-3 sm:px-4 py-1 sm:py-2 text-white"
                        : ""
                    }`}
                  >
                    {feature.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-lg order-1 md:order-2">
            <Image
              src={features[activeFeature].image}
              alt={features[activeFeature].title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumAmenitiesSection;